import React, { useState, useEffect } from 'react';
import { socket } from '../App';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SingleMessage from './singleMsg';
import { url } from '../url';
import {
    encryptMessage,
    decryptMessage,
    decryptChat,
} from '../Authentication/keys';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
} from '@chakra-ui/react';

// (i) receive data from the database at first render
// (ii) whenever got new message from the server
//        -- push the data into the msg
//        -- render the new data on the window

function Chat(props) {
    const userId = useSelector((state) => state.userId);
    const [chats, setChats] = useState([]);
    const [online, setOnline] = useState();
    const [chatName, setChatName] = useState();
    const [publicKey, setPublicKey] = useState({});

    var from = 'shriRam';
    var to = 'JaiRam';
    var imageAddress = '';

    const { state } = useLocation();

    if (state === null) {
        from = userId;
        to = props.data.chatName;
        imageAddress = props.data.imageAddress;
        if (chatName !== to) {
            setChatName(to);
        }
    } else {
        from = state.from;
        to = state.to;
        imageAddress = state.imageAddress;
    }
    // console.log(from, to);

    const OverlayOne = () => (
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(8px) ' />
    );

    const [toDeleted, setToDeleted] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(<OverlayOne />);

    useEffect(() => {
        // console.log('Scroll function is active');

        if (chats.length > 0) {
            const elm = document.getElementById(chats.length - 1);
            elm.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                alignToTop: true,
            });
        }
    }, [chats]);

    useEffect(() => {
        // fetch data from the chat server and display
        // console.log('post request frm useeffect in chat');
        axios
            .post(
                `${url}/getchatdata`,
                {
                    from: from,
                    to: to,
                    length: 50,
                },
                { withCredentials: true }
            )
            .then((response) => {
                // setChats(response.data.chats);

                var chat = decryptChat(userId, response.data.chats);
                setChats(chat);

                setPublicKey({
                    pk1: response.data.pk1,
                    pk2: response.data.pk2,
                });

                // console.log(response.data.pk1);
                // console.log(response.data);
            })
            .catch((er) => console.log(er));
    }, [chatName]);

    const checkStatus = () => {
        socket.emit(
            'is-online',

            {
                userId: to,
                sendTo: from,
            }
        );
    };

    useEffect(() => {
        setInterval(checkStatus, 5000);

        return () => {
            clearInterval();
        };
    });

    useEffect(() => {
        const data = (info) => {
            console.log(info.isOnline);
            if (info.isOnline !== online) {
                setOnline(info.isOnline);
            }
        };
        socket.on('is-online', data);

        return () => {
            socket.off('is-online', data);
        };
    }, []);

    useEffect(() => {
        // for realtime communication of the two users

        var addMessage = (msg) => {
            if (msg.fromUserId === to) {
                const decryptMsg = decryptMessage(
                    localStorage.getItem('privateKey'),
                    msg.message.split(' ')[1]
                );

                const obj = { ...msg, message: decryptMsg };

                setChats((prev) => [...prev, obj]);
                console.log(chats);
            }
        };

        socket.on('private-msg', addMessage);

        return () => {
            socket.off('private-msg', addMessage);
        };
    });

    const sendMsg = (e) => {
        // console.log('Send message function');

        e.preventDefault();
        var msg = document.getElementById('userMsg').value;

        if (msg.length === 0) {
            return;
        }

        var today = new Date().toLocaleString('en-GB', {
            timeZone: 'IST',
        });

        let encrypMsg = encryptMessage(publicKey, msg);

        socket.emit('private-msg', {
            fromUserId: from,
            toUserId: to,
            message: encrypMsg,
            time: today,
        });

        setChats((prev) => [
            ...prev,
            { fromUserId: from, toUserId: to, message: msg, time: today },
        ]);

        document.getElementById('userMsg').value = '';
    };

    const deleteMessage = (e) => {
        e.preventDefault();
        onClose();
        const data = toDeleted;

        axios
            .post(
                `${url}/delete/message/${data._id}`,
                { data: data },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data === 'Message Deleted Successfully!') {
                    var chat = [...chats];
                    chat[data.index] = {
                        ...chats[data.index],
                        message: `You Deleted this message`,
                    };
                    setChats(chat);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const chatClick = (e, data, index) => {
        setToDeleted({ ...data, index: index });
        setOverlay(<OverlayOne />);
        onOpen();
    };

    return (
        <div className=''>
            <div className='w-full md:w-[60vw]   '>
                <div className='flex-1'>
                    <div className='flex flex-row  rounded-lg border-2 w-full md:w-[60vw] py-3 backdrop-blur-lg  z-10 absolute top-19 bg-black bg-opacity-20 '>
                        {/* <span> */}
                        <div className='relative w-12 h-12 overflow-hidden  rounded-full dark:bg-gray-300 ml-3 '>
                            {imageAddress === '' || imageAddress === null ? (
                                <svg
                                    className='absolute w-12 h-12 text-gray-400 -left-1'
                                    fill='currentColor'
                                    viewBox='0 0 20 20'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            ) : (
                                <img
                                    className='object-cover h-12 w-12'
                                    src={`${url}/image/${imageAddress}`}
                                />
                            )}
                        </div>
                        {/* </span> */}
                        <div className='flex flex-col'>
                            <span className='text-xl mx-3 text-gray-800 font-bold'>
                                {to}
                            </span>
                            <span className='mx-3 text-sm text-gray-600 font-semibold '>
                                {online ? (
                                    <span>
                                        Online
                                        <span className='text-green-600 ml-1'>
                                            ●
                                        </span>
                                    </span>
                                ) : (
                                    <span>
                                        Offline
                                        <span className='text-red-600 ml-1'>
                                            ●
                                        </span>
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col last:pb-4 pt-2 border-2 rounded-t-[2rem] pb-20 h-screen overflow-y-auto backdrop-blur-3xl bg-white bg-opacity-70 '>
                        {chats.length > 0
                            ? chats.map((item, ind) => (
                                  <div
                                      className='mx-1 first:mt-14 '
                                      key={ind + 'head'}
                                  >
                                      <div className='mb-2' key={ind + 'date'}>
                                          {ind > 1 &&
                                          chats[ind - 1].time != null &&
                                          item.time != null &&
                                          chats[ind - 1].time.substring(
                                              0,
                                              10
                                          ) !== item.time.substring(0, 10) ? (
                                              <DateShow date={item.time} />
                                          ) : (
                                              ''
                                          )}
                                      </div>

                                      <div
                                          className='flex-1 mb-1'
                                          id={ind}
                                          key={ind + 'message'}
                                          onClick={(e) =>
                                              chatClick(e, item, ind)
                                          }
                                      >
                                          <SingleMessage
                                              data={item}
                                              key={ind}
                                              currUser={userId}
                                          />
                                          {/* <BackdropExample /> */}
                                      </div>
                                  </div>
                              ))
                            : ''}
                    </div>
                    <div className='flex  pt-2 pb-6 flex-row items-center justify-center absolute bottom-0 w-full md:w-[60vw]    backdrop-blur-lg'>
                        <form className='flex flex-row flex-1 '>
                            <input
                                type='text'
                                id='userMsg'
                                className='block border rounded-2xl border-gray-300 focus:outline-none focus:border-gray-500 px-2 py-1 w-full  '
                                placeholder='Send Message'
                                autoComplete='off'
                            />
                            <button
                                type='submit'
                                onClick={sendMsg}
                                className=' text-sm border-2 hover:bg-blue-500 border-gray-400 rounded-full  text-[#F0EBE3] px-4 py-1 -ml-24 '
                            >
                                <img
                                    className='h-8 w-8'
                                    src='https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-up-arrow-arrow-flatarticons-blue-flatarticons-5.png'
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Modal size='sm' isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent className='mx-6'>
                    {/* <ModalHeader></ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Delete Message?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button className='mr-2 ' size='sm' onClick={onClose}>
                            Close
                        </Button>

                        <Button
                            className=''
                            colorScheme='red'
                            size='sm'
                            onClick={deleteMessage}
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

function DateShow(props) {
    const date = props.date;
    // console.log(date); //  14/07/2022, 23:49:02

    const months = [
        'January',
        'Febraury',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <div className='flex flex-1 justify-center '>
            <span className='bg-gray-400 px-2 rounded-lg text-gray-100 text-sm'>
                {date.substring(0, 2) +
                    ' ' +
                    months[parseInt(date.substring(3, 5)) - 1] +
                    ' ' +
                    date.substring(6, 10)}
            </span>
        </div>
    );
}

export default Chat;

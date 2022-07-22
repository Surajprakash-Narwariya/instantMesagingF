import React from 'react';
import ChatInterface from './chatInterface';
import { useState, useEffect } from 'react';
import { socket } from '../App';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Chat from './Chat';
import { url } from '../url';

function QuickChat(props) {
    const curUser = useSelector((state) => state.userId);
    const navigate = useNavigate();
    const [searchId, setSearchId] = useState('');
    const [s, setS] = useState('');
    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState([]);
    console.log(props);

    socket.emit('login', {
        user: curUser,
    });

    useEffect(() => {
        if (curUser !== null && curUser !== '') {
            allDataPoint();
        } else {
            navigate('/login');
        }
    }, []);

    const openChat = (e, item) => {
        e.preventDefault();

        //
        // if(window.innerWidth > 600)
        console.log(window.innerWidth);

        if (window.innerWidth > 768) {
            props.data(item);
        } else {
            navigate('/chat', {
                state: {
                    to: item.chatName,
                    from: curUser,
                    imageAddress: item.imageAddress,
                },
            });
        }

        // console.log(e.target.id);
    };

    const allDataPoint = async () => {
        const contacts = await getContacts();
        // console.log(contacts.data[0]);
        const lastmsg = await getLastMessage(contacts.data);
        // console.log(lastmsg.data[0].chats[0].message);
        // lastmsg.data.chats[i];
        const image = await getProfilePicture(contacts.data);
        // console.log(image.data[0].imageAddress);

        var chatInterfaceData = [];

        for (var i = 0; i < contacts.data.length; i++) {
            chatInterfaceData[i] = {
                chatName: contacts.data[i],
                message: lastmsg.data[i].chats[0].message,
                time: lastmsg.data[i].chats[0].time,
                imageAddress: image.data[i].imageAddress,
            };
        }

        setContact(chatInterfaceData);
    };

    const getProfilePicture = async (contacts) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    `${url}/getprofilePicture`,
                    { contacts: contacts },
                    { withCredentials: true }
                )
                .then((res) => {
                    // console.log(res);
                    resolve({ data: res.data });
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    };

    const getLastMessage = async (response) => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    `${url}/getfirstmessage`,
                    {
                        from: curUser,
                        to: response,
                    },
                    { withCredentials: true }
                )
                .then((res) => {
                    // console.log(res.data);
                    resolve({
                        data: res.data,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    };

    const getContacts = () => {
        return new Promise((resolve, reject) => {
            axios
                .post(
                    `${url}/quickchat/contacts`,
                    {
                        userId: curUser,
                    },
                    { withCredentials: true }
                )
                .then((response) => {
                    // setContacts(response.data);
                    // console.log(response.data);
                    resolve({ data: response.data });
                    // return response.data;
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    };

    const addUser = (e) => {
        e.preventDefault();
        var userName = document.getElementById('inputUsername').value;

        if (s === 'Send Message') {
            axios
                .post(`${url}/connect`, {
                    senderId: curUser,
                    receiverId: userName,
                })
                .then((response) => {
                    console.log(response.data);
                });
            document.getElementById('inputUsername').value = '';
            navigate('/chat', { state: { to: userName, from: curUser } });
        }
    };

    const handleSearch = (e) => {
        var userName = document.getElementById('inputUsername').value;
        axios
            .post(`${url}/search`, {
                userId: userName,
            })
            .then((response) => {
                setSearchId(response.data);
                if (response.data === 'User Exists') {
                    setS('Send Message');
                } else {
                    setS('Invite on QuickChat');
                }
            });
    };

    return (
        <>
            <div className=' w-full md:w-[40vw] h-screen overflow-y-auto backdrop-blur-lg m-0  bg-black bg-opacity-10 '>
                {' '}
                <div className=' border-l border-t p-2 rounded-l-lg border-gray-300'>
                    <div className='flex flex-row  py-4      '>
                        <div className='flex flex-col w-100 ml-2  '>
                            <div className='text-3xl font-bold text-gray-800 '>
                                Messages
                            </div>
                            <div className=' flex flex-row relative mt-1'>
                                <input
                                    className='mr-2 mt-2   w-[94vw] md:w-[32vw]  border-2 rounded focus:outline-gray-300  px-2 bg-gray-100  outline-gray-400 '
                                    type='text'
                                    placeholder='Search People'
                                    id='inputUsername'
                                />
                                <div className='p-0 mt-4'>
                                    <div className='group relative'>
                                        <button
                                            onClick={handleSearch}
                                            className=' text-white px-3  rounded -ml-14 '
                                        >
                                            <svg
                                                fill='#737373'
                                                className='-mb-1 '
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 128 128'
                                                width='25px'
                                                height='25px'
                                            >
                                                {' '}
                                                <path d='M 52.349609 14.400391 C 42.624609 14.400391 32.9 18.1 25.5 25.5 C 10.7 40.3 10.7 64.399219 25.5 79.199219 C 32.9 86.599219 42.600391 90.300781 52.400391 90.300781 C 62.200391 90.300781 71.900781 86.599219 79.300781 79.199219 C 94.000781 64.399219 93.999219 40.3 79.199219 25.5 C 71.799219 18.1 62.074609 14.400391 52.349609 14.400391 z M 52.300781 20.300781 C 60.500781 20.300781 68.700391 23.399219 74.900391 29.699219 C 87.400391 42.199219 87.4 62.5 75 75 C 62.5 87.5 42.199219 87.5 29.699219 75 C 17.199219 62.5 17.199219 42.199219 29.699219 29.699219 C 35.899219 23.499219 44.100781 20.300781 52.300781 20.300781 z M 52.300781 26.300781 C 45.400781 26.300781 38.9 29 34 34 C 29.3 38.7 26.700391 44.800391 26.400391 51.400391 C 26.300391 53.100391 27.600781 54.4 29.300781 54.5 L 29.400391 54.5 C 31.000391 54.5 32.300391 53.199609 32.400391 51.599609 C 32.600391 46.499609 34.699219 41.799219 38.199219 38.199219 C 41.999219 34.399219 47.000781 32.300781 52.300781 32.300781 C 54.000781 32.300781 55.300781 31.000781 55.300781 29.300781 C 55.300781 27.600781 54.000781 26.300781 52.300781 26.300781 z M 35 64 A 3 3 0 0 0 32 67 A 3 3 0 0 0 35 70 A 3 3 0 0 0 38 67 A 3 3 0 0 0 35 64 z M 83.363281 80.5 C 82.600781 80.5 81.850781 80.800391 81.300781 81.400391 C 80.100781 82.600391 80.100781 84.499609 81.300781 85.599609 L 83.800781 88.099609 C 83.200781 89.299609 82.900391 90.6 82.900391 92 C 82.900391 94.4 83.8 96.700391 85.5 98.400391 L 98.300781 111 C 100.10078 112.8 102.39922 113.69922 104.69922 113.69922 C 106.99922 113.69922 109.29961 112.79961 111.09961 111.09961 C 114.59961 107.59961 114.59961 101.90039 111.09961 98.400391 L 98.300781 85.599609 C 96.600781 83.899609 94.300391 83 91.900391 83 C 90.500391 83 89.2 83.300391 88 83.900391 L 85.5 81.400391 C 84.9 80.800391 84.125781 80.5 83.363281 80.5 z M 91.900391 88.900391 C 92.700391 88.900391 93.5 89.200781 94 89.800781 L 106.69922 102.5 C 107.89922 103.7 107.89922 105.59922 106.69922 106.69922 C 105.49922 107.89922 103.6 107.89922 102.5 106.69922 L 89.800781 94.099609 C 89.200781 93.499609 88.900391 92.700391 88.900391 91.900391 C 88.900391 91.100391 89.200781 90.300781 89.800781 89.800781 C 90.400781 89.200781 91.100391 88.900391 91.900391 88.900391 z' />
                                            </svg>
                                        </button>
                                        <nav
                                            tabIndex='0'
                                            className=' border-1 backdrop-blur-lg bg-white bg-opacity-80  z-50 invisible border-gray-500 rounded w-full md:w-[30vw] right-5 absolute top-8 transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 '
                                        >
                                            <ul className='py-2 '>
                                                <li>
                                                    <span className=' text-md block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                                                        {searchId}
                                                    </span>
                                                </li>
                                                <li>
                                                    <span
                                                        className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                                                        onClick={addUser}
                                                    >
                                                        {s}
                                                    </span>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='pt-2  rounded-[2rem] mb-1 mx-0 px-0 mt-3 bg-black bg-opacity-10'>
                        {contact.length > 0
                            ? contact.map((item, ind) => {
                                  return (
                                      <div
                                          onClick={(e) => openChat(e, item)}
                                          key={ind + 'div'}
                                      >
                                          <ChatInterface
                                              key={ind}
                                              data={item}
                                              id={ind}
                                          />
                                      </div>
                                  );
                              })
                            : ''}
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuickChat;

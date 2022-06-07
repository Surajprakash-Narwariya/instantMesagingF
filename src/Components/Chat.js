import React, { useState, useEffect } from 'react';
import { socket } from '../App';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import SingleMessage from './singleMsg';

// (i) receive data from the database at first render
// (ii) whenever got new message from the server
//        -- push the data into the msg
//        -- render the new data on the window

function Chat() {
    const userId = useSelector((state) => state.userId);
    const [chats, setChats] = useState([]);

    const { state } = useLocation();
    const { from, to } = state;

    useEffect(() => {
        // fetch data from the chat server and display
        // console.log('post request frm useeffect in chat');
        axios
            .post('/getDataFromDB', {
                from: from,
                to: to,
            })
            .then((response) => setChats(response.data))
            .catch((er) => console.log(er));
    }, []);

    useEffect(() => {
        // for realtime communication of the two users
        // console.log('useeffect with socket in chat');
        var addMessage = (msg) => setChats((prev) => [...prev, msg]);

        socket.on('private-msg', addMessage);
        // console.log(chats);

        if (chats.length > 0) {
            const elm = document.getElementById(chats.length - 1);
            elm.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                alignToTop: true,
            });
        }

        return () => {
            socket.off('private-msg', addMessage);
        };
    }, [chats]);

    const sendMsg = (e) => {
        e.preventDefault();
        var msg = document.getElementById('userMsg').value;
        // console.log(msg);
        // var to = userId === 'Suraj99' ? 'rajnikant' : 'Suraj99';

        socket.emit('private-msg', {
            fromUserId: from,
            toUserId: to,
            message: msg,
        });

        setChats((prev) => [
            ...prev,
            { fromUserId: from, toUserId: to, message: msg },
        ]);

        document.getElementById('userMsg').value = '';

        if (chats.length > 0) {
            const elm = document.getElementById(chats.length - 1);
            elm.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                alignToTop: true,
            });
        }
    };

    return (
        <div>
            <div className='container-sm'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        {/* <h1 className='text-center'>Chats will appear here</h1> */}
                        <div className='card-body alert alert-dark fromName'>
                            <span>
                                <img
                                    className='circularImage'
                                    src='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'
                                />
                            </span>
                            <span className='h3 '>{to}</span>
                        </div>
                    </div>

                    <div className='col-md-8' id='overf'>
                        {chats.map((item, ind) => (
                            <div className='row' id={ind}>
                                <SingleMessage
                                    data={item}
                                    key={ind}
                                    currUser={userId}
                                />
                            </div>
                        ))}
                    </div>

                    <div className='col-md-8 smsbar'>
                        <div className='row '>
                            <div className=' input-group '>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Message'
                                    aria-label="Recipient's username"
                                    aria-describedby='button-addon2'
                                    id='userMsg'
                                />
                                <button
                                    className='btn btn-outline-secondary'
                                    type='button'
                                    id='button-addon2'
                                    onClick={sendMsg}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;

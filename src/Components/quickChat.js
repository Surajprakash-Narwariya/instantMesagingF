import React from 'react';
import ChatInterface from './chatInterface';
import { useState, useEffect } from 'react';
import { socket } from '../App';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function QuickChat() {
    const curUser = useSelector((state) => state.userId);
    const navigate = useNavigate();
    const [searchId, setSearchId] = useState('');
    const [s, setS] = useState('');
    const [contacts, setContacts] = useState([]);
    // console.log(curUser);

    useEffect(() => {
        if (curUser !== null && curUser !== '') {
            axios
                .post('/quickchat/contacts', {
                    userId: curUser,
                })
                .then((response) => {
                    setContacts(response.data);
                    // console.log(response);
                })
                .catch((err) => console.log(err));
        } else {
            navigate('/login');
        }
    }, []);

    const openChat = (e) => {
        e.preventDefault();
        navigate('/chat', { state: { to: e.target.id, from: curUser } });
        // console.log(e.target.id);
    };

    const addUser = (e) => {
        e.preventDefault();
        var userName = document.getElementById('inputUsername').value;

        if (s === 'Send Message') {
            axios
                .post('/connect', {
                    senderId: curUser,
                    receiverId: userName,
                })
                .then((response) => {
                    console.log(response.data);
                });
        }
        document.getElementById('inputUsername').value = '';
        navigate('/chat', { state: { to: userName, from: curUser } });
    };

    const handleSearch = (e) => {
        var userName = document.getElementById('inputUsername').value;
        axios
            .post('/search', {
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
            <div className='container-sm'>
                <div className='row justify-content-center '>
                    <div className='col-md-8'>
                        <div className='chatinterface'>
                            <span className='h1'>Chats</span>
                            <span className='searchbox '>
                                <div className='input-group '>
                                    <input
                                        type='text'
                                        className='form-control'
                                        placeholder='Username'
                                        aria-label="Recipient's username"
                                        aria-describedby='button-addon2'
                                        id='inputUsername'
                                    />
                                    {/* <button
                                        className='btn btn-outline-secondary'
                                        type='button'
                                        id='button-addon2'
                                    >
                                        Search
                                    </button> */}
                                    <div className='btn-group'>
                                        <button
                                            type='button'
                                            className='btn btn-secondary dropdown-toggle'
                                            data-bs-toggle='dropdown'
                                            aria-expanded='false'
                                            onClick={handleSearch}
                                        >
                                            Search
                                        </button>
                                        <ul className='dropdown-menu'>
                                            <li>
                                                <span className='dropdown-item'>
                                                    {searchId}
                                                </span>
                                            </li>

                                            <li>
                                                <hr className='dropdown-divider' />
                                            </li>
                                            <li>
                                                <span
                                                    className='dropdown-item'
                                                    onClick={addUser}
                                                >
                                                    {s}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </span>
                        </div>
                        {contacts.map((item, ind) => {
                            return (
                                <div onClick={openChat}>
                                    <ChatInterface
                                        key={ind}
                                        data={item}
                                        id={ind}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuickChat;

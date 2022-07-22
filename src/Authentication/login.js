import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { url } from '../url';
function LogOut() {
    return (
        <div>
            Log Out
            {/* <button className='btn btn-secondary'>Log Out</button> */}
        </div>
    );
}

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);

    const [valUserId, setValUserId] = useState({ msg: '', clas: '' });
    const [valpassword, setValpassword] = useState({ msg: '', clas: '' });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (verified) {
            navigate('/quickchat');
        }
    }, [verified]);

    const handleUserId = (e) => {
        setUserId(e.target.value);
        if (userId.length < 6) {
            setValUserId({ clas: 'red', msg: 'Username too short!' });
        } else {
            setValUserId({ clas: 'green', msg: 'Looks good!' });
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 6) {
            setValpassword({ clas: 'red', msg: 'Password too short!' });
        } else {
            setValpassword({ clas: 'green', msg: 'Looks good!' });
        }
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        if (password.length >= 6 && userId.length >= 6) {
            axios
                .post(`${url}/login`, {
                    userId: userId,
                    password: password,
                })
                .then((response) => {
                    setMessage(response.data);
                    // console.log(response.headers.jwt);
                    if (response.data === 'User is verified') {
                        dispatch({
                            type: 'addUser',
                            payload: {
                                userId: response.headers.userid,
                                name: response.headers.name,
                                email: response.headers.email,
                            },
                        });
                        console.log(response.headers);
                        // document.cookie = `jwt=${response.headers.jwt}; sameSite: none; secure : true`;
                        document.cookie = `userId=${response.headers.userid}`;
                        document.cookie = `name=${response.headers.name}`;
                        document.cookie = `email=${response.headers.email}`;
                        // document.cookie = `imageAddress=${response.headers.imageAddress}`;

                        localStorage.setItem(
                            'imageAddress',
                            `${response.headers.imageaddress}`
                        );
                        // console.log(response.headers.imageaddress);

                        setVerified(true);
                    }

                    // console.log(response.headers.name);
                    // console.log(response.headers.email);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setMessage('Please check Username or Password!');
        }
    };

    return (
        <>
            <form className='container mx-auto mt-12  '>
                <div className=' w-11/12 md:w-2/3 mx-auto px-5 py-12 backdrop-blur-sm border rounded-lg border-gray-300  '>
                    <div className='flex flex-row justify-center'>
                        <div className='text-5xl mt-12 font-semibold'>
                            <h1 className=''> Login</h1>
                        </div>
                    </div>
                    {message !== '' ? (
                        <div className='flex flex-row justify-center'>
                            <div className='text-xl mt-8 bg-[#F8D7DA] text-[#995257] px-6 rounded-md py-2'>
                                <h5 className='' role='alert'>
                                    {message}
                                </h5>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <div className='md:flex md:flex-col md:justify-center'>
                        <div className='mx-auto mt-8 text-gray-600  '>
                            <div className='flex flex-col font-medium  text-xl'>
                                <div className=''>
                                    <label className='flex mt-2 mb-1'>
                                        Username{' '}
                                    </label>
                                    <input
                                        type='text'
                                        className=' flex border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full md:w-96 px-2 py-1'
                                        aria-label='Username'
                                        aria-describedby='addon-wrapping'
                                        onChange={handleUserId}
                                        required
                                    />
                                    <div
                                        className={'text-sm ' + valUserId.clas}
                                    >
                                        {' '}
                                        {valUserId.msg}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mx-auto mt-2 text-gray-600'>
                            <div className='flex flex-col font-medium  text-xl '>
                                <div className=''>
                                    <label className='flex mt-2 mb-1'>
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        className=' flex  border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full md:w-96 px-2 py-1'
                                        aria-label='Username'
                                        aria-describedby='addon-wrapping'
                                        onChange={handlePassword}
                                        required
                                    />
                                    <div
                                        className={
                                            'text-sm ' + valpassword.clas
                                        }
                                    >
                                        {' '}
                                        {valpassword.msg}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' mx-auto  mt-6 '>
                            <div className=''>
                                <div className=''>
                                    <button
                                        type='button'
                                        className=' text-xl border-2 border-black rounded-lg bg-[#313132] text-[#F0EBE3] px-4 py-1'
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export { Login, LogOut };

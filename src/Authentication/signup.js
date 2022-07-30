import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../url';
import axios from 'axios';

function Signup() {
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    const [valUserId, setValUserId] = useState({ msg: '', clas: '' });
    const [valPassword, setValPassword] = useState({ msg: '', clas: '' });
    const [valEmail, setValEmail] = useState({ msg: '', clas: '' });

    const utilSubmit = (e) => {
        // e.preventDefault();
        console.log('submitted');

        axios
            .post(`${url}/signup`, {
                userId: userId,
                name: name,
                email: email,
                password: password,
            })
            .then((response) => {
                // console.log(response);
                if (response.data !== 'Success') {
                    setResponse(response.data);
                } else {
                    navigate('/login');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const utilUserId = (e) => {
        setUserId(e.target.value);
        if (userId.length < 6) {
            setValUserId({ clas: 'red', msg: 'Username too short!' });
        } else {
            setValUserId({ clas: 'green', msg: 'Looks good!' });
        }
    };

    const utilName = (e) => {
        setName(e.target.value);
    };

    const utilEmail = (e) => {
        setEmail(e.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setValEmail({ clas: 'green', msg: 'Looks good!' });
        } else {
            setValEmail({ clas: 'red', msg: 'Invalid Email!' });
        }
    };

    const utilPassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 6) {
            setValPassword({ clas: 'red', msg: 'Password too short!' });
        } else {
            setValPassword({ clas: 'green', msg: 'Looks good!' });
        }
    };

    return (
        <div className='container md:flex md:justify-end mt-10 '>
            <div className='text-[#313132] text-3xl  w-11/12  md:text-6xl md:my-auto  md:w-1/2 md:px-12 mx-auto mb-10 font-semibold  '>
                <div className='text-2xl md:text-5xl'>Ready to experience?</div>
                <div className=' underline underline-offset-2'>Simple.</div>
                <div className=' underline underline-offset-2'>Fast.</div>
                <div className=' underline underline-offset-2'>Secure.</div>
            </div>
            <div className='md:flex md:flex-col  w-full md:w-1/2 px-10 pt-5 pb-10 backdrop-blur-lg border rounded-lg border-gray-300 bg-white bg-opacity-40 '>
                <div className='flex flex-row justify-center'>
                    <div className='text-5xl mt-12 font-semibold'>
                        <h1 className='text-customBlack'>Register</h1>
                    </div>
                </div>
                {response !== '' ? (
                    <div className='flex flex-row justify-center'>
                        <div className='text-xl mt-8 bg-[#F8D7DA] text-[#995257] px-6 rounded-md py-2'>
                            <h5 className='' role='alert'>
                                {response}
                            </h5>
                        </div>
                    </div>
                ) : (
                    ''
                )}
                <div className=' md:flex md:flex-col md:justify-center '>
                    <div className='mx-auto mt-8 text-gray-600 w-full '>
                        <div className='flex flex-col font-medium  text-xl'>
                            <div className=''>
                                <label className='block mt-2 mb-1'>
                                    UserName{' '}
                                </label>
                                <input
                                    type='text'
                                    className='block border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full  px-2 py-1'
                                    onChange={utilUserId}
                                    required
                                />
                                <div className={'text-sm ' + valUserId.clas}>
                                    {' '}
                                    {valUserId.msg}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' mx-auto mt-2 text-gray-600  w-full'>
                        <div className='flex flex-col font-medium  text-xl'>
                            <div className=''>
                                <label className='block mt-2 mb-1'>
                                    Full Name{' '}
                                </label>
                                <input
                                    type='text'
                                    className='block border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full  px-2 py-1'
                                    aria-label='Username'
                                    aria-describedby='addon-wrapping'
                                    onChange={utilName}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className=' mx-auto mt-2 text-gray-600 w-full '>
                        <div className='flex flex-col font-medium  text-xl'>
                            <div className=''>
                                <label className='block mt-2 mb-1'>
                                    Email{' '}
                                </label>
                                <input
                                    type='text'
                                    className='block border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full px-2 py-1'
                                    aria-label='Username'
                                    aria-describedby='addon-wrapping'
                                    onChange={utilEmail}
                                    required
                                />
                                <div className={'text-sm ' + valEmail.clas}>
                                    {' '}
                                    {valEmail.msg}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' mx-auto mt-2 text-gray-600 w-full '>
                        <div className='flex flex-col font-medium  text-xl'>
                            <div className='grow'>
                                <label className='block mt-2 mb-1'>
                                    Password{' '}
                                </label>
                                <input
                                    type='password'
                                    className='block  border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full  px-2 py-1'
                                    aria-label='Username'
                                    aria-describedby='addon-wrapping'
                                    onChange={utilPassword}
                                    required
                                />
                                <div className={'text-sm ' + valPassword.clas}>
                                    {' '}
                                    {valPassword.msg}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' mx-auto  mt-6 '>
                        <div className=''>
                            <div className=''>
                                <button
                                    type='button'
                                    className=' text-lg border-2 border-black rounded-lg bg-[#313132] text-[#F0EBE3] px-4 py-1'
                                    onClick={utilSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

{
    /* userId, name, email password, submit button */
}

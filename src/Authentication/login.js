import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    return (
        <div>
            <button className='btn btn-secondary'>Log Out</button>
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
                .post('/login', {
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
                        // console.log(response.headers);
                        document.cookie = `jwt=${response.headers.jwt}`;
                        document.cookie = `userId=${response.headers.userid}`;
                        document.cookie = `name=${response.headers.name}`;
                        document.cookie = `email=${response.headers.email}`;
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
            <form className='container-sm mrgTop'>
                <div className='row justify-content-center mrgBottom'>
                    <div className='col-md-6 '>
                        <h1 className='text-center'> Login</h1>
                    </div>
                </div>
                {message !== '' ? (
                    <div className='row justify-content-center mrgBottom'>
                        <div className='col-md-6 '>
                            <h5
                                className='text-center alert alert-danger'
                                role='alert'
                            >
                                {' '}
                                {message}
                            </h5>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
                <div className='row justify-content-center mrgBottom'>
                    <div className='col-md-6 '>
                        <div className='input-group flex-nowrap'>
                            <span
                                className='input-group-text'
                                id='addon-wrapping'
                            >
                                @
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Username'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={handleUserId}
                                required
                            />
                        </div>
                        <div className={'validate ' + valUserId.clas}>
                            {' '}
                            {valUserId.msg}
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center mrgBottom'>
                    <div className='col-md-6 '>
                        <div className='input-group flex-nowrap'>
                            <span
                                className='input-group-text'
                                id='addon-wrapping'
                            >
                                #
                            </span>
                            <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={handlePassword}
                                required
                            />
                        </div>
                        <div className={'validate ' + valpassword.clas}>
                            {' '}
                            {valpassword.msg}
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6 '>
                        <div className='input-group flex-nowrap  btnCenter'>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export { Login, LogOut };

import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
            .post('/signup', {
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
        <>
            <div className='container-sm mrgTop'>
                <div className='row justify-content-center mrgBottom'>
                    <div className='col-md-6 '>
                        <h1 className='text-center'> Register </h1>
                    </div>
                </div>
                {response !== '' ? (
                    <div className='row justify-content-center mrgBottom'>
                        <div className='col-md-6 '>
                            <h5
                                className='text-center alert alert-danger'
                                role='alert'
                            >
                                {response}
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
                                onChange={utilUserId}
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
                                $
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Full Name'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={utilName}
                            />
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
                                @
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Email'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={utilEmail}
                            />
                        </div>
                        <div className={'validate ' + valEmail.clas}>
                            {' '}
                            {valEmail.msg}
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
                                onChange={utilPassword}
                            />
                        </div>
                        <div className={'validate ' + valPassword.clas}>
                            {' '}
                            {valPassword.msg}
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6 '>
                        <div className='input-group flex-nowrap  btnCenter'>
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={utilSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;

{
    /* userId, name, email password, submit button */
}

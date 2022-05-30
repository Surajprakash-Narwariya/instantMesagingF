import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
    const user = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        axios
            .post('/delete', {
                userId: user.userId,
            })
            .then((response) => {
                if (response.data.success === true) {
                    console.log('should be loged out');

                    document.cookie =
                        'jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
                    document.cookie =
                        'userId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
                    document.cookie =
                        'name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
                    document.cookie =
                        'email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

                    dispatch({
                        type: 'deleteUser',
                        payload: {
                            userId: null,
                            name: null,
                            email: null,
                        },
                    });
                }
                console.log(response.data.success);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div className='container-sm'>
                <div className='row justify-content-center mrgTop'>
                    <div className='col-md-6 '>
                        <h4 className='text-center'>Name : {user.name}</h4>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 '>
                            <h4 className='text-center'>
                                Username : {user.userId}
                            </h4>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 '>
                            <h4 className='text-center'>
                                Email : {user.email}
                            </h4>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 '>
                            <div className='input-group flex-nowrap  btnCenter'>
                                <button
                                    type='button'
                                    className='btn btn-danger'
                                    onClick={handleDelete}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

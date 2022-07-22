import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { url } from '../url';
import pair from '../Authentication/keys';

function Profile() {
    // console.log(pair);
    const user = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const link = `${url}/image/${localStorage.getItem('imageAddress')}`;

    console.log(localStorage.getItem('imageAddress'));

    useEffect(() => {
        if (!(user.userId !== null && user.userId !== '')) {
            navigate('/login');
        }
    });

    const handleDelete = (e) => {
        axios
            .post(`${url}/delete`, {
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

    const imageUpdate = async (e) => {
        const image = e.target.files[0];
        console.log(image);

        var imageAddress = '';

        let data = new FormData();
        data.append('file', image);

        console.log(data);

        try {
            if (image) {
                const response = await axios.post(`${url}/upload`, data);
                if (response) {
                    console.log(response);
                    imageAddress = response.data;
                }
            }
        } catch (err) {
            console.log(err);
            console.log('There is an error in Uploading image');
        }

        try {
            if (imageAddress !== '') {
                const updateFileName = await axios.post(`${url}/updateImage`, {
                    userId: user.userId,
                    imageAddress: imageAddress,
                });
                console.log(updateFileName.data);
                console.log(imageAddress);
                localStorage.setItem('imageAddress', imageAddress.file);
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
            console.log('There is error in updating filename');
        }
    };

    return (
        <div className='container mx-auto'>
            <div className='w-11/12 md:w-2/3 mx-auto mt-8'>
                <div className='flex flex-col items-center  py-8 border'>
                    <div className='flex mb-6 h-24 w-24'>
                        {localStorage.getItem('imageAddress') === null ||
                        localStorage.getItem('imageAddress') === '' ? (
                            <img
                                className='object-cover outline-double outline-2 outline-gray-700 outline-offset-8 rounded-full  '
                                id='image'
                                src='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'

                                // src={`${url}/image/${localStorage.getItem(
                                //     'imageAddress'
                                // )}`}
                            />
                        ) : (
                            <img
                                className='object-cover outline-double outline-2 outline-gray-700 outline-offset-8 rounded-full  '
                                id='image'
                                // src='https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg'

                                src={link}
                            />
                        )}
                    </div>

                    <div className='block'>
                        <div className=' items-center justify-center bg-grey-lighter'>
                            <label className='w-72 flex flex-col items-center px-4 py-0 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-400 hover:text-white'>
                                <svg
                                    className='w-8 h-8'
                                    fill='currentColor'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 20 20'
                                >
                                    <path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
                                </svg>
                                <span className='mt-1 text-base leading-normal'>
                                    Change Profile
                                </span>
                                <input
                                    type='file'
                                    accept='image/*'
                                    className='hidden'
                                    id='imageUpload'
                                    onChange={imageUpdate}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='block '>
                        <label className=' text-gray-500 text-sm ml-4  px-1 relative'>
                            <span className='absolute top-2 w-20 bg-white text-center '>
                                User Id
                            </span>
                        </label>
                        <div className=' block text-xl border py-2 px-2 rounded-lg w-72 overflow-scroll shadow-lg '>
                            {user.userId}
                        </div>
                    </div>
                    <div className='block '>
                        <label className=' text-gray-500 text-sm ml-4  px-1 relative'>
                            <span className='absolute top-2 w-20 bg-white text-center'>
                                Full Name
                            </span>
                        </label>
                        <div className=' block text-xl border py-2 px-2 rounded-lg w-72 overflow-scroll shadow-lg'>
                            {user.name}
                        </div>
                    </div>
                    <div className='block '>
                        <label className=' text-gray-500 text-sm ml-4  px-1 relative'>
                            <span className='absolute top-2 w-16 bg-white text-center'>
                                E-mail
                            </span>
                        </label>
                        <div className='block text-xl border py-2 px-2 rounded-lg w-72 overflow-scroll shadow-lg'>
                            {user.email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;

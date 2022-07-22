import React from 'react';
import { url } from '../url';
import '../mycss.css';

function ChatInterface(props) {
    const { chatName, message, time, imageAddress } = props.data;
    const userName = chatName;

    // console.log(imageAddress);

    var today = new Date().toLocaleString('en-GB', {
        timeZone: 'IST',
    });

    return (
        <div
            className='border-b last:border-none  rounded-xl group border-gray-300 my-1 py-2 hover:bg-blue-500 '
            id={userName}
        >
            <div className='' id={userName}>
                <div className='flex flex-row items-center'>
                    <span id={userName}>
                        <div className='relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-300 ml-2 '>
                            {imageAddress === '' || imageAddress === null ? (
                                <svg
                                    className=' absolute w-12 h-12 text-gray-400 '
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
                                    className='h-12 w-12 object-cover'
                                    src={`${url}/image/${imageAddress}`}
                                />
                            )}
                        </div>
                    </span>
                    <div className='flex flex-col flex-1 '>
                        <span
                            className='text-lg mx-4 text-gray-800 font-semibold group-hover:text-slate-100'
                            id={userName}
                        >
                            {userName}
                        </span>
                        <span className='mx-4 text-sm text-gray-600 font-medium group-hover:text-slate-200'>
                            {' '}
                            {message}{' '}
                        </span>
                    </div>
                    <span className='text-xs text-gray-600 pr-5 font-medium group-hover:text-slate-200 '>
                        {today.substring(0, 10) === time.substring(0, 10)
                            ? time.substring(12, 17)
                            : time.substring(0, 10)}
                        {/* {time.substring(12, 17)} */}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default ChatInterface;

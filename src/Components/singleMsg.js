import React, { useState, useEffect } from 'react';
import '../mycss.css';

function SingleMessage(props) {
    const currentUser = props.currUser;
    const from = props.data.fromUserId;
    const to = props.data.toUserId;
    const msg = props.data.message;
    const time = props.data.time;

    // if (time != null) {
    //     console.log(time.substring(11, 17));
    // }
    // console.log(from);
    // console.log(currentUser);
    // console.log(props);

    return (
        <div>
            {currentUser === from ? (
                <div className='bg-blue-500 text-gray-900 px-2 py-1 rounded-lg  float-right ml-10   drop-shadow-lg md:mr-6 mr-2'>
                    <span onClick={props.onClick} className='mr-1 text-white'>
                        {msg}
                    </span>
                    <span className='text-sm  text-gray-100 message '>
                        {time != null ? time.substring(11, 17) : ''}
                    </span>
                </div>
            ) : (
                <div className='bg-gray-300 text-gray-900 px-2 py-1 rounded-lg float-left mr-10 drop-shadow-lg  md:ml-6 ml-2'>
                    <span onClick={props.onClick} className='mr-1 '>
                        {msg}
                    </span>
                    <span className='text-sm  text-gray-900 message'>
                        {time != null ? time.substring(11, 17) : ''}
                    </span>
                </div>
            )}
            <span className='text-sm '>{}</span>
        </div>
    );
}

export default SingleMessage;

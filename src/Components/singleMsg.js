import { useState, useEffect } from 'react';
import '../mycss.css';

function SingleMessage(props) {
    const currentUser = props.currUser;
    const from = props.data.fromUserId;
    const to = props.data.toUserId;
    const msg = props.data.message;
    // console.log(from);
    // console.log(currentUser);
    // console.log(props);

    return (
        <div className=''>
            {currentUser === from ? (
                <div className='alert alert-success text-end fr '>
                    <span className='text-wrap'>{msg}</span>
                </div>
            ) : (
                <div className='alert alert-secondary text-start fl'>
                    <span className='text-wrap'>{msg}</span>
                </div>
            )}
        </div>
    );
}

export default SingleMessage;

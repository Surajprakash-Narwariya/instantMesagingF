import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Check() {
    const [msg, setMsg] = useState('NO msg');
    const name = useSelector((state) => state.name);
    const [userName, setUserName] = useState(name);

    useEffect(() => {
        setUserName(name);
    }, [name]);

    useEffect(() => {
        axios
            .get('/check')
            .then((response) => {
                console.log(response);
                setMsg(response.data);
                // setTok(currState);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [name]);

    // const handleCheck = (e) => {
    //     e.preventDefault();

    //     console.log('button is clicked');
    // };

    return (
        <div>
            <h1>This is Check Page</h1>
            {/* <button onClick={handleCheck}>Check Button</button> */}
            <h2> this is message:: {msg}</h2>
            {/* <h2>This is useSelecotr : {currState}</h2> */}

            <h2>{userName}</h2>
        </div>
    );
}

export default Check;

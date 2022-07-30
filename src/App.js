import React from 'react';
import NavBar from './navbar';
import './mycss.css';

import { io } from 'socket.io-client';

// const url = 'http://localhost:4000';
const url = 'https://api-quickchat.herokuapp.com';

const socket = io(url);

function App() {
    return (
        <div>
            <div class='shape-blob '></div>
            <div class='shape-blob one'></div>
            <div class='shape-blob two'></div>
            <NavBar />
        </div>
    );
}

export { App, socket };

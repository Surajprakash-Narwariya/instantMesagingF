import React from 'react';
import NavBar from './navbar';
import './mycss.css';

import { io } from 'socket.io-client';
// const url = 'http://localhost:4000';
const url = 'https://api-quickchat.herokuapp.com';
const socket = io(url);
console.log('this is app');

function App() {
    return (
        <div>
            <NavBar />
        </div>
    );
}

export { App, socket };

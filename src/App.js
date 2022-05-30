import NavBar from './navbar';
import './mycss.css';

import { io } from 'socket.io-client';
const url = 'http://localhost:4000/';
const socket = io(url);

function App() {
    return (
        <div>
            <NavBar />
        </div>
    );
}

export { App, socket };

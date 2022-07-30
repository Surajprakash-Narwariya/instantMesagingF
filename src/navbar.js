import Signup from './Authentication/signup';
import { Login, LogOut } from './Authentication/login';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Check from './check';
import { Home, About } from './home';
import Profile from './Components/profile';
import QuickChat from './Components/quickChat';
import Chat from './Components/Chat';
import axios from 'axios';
import './mycss.css';

axios.defaults.withCredentials = true;

function NavBar() {
    const name = useSelector((state) => state.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(name);

    const [showMenu, setShowMenu] = useState(false);

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    // useEffect(() => {
    //     if (isAuthenticated === null) {
    //         navigate('/');
    //     }
    // }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (name !== '') {
            setIsAuthenticated(name);
        } else {
            setIsAuthenticated(null);
            navigate('/login');
        }
        // console.log(isAuthenticated);
        // console.log(name);
    }, [name, isAuthenticated]);

    const handleLogOut = (e) => {
        // e.preventDefault();
        document.cookie =
            'accessToken=; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'userId= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'name= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'email= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

        dispatch({
            type: 'deleteUser',
            payload: {
                userId: null,
                name: null,
                email: null,
                privateKey: null,
                publicKey: null,
            },
        });
        setIsAuthenticated(null);
        navigate('/');
    };

    return (
        <div className=''>
            <nav className=' mx-auto bg-[#313132] text-[#d6d6d6] py-1'>
                <div>
                    <div className='flex flex-row mx-4 py-1 items-center  '>
                        <Link
                            className='text-2xl font-semibold flex-1 md:flex-0'
                            to='/'
                        >
                            <span className='text-3xl font-bold'>Q</span>
                            uickChat
                        </Link>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className=' h-8 w-8 mr-4  md:hidden '
                        >
                            <img src='https://img.icons8.com/ios-filled/50/EBEBEB/menu--v1.png' />
                        </button>

                        {/* <div className=' ' id=''> */}
                        <ul className='text-lg flex flex-row space-x-4 '>
                            <li className='hidden md:inline-block '>
                                <Link
                                    className=''
                                    aria-current='page'
                                    to='/quickchat'
                                >
                                    App
                                </Link>
                            </li>
                            <li className='hidden md:inline-block'>
                                <Link className='' to='/profile'>
                                    Profile
                                </Link>
                            </li>
                            <li className='hidden md:inline-block '>
                                <Link className='' to='/about'>
                                    About
                                </Link>
                            </li>
                            <li className='hidden md:inline-block '>
                                <Link className='' to='/signup'>
                                    Register
                                </Link>
                            </li>
                        </ul>

                        <span className='hidden md:inline-block text-lg'>
                            {isAuthenticated !== null ? (
                                <span onClick={handleLogOut} className=''>
                                    <button className='border-2 border-black px-2 rounded-lg bg-[#F0EBE3] text-[#313132] '>
                                        <LogOut />
                                    </button>
                                </span>
                            ) : (
                                <Link className='ml-4' to='/login'>
                                    <button className='border-2 border-black px-2 rounded-lg bg-[#F0EBE3] text-[#313132] '>
                                        Login
                                    </button>
                                </Link>
                            )}
                        </span>
                        {/* </div> */}
                    </div>
                    <div className='md:hidden mx-4'>
                        {showMenu ? (
                            <div className='' id=''>
                                <ul className=' flex flex-col'>
                                    <li className=''>
                                        <Link
                                            className=''
                                            aria-current='page'
                                            to='/quickchat'
                                        >
                                            App
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link className='' to='/profile'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link className='' to='/about'>
                                            About
                                        </Link>
                                    </li>
                                    <li className=''>
                                        <Link className='' to='/signup'>
                                            Register
                                        </Link>
                                    </li>
                                </ul>

                                <span className='-mx-4'>
                                    {isAuthenticated !== null ? (
                                        <span
                                            onClick={handleLogOut}
                                            className=''
                                        >
                                            <button className='border-2 border-black px-2 rounded-lg bg-[#F0EBE3] text-[#313132] '>
                                                <LogOut />
                                            </button>
                                        </span>
                                    ) : (
                                        <Link className='ml-4' to='/login'>
                                            <button className='border-2 border-black px-2 rounded-lg bg-[#F0EBE3] text-[#313132] '>
                                                Login
                                            </button>
                                        </Link>
                                    )}
                                </span>
                            </div>
                        ) : (
                            <div className='hidden'></div>
                        )}
                    </div>
                </div>
                {/* <Link to='/chat'>Chat</Link> */}
            </nav>
            {/* {console.log(screenSize)} */}
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route exact path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/check' element={<Check />} />
                <Route path='/profile' element={<Profile />} />
                {screenSize > 768 ? (
                    <Route path='/quickchat' element={<Application />} />
                ) : (
                    <Route path='/quickchat' element={<QuickChat />} />
                )}
                {/* <Route path='/quickchat' element={<QuickChat />} /> */}
                <Route path='/chat' element={<Chat />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/logout' element={<LogOut />} /> */}
            </Routes>
        </div>
    );
}

function Application() {
    const [data, setData] = useState({
        from: 'Surajprakash',
        chatName: 'funtoozzzzz',
        imageAddress: '',
    });

    useEffect(() => {
        // window.location.reload();
        // console.log(data);
    }, [data]);

    const getData = (data) => {
        // console.log(data);
        setData(data);
    };

    return (
        <div className='container mx-auto  '>
            <div className='flex flex-row'>
                <QuickChat data={getData} />
                <Chat data={data} />
            </div>
        </div>
    );
}

export default NavBar;

import Signup from './Authentication/signup';
import { Login, LogOut } from './Authentication/login';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Check from './check';
import { Home, About } from './home';
import Profile from './Components/profile';
import QuickChat from './Components/quickChat';
import Chat from './Components/Chat';
import './mycss.css';

function NavBar() {
    const name = useSelector((state) => state.email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(name);

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
            },
        });
        setIsAuthenticated(null);
        navigate('/');
    };

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg_color txtsize'>
                <div className='container-fluid '>
                    <Link className='navbar-brand mrgLeft txtsize bd' to='/'>
                        <span className='fs-1'>Q</span>uickChat
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link active'
                                    aria-current='page'
                                    to='/quickchat'
                                >
                                    App
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/profile'>
                                    Profile
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/signup'>
                                    Sign Up
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>
                                    About
                                </Link>
                            </li>
                        </ul>

                        <span className='navbar-text mrgRight'>
                            {isAuthenticated !== null ? (
                                <span
                                    onClick={handleLogOut}
                                    className='txtDeco'
                                >
                                    <LogOut />
                                </span>
                            ) : (
                                <Link
                                    className='txtDeco btn btn-secondary'
                                    to='/login'
                                >
                                    Login
                                </Link>
                            )}
                        </span>
                    </div>
                </div>
                {/* <Link to='/chat'>Chat</Link> */}
            </nav>
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/check' element={<Check />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/quickchat' element={<QuickChat />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/logout' element={<LogOut />} /> */}
            </Routes>
        </div>
    );
}

export default NavBar;

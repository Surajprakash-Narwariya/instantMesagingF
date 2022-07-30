import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { url } from '../url';
import Spinner from '../Components/spinner';

function LogOut() {
    return <div>Log Out</div>;
}

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const [valUserId, setValUserId] = useState({ msg: '', clas: '' });
    const [valpassword, setValpassword] = useState({ msg: '', clas: '' });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (verified) {
            navigate('/quickchat');
        }
    }, [verified]);

    const handleUserId = (e) => {
        setUserId(e.target.value);
        if (userId.length < 6) {
            setValUserId({ clas: 'red', msg: 'Username too short!' });
        } else {
            setValUserId({ clas: 'green', msg: 'Looks good!' });
        }
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (password.length < 6) {
            setValpassword({ clas: 'red', msg: 'Password too short!' });
        } else {
            setValpassword({ clas: 'green', msg: 'Looks good!' });
        }
    };
    const handleSubmit = (e) => {
        // e.preventDefault();
        setSpinner(true);

        if (password.length >= 6 && userId.length >= 6) {
            axios
                .post(`${url}/login`, {
                    userId: userId,
                    password: password,
                })
                .then((response) => {
                    setMessage(response.data);
                    setSpinner(false);
                    // console.log(response.headers.jwt);
                    if (response.data === 'User is verified') {
                        let privateKey = document.cookie.replace(
                            /(?:(?:^|.*;\s*)privateKey\s*\=\s*([^;]*).*$)|^.*$/,
                            '$1'
                        );

                        let publicKey = document.cookie.replace(
                            /(?:(?:^|.*;\s*)publicKey\s*\=\s*([^;]*).*$)|^.*$/,
                            '$1'
                        );

                        // console.log(privateKey);
                        // console.log(publicKey);

                        dispatch({
                            type: 'addUser',
                            payload: {
                                userId: response.headers.userid,
                                name: response.headers.name,
                                email: response.headers.email,
                                privateKey: privateKey,
                                publicKey: publicKey,
                            },
                        });
                        // console.log(response.headers);
                        localStorage.setItem(
                            'privateKey',
                            response.headers.privatekey
                        );
                        localStorage.setItem(
                            'publicKey',
                            response.headers.publickey
                        );
                        // console.log(response.headers.privatekey);
                        // document.cookie = `jwt=${response.headers.jwt}; sameSite: none; secure : true`;
                        document.cookie = `userId=${response.headers.userid}`;
                        document.cookie = `name=${response.headers.name}`;
                        document.cookie = `email=${response.headers.email}`;
                        // document.cookie = `privateKey=${response.headers.privateKey}`;
                        // document.cookie = `imageAddress=${response.headers.imageAddress}`;

                        localStorage.setItem(
                            'imageAddress',
                            `${response.headers.imageaddress}`
                        );
                        // console.log(response.headers.imageaddress);

                        setVerified(true);
                        // setSpinner(false);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setMessage('Please check Username or Password!');
        }
    };

    return (
        <div className='container md:flex md:justify-end mt-20 '>
            <div className='text-[#313132] text-3xl  w-10/12 h-10/12 md:text-6xl md:my-auto  md:w-1/2 md:px-12 mx-auto mb-10 font-semibold  '>
                {/* <div className='text-2xl md:text-5xl'>Ready to experience?</div>
                <div className=' underline underline-offset-2'>Simple.</div>
                <div className=' underline underline-offset-2'>Fast.</div>
                <div className=' underline underline-offset-2'>Secure.</div> */}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    data-name='Layer 1'
                    // width='543.21934'
                    // height='633.6012'
                    className='h-2/3 w-2/3'
                    viewBox='0 0 543.21934 633.6012'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                    <path
                        d='M854.05236,366.72793H345.48229a17.11177,17.11177,0,0,1-17.092-17.092V150.29137a17.11177,17.11177,0,0,1,17.092-17.092H854.05236a17.11177,17.11177,0,0,1,17.092,17.092V349.636A17.11177,17.11177,0,0,1,854.05236,366.72793Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M735.44243,355.827H426.21a87.01423,87.01423,0,0,1-86.916-86.916V231.02584a87.01476,87.01476,0,0,1,86.916-86.91662h347.1176a87.01476,87.01476,0,0,1,86.916,86.91662A124.94266,124.94266,0,0,1,735.44243,355.827Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#fff'
                    />
                    <path
                        d='M655.673,201.175H451.26661a4.408,4.408,0,1,1,0-8.81606H655.673a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#e6e6e6'
                    />
                    <path
                        d='M759.14708,248.20578H451.26661a4.408,4.408,0,1,1,0-8.81606H759.14708a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#e6e6e6'
                    />
                    <path
                        d='M759.14708,295.23659H451.26661a4.408,4.408,0,1,1,0-8.81606H759.14708a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#e6e6e6'
                    />
                    <path
                        d='M759.14708,295.23659H451.26661a4.408,4.408,0,1,1,0-8.81606H759.14708a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#e6e6e6'
                    />
                    <path
                        d='M634.10291,253.6037a9.08847,9.08847,0,0,0,11.00741,8.54713l16.81052,27.57777,7.15453-15.18214L652.015,250.6857a9.13775,9.13775,0,0,0-17.912,2.918Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M760.255,332.63993,702.3227,301.21629,684.04961,284.0724s-7.94382-2.1269-5.02-4.70983-5.40826-5.074-5.40826-5.074l-9.80947-9.20329L649.8729,274.948l4.0341,6.25338s-.27766,10.35216,5.39346,8.36056,4.25394,6.59416,4.25394,6.59416l33.84976,52.47148Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#3f3d56'
                    />
                    <circle
                        cx='260.85489'
                        cy='113.24865'
                        r='56.58599'
                        fill='#fed18c'
                    />
                    <polygon
                        points='432.044 611.601 420.278 611.601 414.679 566.219 432.044 566.219 432.044 611.601'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M766.64449,765.186h-8.43765l-1.50609-7.96615-3.8573,7.96614H730.46478a5.03052,5.03052,0,0,1-2.85851-9.17017l17.87094-12.34231V735.62l18.79712,1.12193Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#2f2e41'
                    />
                    <polygon
                        points='337.942 611.601 326.176 611.601 320.577 566.219 337.942 566.219 337.942 611.601'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M672.54234,765.186h-8.43765l-1.50608-7.96615L658.7413,765.186H636.36263a5.03052,5.03052,0,0,1-2.85851-9.17017l17.871-12.34231V735.62l18.79711,1.12193Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#2f2e41'
                    />
                    <rect
                        x='360.17495'
                        y='268.38114'
                        width='59.38485'
                        height='67.60737'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M689.9357,434.92742l-10.04975,11.877L662.5273,483.34891,618.788,587.41832l-9.25023,22.00919,7.47021,38.90734s1.20911,27.41093,1.20911,31.89768c0,9.13613,7.64134,14.19843,7.64134,14.19843l5.606,29.19819,54.36-2.284s-1.89668-32.18465-13.28212-40.30307-16.6191-50.42877-16.6191-50.42877l-6.1865-18.77224,60.29846-71.47763.38919,24.98513.18838,12.09342s-8.83024,78.65618,1.463,93.921.20981,13.46892.20981,13.46892l.49048,31.48835,64.40973.45681L762.976,626.12129s-7.2153-5.6971-3.35489-11.42384-3.74157-12.74053-3.74157-12.74053l3.40954-70.77248s-3.7751-12.22439.66547-13.81333.583-12.10132.583-12.10132l.65994-13.69836-13.24739-42.483Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M748.86374,401.58054l6.39529-19.18588,4.56807-6.39529,1.82722-18.27226c0-49.33511-11.00445-41.11978-11.00445-41.11978l-6.3542-17.35146-29.23561-.91361L696.331,316.15772l-15.53142,5.48167-6.082,31.60212,11.10688,33.72122,2.74084,18.27226c-5.22846,9.6521-4.78621,5.08671-.45681,12.33378l51.61914,14.161c18.27226,6.39529,18.27226-10.04974,14.60827-14.161C750.672,413.45751,748.86374,401.58054,748.86374,401.58054Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#3f3d56'
                    />
                    <circle
                        cx='397.51079'
                        cy='131.90749'
                        r='27.10245'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M699.50588,307.8341'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M762.08369,301.28407a3.32909,3.32909,0,0,1-1.8546,4.86957c-3.63616,1.206-5.87453,4.72337-8.48745,7.53731-2.60383,2.8048-6.79728,5.1345-10.12284,3.225-3.31642-1.90027-3.54483-6.75155-6.32219-9.38276-2.70432-2.55811-7.19928-2.24751-10.37869-.30151l-.09507.05848a3.35133,3.35133,0,0,1-5.12711-3.40958q1.671-8.88678,3.34014-17.77163a59.76117,59.76117,0,0,1-12.50736,18.9118,13.757,13.757,0,0,1-5.42687,3.8189c-1.90027.603-3.74579-1.36128-5.59131-1.005,4.58636-4.01077,20.00815-29.71986,17.249-46.90492q-4.865.5482-9.72994,1.09635A8.94324,8.94324,0,0,0,704.855,257.924a10.51041,10.51041,0,0,1-.55734,4.41271c-1.35213.15535-2.71341.30151-4.06554.4568-1.882.21017-3.92858.39285-5.54563-.59381-2.69517-1.64449-2.77742-5.53649-2.01-8.60628,2.2475-8.926,9.063-16.39022,17.40431-20.30045,8.3413-3.90115,10.80806,4.78732,19.597,2.01,17.35864-5.48168,30.66085,3.892,35.34769,21.28717C768.96323,271.18051,766.10361,286.66626,762.08369,301.28407Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M837.11581,765.77552H803.92929l-.14258-.25879c-.42431-.76953-.834-1.585-1.2168-2.42285-3.41845-7.31836-4.86328-15.68848-6.13818-23.07325l-.96-5.5664a3.43689,3.43689,0,0,1,5.41016-3.36231q7.56517,5.5049,15.13623,10.999c1.91113,1.39062,4.09375,3,6.18408,4.73925.20166-.97949.4126-1.96191.62353-2.93066a3.43916,3.43916,0,0,1,6.28077-1.08594l3.88281,6.23828c2.832,4.55567,5.33154,9.04493,4.82226,13.88672a.756.756,0,0,1-.01318.17578,10.94679,10.94679,0,0,1-.56348,2.33106Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#f0f0f0'
                    />
                    <path
                        d='M870.42521,766.49329l-315.3575.30731a1.19069,1.19069,0,0,1,0-2.38135l315.3575-.30731a1.19069,1.19069,0,0,1,0,2.38135Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#cacaca'
                    />
                    <path
                        d='M584.10145,322.60868l-34.688-29.29381a5.86536,5.86536,0,0,1-.69609-8.25652l6.38441-7.56005a5.86537,5.86537,0,0,1,8.25653-.6961l34.688,29.29381a5.86536,5.86536,0,0,1,.6961,8.25652l-6.38442,7.56006A5.86537,5.86537,0,0,1,584.10145,322.60868Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#3f3d56'
                    />
                    <path
                        d='M551.2336,285.66783a3.161,3.161,0,0,0,.37511,4.44934l34.688,29.29381a3.16093,3.16093,0,0,0,4.44933-.37512l6.38442-7.56a3.161,3.161,0,0,0-.37512-4.44934l-34.688-29.29381a3.161,3.161,0,0,0-4.44934.37512Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#fff'
                    />
                    <path
                        d='M571.59773,297.05559a1.33329,1.33329,0,0,1-1.05444.55768l-5.45025.12517a1.33366,1.33366,0,1,1-.06117-2.66662l3.56552-.082-3.5114-9.26539a1.33372,1.33372,0,0,1,2.49431-.94531l4.17956,11.02823a1.33428,1.33428,0,0,1-.14089,1.21782Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#fed18c'
                    />
                    <path
                        d='M572.29679,299.38408a9.08846,9.08846,0,0,1,7.29959,11.8715l25.5864,19.70946-15.87006,5.46132-21.86426-19.5537a9.13775,9.13775,0,0,1,4.84831-17.48852Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#ffb6b6'
                    />
                    <path
                        d='M705.50514,309.12932l-65.50929,40.27784s-26.4126-9.77273-21.25071-14.29686-11.2708-7.58266-11.2708-7.58266l-18.15322-12.213-10.534,12.24231s1.91937,19.88518,5.18517,16.442,8.14738,5.96269,8.14738,5.96269,1.44254,10.50246,10.73916,7.8595S637.101,382.88158,637.101,382.88158l80.62233-30.06905Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#3f3d56'
                    />
                    <path
                        d='M587.25535,269.147a4.89054,4.89054,0,0,1-3.91317-1.95719l-11.99792-15.99749a4.89185,4.89185,0,1,1,7.82715-5.87l7.84945,10.46514,20.16029-30.24a4.89206,4.89206,0,0,1,8.14088,5.42726l-23.99584,35.99375a4.894,4.894,0,0,1-3.93468,2.177C587.34613,269.14624,587.30074,269.147,587.25535,269.147Z'
                        transform='translate(-328.39033 -133.1994)'
                        fill='#fff'
                    />
                </svg>
            </div>
            <div className='md:flex md:flex-col  w-full md:w-1/2 px-5 pt-5 pb-10 backdrop-blur-lg border rounded-lg border-gray-300 bg-white bg-opacity-40'>
                <div className='flex flex-row justify-center'>
                    <div className='text-5xl mt-12 font-semibold'>
                        <h1 className=''> Login</h1>
                    </div>
                </div>
                {message !== '' ? (
                    <div className='flex flex-row justify-center'>
                        <div className='text-xl mt-8 bg-[#F8D7DA] text-[#995257] px-6 rounded-md py-2'>
                            <h5 className='' role='alert'>
                                {message}
                            </h5>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                <div className='mx-auto mt-8 text-gray-600 w-full '>
                    <div className='flex flex-col font-medium  text-xl'>
                        <div className=''>
                            <label className='flex mt-2 mb-1'>Username </label>
                            <input
                                type='text'
                                className=' block border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full  px-2 py-1'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={handleUserId}
                                required
                            />
                            <div className={'text-sm ' + valUserId.clas}>
                                {' '}
                                {valUserId.msg}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto mt-2 text-gray-600 w-full '>
                    <div className='flex flex-col font-medium  text-xl '>
                        <div className=''>
                            <label className='flex mt-2 mb-1'>Password</label>
                            <input
                                type='password'
                                className=' block border rounded-md border-gray-300 focus:outline-none focus:border-gray-500 w-full  px-2 py-1'
                                aria-label='Username'
                                aria-describedby='addon-wrapping'
                                onChange={handlePassword}
                                required
                            />
                            <div className={'text-sm ' + valpassword.clas}>
                                {' '}
                                {valpassword.msg}
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mx-auto  mt-6 '>
                    <div className=''>
                        <div className=''>
                            {spinner ? (
                                <Spinner />
                            ) : (
                                <button
                                    type='button'
                                    className=' text-xl border-2 border-black rounded-lg bg-[#313132] text-[#F0EBE3] px-4 py-1'
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            )}

                            {/* <Spinner /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login, LogOut };

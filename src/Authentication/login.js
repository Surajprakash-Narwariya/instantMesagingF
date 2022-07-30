import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { url } from '../url';
function LogOut() {
    return <div>Log Out</div>;
}

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [verified, setVerified] = useState(false);

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
        if (password.length >= 6 && userId.length >= 6) {
            axios
                .post(`${url}/login`, {
                    userId: userId,
                    password: password,
                })
                .then((response) => {
                    setMessage(response.data);
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
                        console.log(response.headers);
                        localStorage.setItem(
                            'privateKey',
                            response.headers.privatekey
                        );
                        localStorage.setItem(
                            'publicKey',
                            response.headers.publickey
                        );
                        console.log(response.headers.privatekey);
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
                    // width='493.46111'
                    // height='480.84822'
                    viewBox='0 0 493.46111 480.84822'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                >
                    <path
                        d='M668.00659,317.36469H641.75073V541.21106a26.74408,26.74408,0,0,1-26.74414,26.74408H414.26947v.25592a26.744,26.744,0,0,0,26.74408,26.74408h226.993a26.74408,26.74408,0,0,0,26.74414-26.74408V344.10876A26.74411,26.74411,0,0,0,668.00659,317.36469Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M792.47168,673.09116a2.26935,2.26935,0,0,0,1.64468-3.93333l-.15549-.61819q.03071-.07428.06178-.1484a6.09417,6.09417,0,0,1,11.24139.04177c1.83858,4.42817,4.17942,8.86389,4.75579,13.54594a18.02868,18.02868,0,0,1-.31648,6.20047,72.28149,72.28149,0,0,0,6.57515-30.02077,69.76377,69.76377,0,0,0-.43275-7.78294q-.35848-3.17781-.9947-6.31034a73.11887,73.11887,0,0,0-14.50012-30.98962,19.459,19.459,0,0,1-8.09295-8.39652,14.843,14.843,0,0,1-1.34991-4.05618c.394.05168,1.48555-5.94866,1.1884-6.31679.54906-.83317,1.53178-1.24733,2.13144-2.06035,2.98232-4.0434,7.0912-3.33741,9.2362,2.15727,4.58224,2.31266,4.6266,6.14806,1.81495,9.83683-1.78877,2.34681-2.03455,5.52233-3.60408,8.03478.16151.20671.32944.407.4909.61366a73.59114,73.59114,0,0,1,7.681,12.16859,30.59255,30.59255,0,0,1,1.82641-14.20958c1.74819-4.21732,5.02491-7.76915,7.91045-11.415a6.27922,6.27922,0,0,1,11.184,3.08333q.00885.08063.01731.1612-.6429.36267-1.25864.76991a3.0782,3.0782,0,0,0,1.24107,5.60175l.06277.00967a30.627,30.627,0,0,1-.80735,4.57938c3.7018,14.31578-4.29011,19.52989-15.70147,19.76412-.25191.12916-.49738.25832-.74929.38109a75.114,75.114,0,0,1,4.04327,19.02779,71.24332,71.24332,0,0,1-.05168,11.50322l.01939-.13562a18.82569,18.82569,0,0,1,6.4266-10.87028c4.94561-4.06263,11.93282-5.55868,17.26826-8.82425a3.533,3.533,0,0,1,5.41121,3.43708l-.02182.14261a20.67715,20.67715,0,0,0-2.31871,1.11733q-.6429.36276-1.25864.76992a3.07824,3.07824,0,0,0,1.24107,5.6018l.06282.00965c.0452.00645.084.01294.12912.01943a30.65449,30.65449,0,0,1-5.63855,8.82923c-2.31463,12.49712-12.256,13.68282-22.89022,10.04353h-.00648a75.09259,75.09259,0,0,1-5.0444,14.72621H792.92324c-.06463-.20022-.12274-.40693-.18089-.60717a20.47425,20.47425,0,0,0,4.98629-.297c-1.337-1.64058-2.674-3.29409-4.011-4.93462a1.12094,1.12094,0,0,1-.084-.09689c-.67817-.8396-1.36282-1.67283-2.041-2.51246l-.00036-.001a29.99039,29.99039,0,0,1,.87876-7.63984Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M593.99391,286.91534a8.24621,8.24621,0,0,0,12.46576,1.5258l37.465,16.90274,7.22309-9.2133-44.64448-19.75029a8.23465,8.23465,0,0,0-12.50933,10.53505Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#a0616a'
                    />
                    <path
                        d='M754.77758,297.45515l3.71571,21.05629a7.15473,7.15473,0,0,1-6.485,8.37606l-63.13867,4.96514L614.65289,298.6371l8.86417-16.82718L687.944,302.21207Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#6c63ff'
                    />
                    <rect
                        y='72.78881'
                        width='280.48127'
                        height='277.59048'
                        rx='26.74409'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M380.01369,287.86455a21.24413,21.24413,0,0,0-21.24414,21.24414V533.21123a21.24414,21.24414,0,0,0,21.24414,21.24414H524.88615A103.36435,103.36435,0,0,0,628.2505,451.091V309.10869a21.24413,21.24413,0,0,0-21.24414-21.24414Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#fff'
                    />
                    <path
                        d='M556.96507,355.87588H429.5587a4.408,4.408,0,1,1,0-8.81605H556.96507a4.408,4.408,0,0,1,0,8.81605Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M556.96507,449.87588H429.5587a4.408,4.408,0,1,1,0-8.81605H556.96507a4.408,4.408,0,0,1,0,8.81605Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#f2f2f2'
                    />
                    <path
                        d='M608.70212,402.9067H377.82165a4.408,4.408,0,1,1,0-8.81606H608.70212a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#f2f2f2'
                    />
                    <polygon
                        points='393.531 180.687 370.531 229.687 459.008 220.726 440.539 173.687 393.531 180.687'
                        fill='#a0616a'
                    />
                    <polygon
                        points='414.101 462.32 405.712 462.249 401.999 429.138 414.379 429.243 414.101 462.32'
                        fill='#a0616a'
                    />
                    <path
                        d='M740.50017,685.235a3.75542,3.75542,0,0,0,3.71838,3.78333l16.67866.13917,2.91983-5.91846,1.07238,5.94865,6.29322.05707-1.58913-21.21672-2.18949-.14567-8.93065-.61562-2.88122-.19295-.05055,6.003-13.398,9.08746A3.74908,3.74908,0,0,0,740.50017,685.235Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <polygon
                        points='321.266 462.358 313.268 459.825 319.447 427.085 331.251 430.822 321.266 462.358'
                        fill='#a0616a'
                    />
                    <path
                        d='M644.93215,676.78946a3.75542,3.75542,0,0,0,2.44267,4.70886l15.90163,5.03342,4.52988-4.79935-.72274,6.00117,5.99868,1.90358L677.797,668.89l-2.05006-.78254-8.3556-3.21239-2.69736-1.031-1.81209,5.72322-15.47666,4.74987A3.749,3.749,0,0,0,644.93215,676.78946Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M808.2479,416.5223,727.8008,431.263s-12.9034,9.652-9.4517,13.10867,3.98713,2.92126,1.71941,5.189-7.17111,5.29922-7.21941,7.28347-36.0483,90.98425-36.0483,90.98425,4-2,1,1-3,5.47886-3,5.47886l-14,94.52114,22.73653,1.33858,22.26347-86.17322,49.65929-80.50394s4.92732,71.789,5.134,76.56377,3.2067-1.22519.2067,4.77481-5,2-3,6-7.20473,85.43464-7.20473,85.43464h20.753L815.859,487.47179S831.695,439.21625,808.2479,416.5223Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M784.549,281.5104l-32.22473-3.34828-8.34892,10.83925-9.72623,5.18025a24.27484,24.27484,0,0,0-12.8148,22.96237l11.36649,66.119s-9.601,21.61914-3,27-5.10356,18.70715,9,12,75,1,75,1l-13-37,9.71135-36.35753,1.06884-30.48533a25.826,25.826,0,0,0-18.33943-25.62683l-1.3579-.41034Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#6c63ff'
                    />
                    <path
                        d='M828.9135,256.80605c.21108,9.083-3.1834,17.878-8.05987,25.603-1.44889-4.50973-4.05363-8.6142-6.77013-12.52687a38.995,38.995,0,0,1-4.15,24.69556,5.22441,5.22441,0,0,1-.44425.28489c-3.97483,2.391-9.01417,3.35945-13.31408,1.63254,8.88429-9.57671,10.01493-25.44386,2.56643-36.18565-2.10882-3.048-4.83612-5.74375-6.14228-9.21246-2.06227-5.53451-.07985-11.62816,1.17072-17.39847,1.16938-5.37042,1.37406-11.76126-2.22891-15.6971a3.78634,3.78634,0,0,1,3.47012-1.59773c2.22144.31379,3.83841,2.24465,4.86826,4.23332,1.02984,1.98861,1.70905,4.19267,3.14428,5.91034,2.65786,3.215,7.18412,3.97511,10.99852,5.66949C823.26,236.33152,828.69206,246.69915,828.9135,256.80605Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <path
                        d='M590.92033,689.23411a1.18647,1.18647,0,0,0,1.19006,1.19h253.29a1.19,1.19,0,0,0,0-2.38h-253.29A1.18651,1.18651,0,0,0,590.92033,689.23411Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#ccc'
                    />
                    <circle
                        cx='477.63839'
                        cy='248.74781'
                        r='9'
                        fill='#6c63ff'
                    />
                    <path
                        d='M751.15566,251.61275c.52788-1.84758-3.11058,9.44634-1.35486,9.65024,7.99661.91738,18.97388,5.69318,24.54346,7.92119.25083-.02915.50167-.05826.74507-.09466.59753-.06555,1.18034-.1602,1.75572-.26939C789.8137,266.3664,794.8008,246.445,794.8008,246.263c0-.89557-2.14941-25.493-5.5354-25.857a24.9574,24.9574,0,0,0-2.67783-.14563h-8.40233a39.04837,39.04837,0,0,0-5.27448-.76451H772.896c-16.9153-1.28877-30.2528,9.02125-29.0061,21.56663.00738.01453.02215.02911.02949.04368.36151.5388.67871,1.04849.959,1.53631.27294.45871.50162.89556.70077,1.31059,1.5418,3.2037-2.42134,7.23495.20657,7.98739,3.49512,1.00076-9.19231,33.89354,4.64179,33.89354C743.69833,287.7472,749.69944,256.70953,751.15566,251.61275Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <circle
                        cx='412.98633'
                        cy='41.44344'
                        r='19.89355'
                        fill='#a0616a'
                    />
                    <path
                        d='M743.88989,242.14732c.332.17474.65656.3349.98853.49511.34669.16745.69343.33494,1.04013.48782,6.66139,3.02168,12.08341,3.35658,15.37354-.98293a18.39213,18.39213,0,0,1,1.51226-6.62584,10.64972,10.64972,0,0,0,1.75572,6.62584h6.62447c6.82366,4.52882,10.3277,5.00211,5.59172,19.87012-1.3205,4.14295-6.57092,28.25068-4.50539,31.82573.59753-.06555,6.95455-26.471,7.52993-26.58018,12.96865-2.45373,21.20866-23.81966,20.15377-25.0283a22.27543,22.27543,0,0,0-2.309-9.90958,22.79287,22.79287,0,0,0-8.66051-9.42175,40.16587,40.16587,0,0,0-6.91956-2.59936c-.059-.01458-.11067-.02915-.16966-.04368-.7303-.19661-1.47538-.37864-2.22046-.53155a40.842,40.842,0,0,0-4.66223-.70625c-.11067-.00729-.22129-.01458-.32458-.01458a3.51314,3.51314,0,0,0-1.77782.48787c-.00739,0-.00739.00724-.01477.00724a3.34732,3.34732,0,0,0-.98853.881,3.38566,3.38566,0,0,0-.72292,2.10425H763.8076q-.40941,0-.81882.02182a19.77972,19.77972,0,0,0-19.0694,18.596C743.89727,241.4556,743.88989,241.79779,743.88989,242.14732Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#2f2e41'
                    />
                    <circle
                        cx='434.11663'
                        cy='13.10599'
                        r='13.10599'
                        fill='#2f2e41'
                    />
                    <path
                        d='M831.00893,462.03478a8.24622,8.24622,0,0,0-3.71676-11.99621l.06486-41.10135-11.36418-2.813.27989,48.81727a8.23465,8.23465,0,0,0,14.73619,7.09333Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#a0616a'
                    />
                    <path
                        d='M774.73294,311.053l17.68425-12.01836a7.15474,7.15474,0,0,1,10.298,2.48285l30.40367,55.55863.11616,81.31043-18.98188-1.18978-7.79226-67.12941Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#6c63ff'
                    />
                    <path
                        d='M638.915,495.45346h-189a15.5,15.5,0,0,0,0,31h189a15.5,15.5,0,1,0,0-31Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#fff'
                    />
                    <path
                        d='M638.915,527.45346h-189a16.5,16.5,0,0,1,0-33h189a16.5,16.5,0,1,1,0,33Zm-189-31a14.5,14.5,0,0,0,0,29h189a14.5,14.5,0,1,0,0-29Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#6c63ff'
                    />
                    <path
                        d='M650.05955,563.09621H566.65319a4.408,4.408,0,1,1,0-8.81606h83.40636a4.408,4.408,0,0,1,0,8.81606Z'
                        transform='translate(-353.26944 -209.57589)'
                        fill='#6c63ff'
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
                            <button
                                type='button'
                                className=' text-xl border-2 border-black rounded-lg bg-[#313132] text-[#F0EBE3] px-4 py-1'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Login, LogOut };

import React from 'react';
function Home() {
    return (
        <div className='container mx-auto p-4'>
            {/*            
                            Say "hello" to a different messaging experience. An
                            unexpected focus on privacy, combined with all of
                            the features you expect. */}

            <div className='mt-10 text-[#F5F5F5] text'>
                <span className='block text-3xl md:text-5xl font-bold'>
                    Say "hello" to a different messaging experience.
                </span>
                <span className='block text-xl md:text-3xl font-semibold'>
                    An unexpected focus on{' '}
                    <span className='text-[#FED18C] underline  underline-offset-4 font-bold'>
                        privacy
                    </span>
                    , combined with all of the features you expect.
                </span>
            </div>
            <div className=''>
                <div className='h-5/8 w-5/8 mt-10 md:h-1/2 md:w-1/2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        // width='564.98435'
                        // height='512.2962'

                        viewBox='0 0 564.98435 512.2962'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                        <g>
                            <path
                                d='M390.42662,511.00598H230.11441c-24.04481,0-43.60692-19.5621-43.60692-43.60736V43.60692c0-24.04481,19.56212-43.60692,43.60692-43.60692h160.31224c24.04437,0,43.60645,19.56211,43.60645,43.60691,2.98416,170.18169,8.073,360.75835,0,423.79168,0,24.04529-19.56207,43.60736-43.60645,43.60736l-.00003,.00003Z'
                                fill='#3f3d56'
                            />
                            <path
                                d='M436.26875,155.88451c-1.01743,0-1.84479,.82736-1.84479,1.84479v59.03313c0,1.01743,.82736,1.84479,1.84479,1.84479s1.84479-.82736,1.84479-1.84479v-59.03313c0-1.01743-.82736-1.84479-1.84479-1.84479Z'
                                fill='#3f3d56'
                            />
                            <path
                                d='M429.88273,43.60724V467.39133c0,20.92908-16.28943,38.04871-36.88647,39.37695h-.00922c-.30441,.01846-.60876,.03693-.92239,.04617-.54425,.02765-1.08841,.03687-1.64182,.03687,0,0-2.02927-.14761-5.7373-.42432-3.7449-.2767-9.19623-.6918-15.99432-1.23596-2.03845-.15686-4.18765-.33209-6.45676-.51654-4.51968-.36899-9.48218-.77484-14.80438-1.23602-2.12149-.17526-4.3168-.36893-6.5582-.56265-11.4561-.98697-24.28661-2.13995-37.8181-3.44974-2.28752-.21219-4.59351-.43356-6.91794-.66415-.60875-.06458-105.47714-26.42651-105.47714-31.37057V43.60724c0-21.79609,17.66384-39.45993,39.45998-39.45993h23.55789c3.76338,0,6.7888,2.9332,7.11166,6.68735,.02763,.24906,.05534,.49807,.10146,.74714,.68256,3.77261,4.14153,6.40141,7.97865,6.40141h82.80478c3.83713,0,7.29611-2.6288,7.97867-6.40141,.04611-.24906,.07382-.49807,.1015-.74714,.32281-3.75414,3.34824-6.68735,7.1116-6.68735h23.55795c21.79608,0,39.45993,17.66384,39.45993,39.45993h-.00003Z'
                                fill='#fff'
                            />
                            <path
                                d='M185.58526,111.60966c-1.01742,0-1.84479,.82736-1.84479,1.84479v14.75828c0,1.01743,.82736,1.84479,1.84479,1.84479s1.84479-.82736,1.84479-1.84479v-14.75828c0-1.01742-.82736-1.84479-1.84479-1.84479Z'
                                fill='#3f3d56'
                            />
                            <path
                                d='M185.58526,155.88451c-1.01742,0-1.84479,.82736-1.84479,1.84479v28.59416c0,1.01743,.82736,1.84479,1.84479,1.84479s1.84479-.82736,1.84479-1.84479v-28.59418c0-1.01743-.82736-1.84479-1.84479-1.84479v.00002Z'
                                fill='#3f3d56'
                            />
                            <path
                                d='M185.58526,196.46979c-1.01742,0-1.84479,.82736-1.84479,1.84479v28.59418c0,1.01743,.82736,1.84479,1.84479,1.84479s1.84479-.82736,1.84479-1.84479v-28.59418c0-1.01743-.82736-1.84479-1.84479-1.84479Z'
                                fill='#3f3d56'
                            />
                            <rect
                                x='217.40784'
                                y='10.60766'
                                width='35.97331'
                                height='4.61196'
                                rx='.31021'
                                ry='.31021'
                                fill='#e6e6e6'
                            />
                            <circle
                                cx='372.69417'
                                cy='11.53006'
                                r='3.68957'
                                fill='#e6e6e6'
                            />
                            <circle
                                cx='382.84047'
                                cy='11.53006'
                                r='3.68957'
                                fill='#e6e6e6'
                            />
                            <circle
                                cx='392.9868'
                                cy='11.53006'
                                r='3.68957'
                                fill='#e6e6e6'
                            />
                        </g>
                        <path
                            d='M14.31431,511.1062c0,.66003,.53003,1.19,1.19006,1.19H563.79435c.65997,0,1.19-.52997,1.19-1.19,0-.65997-.53003-1.19-1.19-1.19H15.50437c-.66003,0-1.19006,.53003-1.19006,1.19Z'
                            fill='#ccc'
                        />
                        <g>
                            <polygon
                                points='189.13337 503.29034 177.88964 503.28925 172.54091 459.92004 189.13563 459.9212 189.13337 503.29034'
                                fill='#ffb6b6'
                            />
                            <path
                                d='M150.61091,503.03528h0c-.35009,.58963-.53482,2.49265-.53482,3.17831h0c0,2.1076,1.70851,3.81616,3.81617,3.81616h34.82056c1.43779,0,2.60341-1.16556,2.60341-2.60342v-1.44968s1.72254-4.35709-1.82386-9.72742c0,0-4.40771,4.20505-10.99395-2.3812l-1.94223-3.51849-14.05904,10.28207-7.79271,.9592c-1.70489,.20984-3.21643-.03256-4.0934,1.44443h-.00014v.00003Z'
                                fill='#2f2e41'
                            />
                        </g>
                        <g>
                            <polygon
                                points='126.95369 443.05221 115.71001 443.01542 110.49898 399.62947 127.09363 399.68329 126.95369 443.05221'
                                fill='#ffb6b6'
                            />
                            <path
                                d='M88.43223,442.67487h0c-.35195,.5885-.54273,2.49094-.54489,3.1766h0c-.0067,2.10759,1.69638,3.82159,3.80403,3.82827l34.82038,.11053c1.43776,.00456,2.60709-1.15728,2.61167-2.59513l.0046-1.44968s1.73635-4.35158-1.79297-9.73316c0,0-4.42102,4.19104-10.98634-2.41607l-1.93104-3.52463-14.09161,10.23739-7.79573,.93448c-1.70554,.20442-3.2163-.04278-4.09795,1.43142h-.00015Z'
                                fill='#2f2e41'
                            />
                        </g>
                        <path
                            d='M172.73446,240l-14,1s-47.39555,26.94744-51.39555,32.94744-9.5,14.5-4.5,23.5,1.19455,117.97274,1.19455,117.97274l23.89279-5.40494,15.30821-114.01524,32-4.5s11,23.73227,7,43.36615-6,31.63385-6,31.63385l-5,116,19.5-.5,17.5-107.5,29.99999-85-39-46-26.49999-3.5Z'
                            fill='#2f2e41'
                        />
                        <path
                            d='M241.73446,117l-29,3-3,10-28,15,9,63-7,11,3,11s-8,1-7,7l-18,3s23.87402,4.87402,28.93701,28.93701,47.06299,27.06299,47.06299,27.06299l33-103,3-61-23-6-9-9Z'
                            fill='#e6e6e6'
                        />
                        <circle
                            cx='226.451'
                            cy='90.66142'
                            r='22.54398'
                            fill='#ffb6b6'
                        />
                        <path
                            d='M214.73446,111h0s-20-1-18-17c-4.95023-17.03827-.56866-28.10098,15-32,0,0,4-1,5-1,13.15295,0,20,4,20,4,0,0-1-3.96063,0-2.98031s2,2.98031,2,2.98031c0,0,10,5,10,15s0,6,0,6c0,0-2,0-4-6s-14.94882-2-14.94882-2l.94882,2-3-1-3,3-2-1s-8,0-7,0,.30315,6.79592,.30315,6.79592l-7.30315,8.20408,8,15h-2Z'
                            fill='#2f2e41'
                        />
                        <path
                            d='M108.18012,230.35401c-5.69337,3.10727-8.70576,8.56321-6.72842,12.18627s8.19564,4.04119,13.88902,.9339c2.49218-1.36017,4.47051-3.1704,5.74165-5.07992l23.95923-13.46902-6.5601-11.10881-22.92283,14.45689c-2.29362,.03603-4.88636,.72053-7.37854,2.08069Z'
                            fill='#ffb6b6'
                        />
                        <path
                            d='M188.97834,145.46667s-9.39215-3.57597-12.62811,.7285-24.61287,56.535-24.61287,56.535l-31.36392,16.38001,8.81983,15.3588,40.3873-13.4462,26.6467-48.73349-7.24893-26.82262Z'
                            fill='#e6e6e6'
                        />
                        <g>
                            <path
                                d='M485.14933,316.99789v105.99999c0,9.37402-7.62598,17-17,17H206.14933c-9.37402,0-17-7.62598-17-17v-105.99999c0-9.37402,7.62598-17,17-17H468.14933c9.37402,0,17,7.62598,17,17Z'
                                fill='#fff'
                            />
                            <path
                                d='M485.14933,316.99789v105.99999c0,9.37402-7.62598,17-17,17H206.14933c-9.37402,0-17-7.62598-17-17v-105.99999c0-9.37402,7.62598-17,17-17H468.14933c9.37402,0,17,7.62598,17,17Zm-17,120.99999c8.28424,0,15-6.71573,15-15v-53.44095c0-37.31184-30.24719-67.55906-67.55905-67.55906H206.14933c-8.28427,0-15,6.71573-15,15v106.00001c0,8.28427,6.71573,15,15,15H468.14933Z'
                                fill='#3f3d56'
                            />
                            <g>
                                <path
                                    d='M306.7598,364.03938h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476s-.70166-1.56439-1.56439-1.56439Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M358.7598,364.03938h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476s-.70166-1.56439-1.56439-1.56439Z'
                                    fill='#fed18c'
                                />
                            </g>
                            <g>
                                <path
                                    d='M306.7598,381.14545h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476s-.70166-1.56439-1.56439-1.56439Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M358.7598,381.14545h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476s-.70166-1.56439-1.56439-1.56439Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M412.3242,382.70986c0-.86273-.70166-1.56439-1.56439-1.56439h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476Z'
                                    fill='#fed18c'
                                />
                            </g>
                            <g>
                                <path
                                    d='M286.7598,350.38064c.86273,0,1.56439-.70197,1.56439-1.5647s-.70166-1.56439-1.56439-1.56439h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.5647,1.5647,1.5647h34.22064Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M387.53916,349.74429h34.22064c.86273,0,1.56439-.70203,1.56439-1.56476s-.70166-1.56439-1.56439-1.56439h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.56476,1.5647,1.56476Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M301.17606,350.07339h70.94684c.86273,0,1.56439-.70197,1.56439-1.5647s-.70166-1.56439-1.56439-1.56439h-70.94684c-.86273,0-1.56476,.70166-1.56476,1.56439s.70203,1.5647,1.56476,1.5647Z'
                                    fill='#fed18c'
                                />
                            </g>
                            <path
                                d='M329.09021,396.687h-34.22064c-.86273,0-1.5647,.70166-1.5647,1.56439s.70197,1.5647,1.5647,1.5647h34.22064c.86273,0,1.56439-.70197,1.56439-1.5647s-.70166-1.56439-1.56439-1.56439Z'
                                fill='#fed18c'
                            />
                            <g>
                                <path
                                    d='M439.6113,316.19874v106c0,9.37402-7.62598,17-17,17h-106c-9.37402,0-17-7.62598-17-17v-106c0-9.37402,7.62598-17,17-17h106c9.37402,0,17,7.62598,17,17Z'
                                    fill='#fff'
                                />
                                <path
                                    d='M439.6113,316.19874v106c0,9.37402-7.62598,17-17,17h-106c-9.37402,0-17-7.62598-17-17v-106c0-9.37402,7.62598-17,17-17h106c9.37402,0,17,7.62598,17,17Zm-23.57587,121c11.91602,0,21.57587-9.65985,21.57587-21.57584v-46.86511c0-37.31183-30.24719-67.55905-67.55902-67.55905h-53.44095c-8.28427,0-15,6.71573-15,15v91.2106c0,16.45221,13.33716,29.78937,29.78937,29.78937h84.6348v.00003h-.00006Z'
                                    fill='#3f3d56'
                                />
                                <path
                                    d='M383.72178,342.49095h-34.22061c-.86273,0-1.5647-.702-1.5647-1.56473s.702-1.56439,1.5647-1.56439h34.22061c.86273,0,1.56439,.70166,1.56439,1.56439s-.70166,1.5647-1.56439,1.5647v.00003Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M383.72178,375.85458h-34.22061c-.86273,0-1.5647-.702-1.5647-1.56473s.702-1.56439,1.5647-1.56439h34.22061c.86273,0,1.56439,.70166,1.56439,1.56439s-.70166,1.5647-1.56439,1.5647v.00003Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M366.72178,421.85458h-34.22061c-.86273,0-1.5647-.702-1.5647-1.56473s.702-1.56439,1.5647-1.56439h34.22061c.86273,0,1.56439,.70166,1.56439,1.56439s-.70166,1.5647-1.56439,1.5647v.00003Z'
                                    fill='#fed18c'
                                />
                                <path
                                    d='M402.08494,359.18369h-70.9469c-.86273,0-1.5647-.702-1.5647-1.56473s.702-1.56439,1.5647-1.56439h70.9469c.86273,0,1.56439,.70166,1.56439,1.56439s-.70166,1.5647-1.56439,1.5647v.00003Z'
                                    fill='#fed18c'
                                />
                            </g>
                            <g>
                                <g>
                                    <path
                                        d='M419.66655,257.46159c0-33.0672-27.94839-51.25775-59.87342-59.87342-40.93082-11.04603-70.90792,11.30614-59.87342,59.87342,2.50085,11.00731,8.48242,23.86325,15.88639,34.86015h58.75409c19.62598-12.77725,45.10635-9.19397,45.10635-34.86015Z'
                                        fill='#fed18c'
                                    />
                                    <path
                                        d='M358.91428,319.97157c3.34221-6.37133,7.57932-10.96804,12.24824-14.467h-55.03043c14.16355,20.23175,32.94678,33.21654,42.78219,14.467Z'
                                        fill='#fed18c'
                                    />
                                </g>
                                <path
                                    d='M352.56421,222.06211c3.53286,0,6.3968,2.86395,6.3968,6.39681v12.79359h-12.79359v-12.79359c0-3.53286,2.86395-6.39681,6.3968-6.39681Zm9.5952,19.19038v-12.79359c0-5.29928-4.29592-9.5952-9.5952-9.5952s-9.5952,4.29592-9.5952,9.5952v12.79359c-3.53286,0-6.3968,2.86395-6.3968,6.39681v15.99198c0,3.53286,2.86395,6.39681,6.3968,6.39681h19.19039c3.53286,0,6.3968-2.86395,6.3968-6.39681v-15.99198c0-3.53286-2.86395-6.39681-6.3968-6.39681h.00001Zm-19.19039,3.19839h19.19038c1.76643,0,3.1984,1.43196,3.1984,3.19839v15.99198c0,1.76643-1.43198,3.19839-3.1984,3.19839h-19.19038c-1.76643,0-3.1984-1.43196-3.1984-3.19839v-15.99198c0-1.76643,1.43198-3.19839,3.1984-3.19839Z'
                                    fill='#fff'
                                />
                            </g>
                        </g>
                        <path
                            d='M261.15048,296.5433c-.77129,6.44009,1.92574,12.05862,6.02397,12.54944s8.04572-4.33197,8.817-10.77206c.33762-2.81903,.01053-5.48059-.80762-7.62363l2.92577-27.32944-12.85422-1.09985-1.51991,27.05823c-1.30106,1.88925-2.24738,4.39828-2.58499,7.21732Z'
                            fill='#ffb6b6'
                        />
                        <path
                            d='M264.23446,133.5s14-4,17,2,10,85,10,85l-13.5,63.05905-15.5-4.05905,8-64-11-48,5-34Z'
                            fill='#e6e6e6'
                        />
                        <g>
                            <circle
                                cx='58.49998'
                                cy='266.83965'
                                r='58.49999'
                                fill='#fed18c'
                            />
                            <path
                                d='M58.49998,240.65068c4.13251,0,7.48256,3.35007,7.48256,7.48257v14.96512h-14.96512v-14.96512c0-4.13251,3.35007-7.48257,7.48256-7.48257Zm11.22385,22.44766v-14.96512c0-6.19876-5.02509-11.22385-11.22385-11.22385s-11.22385,5.02509-11.22385,11.22385v14.96512c-4.13251,0-7.48256,3.35007-7.48256,7.48257v18.70639c0,4.13251,3.35007,7.48257,7.48256,7.48257h22.44768c4.13251,0,7.48256-3.35007,7.48256-7.48257v-18.70639c0-4.13251-3.35007-7.48257-7.48256-7.48257h.00002Zm-22.44768,3.74127h22.44766c2.06625,0,3.74129,1.67502,3.74129,3.74127v18.70639c0,2.06625-1.67503,3.74127-3.74129,3.74127h-22.44766c-2.06625,0-3.74129-1.67502-3.74129-3.74127v-18.70639c0-2.06625,1.67503-3.74127,3.74129-3.74127Z'
                                fill='#fff'
                            />
                        </g>
                    </svg>
                </div>
            </div>
            <div className='mt-10 md:flex md:justify-end '>
                <span className='block text-3xl md:text-5xl  font-bold text-black'>
                    Express yourself,{' '}
                    <span className='block text-xl font-semibold md:text-3xl'>
                        and have fun with your friends and family
                    </span>
                </span>
            </div>
            <div className='md:flex md:justify-end mt-10'>
                <div className='h-5/8 w-5/8 md:h-1/2 md:w-1/2'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        data-name='Layer 1'
                        // width='965.9983'
                        // height='727.77798'
                        viewBox='0 0 965.9983 727.77798'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                    >
                        <path
                            d='M843.99644,259.05824h-3.99878V149.51291a63.40188,63.40188,0,0,0-63.4018-63.4019H544.50913a63.40183,63.40183,0,0,0-63.402,63.40171V750.48713A63.40181,63.40181,0,0,0,544.509,813.889H776.59556a63.40185,63.40185,0,0,0,63.402-63.40167V337.0345h3.99884Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#3f3d56'
                        />
                        <path
                            d='M779.15391,102.606h-30.295a22.49487,22.49487,0,0,1-20.82715,30.99053H595.07231A22.4948,22.4948,0,0,1,574.24516,102.606h-28.2956a47.34782,47.34782,0,0,0-47.34784,47.34774V750.04628a47.34781,47.34781,0,0,0,47.34778,47.34784H779.15391a47.34781,47.34781,0,0,0,47.34784-47.34778h0V149.95372A47.34778,47.34778,0,0,0,779.15391,102.606Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#fff'
                        />
                        <ellipse
                            cx='593.85804'
                            cy='272.70788'
                            rx='42'
                            ry='4'
                            fill='#e6e6e6'
                        />
                        <polygon
                            points='965.998 99.868 579.346 99.868 579.346 226.799 593.992 226.799 593.992 259.997 627.189 226.799 965.998 226.799 965.998 99.868'
                            fill='#fed18c'
                        />
                        <rect
                            x='622.38123'
                            y='142.85169'
                            width='175.8208'
                            height='5.33572'
                            fill='#fff'
                        />
                        <rect
                            x='622.38123'
                            y='161.30963'
                            width='306.4409'
                            height='5.33572'
                            fill='#fff'
                        />
                        <rect
                            x='622.38123'
                            y='179.76757'
                            width='306.14082'
                            height='5.33572'
                            fill='#fff'
                        />
                        <polygon
                            points='867.219 482.708 558.58 482.708 558.58 584.029 570.271 584.029 570.271 610.528 596.77 584.029 867.219 584.029 867.219 482.708'
                            fill='#fed18c'
                        />
                        <rect
                            x='592.93168'
                            y='517.01913'
                            width='140.34624'
                            height='4.25916'
                            fill='#fff'
                        />
                        <rect
                            x='592.93168'
                            y='531.7529'
                            width='244.61173'
                            height='4.25916'
                            fill='#fff'
                        />
                        <rect
                            x='592.93168'
                            y='546.48667'
                            width='244.37219'
                            height='4.25915'
                            fill='#fff'
                        />
                        <ellipse
                            cx='570.16348'
                            cy='620.67483'
                            rx='33.52585'
                            ry='3.19294'
                            fill='#e6e6e6'
                        />
                        <ellipse
                            cx='477.85804'
                            cy='420.70788'
                            rx='42'
                            ry='4'
                            fill='#e6e6e6'
                        />
                        <polygon
                            points='220.435 298.894 492.342 298.894 492.342 388.157 482.042 388.157 482.042 411.502 458.697 388.157 220.435 388.157 220.435 298.894'
                            fill='#fed18c'
                        />
                        <rect
                            x='248.63846'
                            y='328.43529'
                            width='123.643'
                            height='3.75226'
                            fill='#fff'
                        />
                        <rect
                            x='248.63846'
                            y='341.41553'
                            width='215.49937'
                            height='3.75226'
                            fill='#fff'
                        />
                        <rect
                            x='248.63846'
                            y='354.39577'
                            width='215.28834'
                            height='3.75226'
                            fill='#fff'
                        />
                        <path
                            d='M204.98483,602.7405a9.78852,9.78852,0,1,0,16.92928-9.83159,10.53624,10.53624,0,0,0-.9219-1.308l8.23429-58.68943.24657-1.75834,1.67262-11.97588.24657-1.72615-.91143.04286-15.95345.72906-4.27813.193-.53607,10.9252-3.03427,61.42346A9.77533,9.77533,0,0,0,204.98483,602.7405Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#a0616a'
                        />
                        <path
                            d='M229.4257,531.68727l-20.25776-1.85846a3.99888,3.99888,0,0,1-3.607-4.32839l3.75749-42.12687a15.3597,15.3597,0,1,1,30.495,3.59966l-6.07429,41.32067a3.99223,3.99223,0,0,1-3.94387,3.41014C229.67305,531.704,229.54951,531.69879,229.4257,531.68727Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#ccc'
                        />
                        <path
                            d='M214.07315,497.65142a28.21468,28.21468,0,0,1,10.37684-32.473c7.63906-5.22672,18.09252-7.103,29.35008,6.29888C276.3152,498.281,282.212,527.76513,282.212,527.76513l-46.10241,7.505S220.42959,516.1057,214.07315,497.65142Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#ccc'
                        />
                        <polygon
                            points='171.635 713.464 184.779 713.464 191.032 662.764 171.633 662.765 171.635 713.464'
                            fill='#a0616a'
                        />
                        <path
                            d='M285.81933,795.81915H327.13a0,0,0,0,1,0,0V811.7801a0,0,0,0,1,0,0H298.56648a12.74715,12.74715,0,0,1-12.74715-12.74715v-3.2138A0,0,0,0,1,285.81933,795.81915Z'
                            transform='translate(495.98517 1521.47425) rotate(179.99738)'
                            fill='#2f2e41'
                        />
                        <polygon
                            points='63.569 702.001 76.049 706.126 97.899 659.951 79.48 653.863 63.569 702.001'
                            fill='#a0616a'
                        />
                        <path
                            d='M175.52575,789.741h41.31068a0,0,0,0,1,0,0V805.702a0,0,0,0,1,0,0H188.2729a12.74715,12.74715,0,0,1-12.74715-12.74715V789.741A0,0,0,0,1,175.52575,789.741Z'
                            transform='translate(15.10144 1530.59796) rotate(-161.70982)'
                            fill='#2f2e41'
                        />
                        <circle
                            cx='243.01104'
                            cy='425.55219'
                            r='26.33308'
                            transform='translate(-291.34132 82.60127) rotate(-28.66321)'
                            fill='#a0616a'
                        />
                        <path
                            d='M266.06749,785.461l-12.207-80.56614a3.75242,3.75242,0,0,0-7.35715-.32143l-18.58881,76.77906a4.85983,4.85983,0,0,1-5.455,3.629l-51.27548-8.2411a4.82491,4.82491,0,0,1-3.85172-6.16485l66.86011-220.42923a3.755,3.755,0,0,0,.06544-1.93175l-2.22623-9.6462a4.807,4.807,0,0,1,2.49453-5.37541c9.10436-4.64563,32.15923-14.30334,49.56673-3.72425a4.87892,4.87892,0,0,1,2.22937,3.13792L338.55324,778.092a4.82479,4.82479,0,0,1-4.2886,5.80991l-62.99634,5.64135q-.2179.01886-.43242.01885A4.83333,4.83333,0,0,1,266.06749,785.461Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#2f2e41'
                        />
                        <path
                            d='M225.54983,406.9472a19.9212,19.9212,0,0,0,5.20571-4.52412,6.75719,6.75719,0,0,0,1.03951-6.53714c-1.33042-2.93506-5.28406-3.86472-8.34727-2.86408s-5.42991,3.4005-7.66876,5.71828c-1.9721,2.04162-4.00046,4.17254-4.93595,6.85251s-.45491,6.07742,1.87182,7.70336c2.28336,1.59564,5.56625.94244,7.76241-.77123s3.55559-4.25658,4.85181-6.72226Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#2f2e41'
                        />
                        <path
                            d='M216.63126,399.44407c-.146-7.41974-8.60343-12.73986-15.90723-11.42514s-12.91811,7.54234-15.72839,14.41084c-5.93767,14.512-1.48029,31.07023,4.24088,45.669s12.80109,29.41864,11.96661,45.07617a47.0938,47.0938,0,0,1-27.35559,39.67436c8.24307,3.73638,18.096-.12353,25.02277-5.94832,15.38319-12.93585,21.32109-35.96587,14.11048-54.72715-3.55648-9.25358-9.82407-17.17-14.7173-25.79168s-8.48341-18.782-5.95709-28.3682,13.27757-17.35024,22.46924-13.6367Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#2f2e41'
                        />
                        <path
                            d='M244.59023,437.23754c-2.29531-3.87938-4.61289-8.97211-.416-12.36286a8.64563,8.64563,0,0,1,6.487-1.71526c4.73071.57031,9.88213.80529,14.4607-.91335a13.55629,13.55629,0,0,0,7.86369-7.06606c2.36387-5.60074-.59621-12.40665-5.5379-15.94725a18.65352,18.65352,0,0,0-20.64725-.36516c-6.40048-2.82676-14.16647-1.5699-19.98124,2.32179s-9.79374,10.124-11.95533,16.77864a32.38559,32.38559,0,0,0-.98945,17.81332,26.47371,26.47371,0,0,0,16.422,18.09656,9.5332,9.5332,0,0,0,9.41588-1.39713s3.62943-3.16816,4.7651-6.9842C245.34969,442.5656,245.81659,439.31026,244.59023,437.23754Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#2f2e41'
                        />
                        <path
                            d='M322.70929,460.73441a11.28449,11.28449,0,0,0-.25656,1.75846l-46.05679,26.57-11.19475-6.44462-11.93427,15.62365,18.70937,13.3349a8.57717,8.57717,0,0,0,10.29069-.25071l47.49247-37.46713a11.25445,11.25445,0,1,0-7.05016-13.12453Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#a0616a'
                        />
                        <path
                            d='M274.85621,490.32129,259.97078,509.6135a4.82471,4.82471,0,0,1-7.29482.39956l-16.85132-17.49877a13.39909,13.39909,0,0,1,16.43245-21.16866l21.13523,11.81807a4.82469,4.82469,0,0,1,1.46389,7.15759Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#ccc'
                        />
                        <path
                            d='M426.27387,813.889H118.253a1.25212,1.25212,0,0,1,0-2.50424h308.0209a1.25212,1.25212,0,0,1,0,2.50424Z'
                            transform='translate(-117.00085 -86.11101)'
                            fill='#ccc'
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mt-10'> About</h1>
            <div className='about-text mt-10 px-4 text-xl'>
                <p>
                    Lorem ipsum dolor sit amet. Aut voluptatum ipsam sit dolorem
                    voluptas est accusantium adipisci aut aspernatur ipsam ut
                    ducimus placeat quo autem perspiciatis. Vel numquam
                    temporibus et magni velit 33 laborum obcaecati. Non expedita
                    libero aut quod dolores rerum quidem. Aut fuga officiis qui
                    iure velit ea nihil modi? Cum ratione natus et molestias
                    necessitatibus ut ipsam eaque et laborum aliquam aut quia
                    quia hic excepturi molestiae. Et expedita consequatur in
                    animi dicta sed quasi quidem? Qui galisum galisum est atque
                    voluptates est iusto tenetur aut dolorum voluptatem vel
                    ullam delectus. Ea dolorem eaque a labore omnis et itaque
                    sequi sit laborum sapiente aut nobis laboriosam. Est itaque
                    deleniti ut iste excepturi quo maiores internos ut possimus
                    quaerat aut optio deleniti qui blanditiis molestiae.
                </p>
                <p>
                    <p>
                        Lorem ipsum dolor sit amet. Aut sint galisum ea unde
                        doloremque est quod esse aut odio dolor vel eius
                        incidunt et voluptas delectus qui natus pariatur. Ut
                        sequi sequi nam voluptates animi cum sequi quam nam
                        placeat aliquam id tenetur velit sed deleniti corporis
                        qui velit modi. Non quidem dolorem et velit dolore sed
                        molestiae quam et iste maxime vel libero vitae!{' '}
                    </p>
                    <p>
                        Sed eius quidem est asperiores vitae in perspiciatis
                        voluptatem aut aperiam modi aut sequi cumque ad porro
                        quos. Eum dolorem perspiciatis et nihil mollitia aut
                        saepe minima et nemo totam et doloribus magni quo
                        officia distinctio.{' '}
                    </p>
                    <p>
                        Et unde distinctio sed pariatur quam et consequatur
                        consequuntur in ipsum dolorem qui similique accusamus et
                        tenetur asperiores. Aut obcaecati aliquid ut aliquam
                        quos sit omnis error. Sit earum quaerat vel suscipit
                        voluptatibus et unde officiis et nemo culpa.{' '}
                    </p>
                </p>
            </div>
        </div>
    );
}

export { Home, About };

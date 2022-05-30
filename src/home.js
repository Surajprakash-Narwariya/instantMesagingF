function Home() {
    return (
        <div>
            {/* <h1> This is homepage</h1> */}
            <div className='container-sm'>
                <div className='row mrgTop'>
                    <div className='col-sm-4'>
                        <h1 className='textsize'>Speak Freely</h1>
                        <p className='h5'>
                            Say "hello" to a different messaging experience. An
                            unexpected focus on privacy, combined with all of
                            the features you expect.
                        </p>
                    </div>

                    <div className='col-md-8 mobile-screenshots '>
                        <img
                            className='screenshot1'
                            src='https://signal.org/assets/features/iphone-screenshot-light-96ad4bb227af002ce31138a8f30771e6c8fea2ae99db939f7921f93ae6e8a531.png'
                        />{' '}
                        <img
                            className='screenshot2'
                            src='https://signal.org/assets/features/pixel-screenshot-light-3f773957fb9e743250d07d7ce63ce68f5d16f6d161913f015425b1d7df9d8bcc.png'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function About() {
    return <h1> This is About Page</h1>;
}

export { Home, About };

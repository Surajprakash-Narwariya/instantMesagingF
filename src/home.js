import React from 'react';
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
    return (
        <div>
            <h1 className='text-center'> This is About Page</h1>
            <div className='about-text'>
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

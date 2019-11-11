import React from 'react';
import {Message} from 'components';

import './Home.scss';

const Home = () => (
    <section >
        <Message
            avatar="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png" 
            text="HelloHelloHell oHelloHello HelloHelloHelloHello"
            date={new Date('Thu Aug 29 2019 11:22:58')}
        ></Message>
        <Message
            avatar="https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png" 
            text="H!"
            date={new Date('Thu Aug 29 2019 11:22:58')}
            isMe={true}
            isReaded={true}
        ></Message>
    </section>    
);

export default Home;
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FeedItem from '../components/FeedItem'
import Header from '../components/layout/Header';
import Nav from '../components/layout/Nav';

//logic
const Home = () => {
    return (
        <div className='h-full pt-20 pb-[74px] overflow-hidden'>
            <Header />

            <main className='h-full overflow-auto'>
                <div>
                    <ul>
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                        <FeedItem />
                    </ul>
                </div>
            </main >
            <Nav />
        </div>
    );
};

export default Home
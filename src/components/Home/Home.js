import React from 'react';
import img from './img1.jpg'
const Home = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-info'>Welcome to my Mega Quiz app</h1>
            <p className='mx-5'>What is a purpose of a quiz?
                A quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students' level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
                <img className='w-50 mt-5' src={img} alt="" />
        </div>

    );
};

export default Home;
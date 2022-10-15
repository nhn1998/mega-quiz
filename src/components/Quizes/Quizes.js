import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';

const Quizes = () => {
    const quizes = useLoaderData();
    console.log(quizes)
    const {name}=quizes.data;
    return (
        <div>
            <div>
                <h2>Quiz of {name}</h2>
            </div>
            <div>
            {
                quizes.data.questions.map(quiz=><QuizDetails key={quiz.id} quiz={quiz}></QuizDetails>)
            } 
            </div>
        </div>
    );
};
export default Quizes;
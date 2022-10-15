import React from 'react';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Options = ({ option, quiz }) => {
    const { correctAnswer } = quiz;
    const notify = () => {
        if (option === correctAnswer) {
            toast.success('Yess!!!You clicked The right option')
        }
        else {
            toast.error('Opps,You clicked the wrong answer')
        }
    };
    return (
        <div className=' border m-3 rounded hover'>
            <label class="container">{option}
                <input onClick={notify} type="radio" name="radio" checked />
                <span class="check"></span>
                <ToastContainer />
            </label>
        </div>
    );
};

export default Options;
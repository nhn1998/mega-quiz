import React from 'react';

const Blog = () => {
    return (
        <div className='bg-dark text-info container rounded'>
            <div>
            <h1>1.How does context api works?</h1>
            <p>Ans:If we want to pass anything from one component to another, we have to share those thing every child of parent. If its not a big project then its fine to do it . But if there has a big project we can not share every child those thing. then we have to use <span className='fw-bold'>Context API</span> . Context api do that work easily. It can pass those things from one component to another easily.</p>
            </div>
            <div>
                <h1>
                    2.What is the purpose of react router?
                </h1>
                <p>
                    The purpose of react router is to make path in website.thats the main perpose of react router.it makes sinlge page application.go one place to another place without loading page . Simply it works for make route
                </p>
            </div>
            <div>
                <h1>How does Useref Hooks works?</h1>
                <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
            </div>
        </div>
    );
};

export default Blog;
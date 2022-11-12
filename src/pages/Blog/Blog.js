import React, { useState } from 'react';
import Modal from './Modal';

const Blog = () => {
    const [state, setState] = useState(undefined);

    const quesAnss = [
        { id: 1, ques: 'what is cors?', ans: "Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF)." },
        { id: 2, ques: 'Why are you using firebase? What other options do you have to implement authentication?', ans: 'Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. User Authentication Platforms: STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress.' },
        { id: 3, ques: 'How does the private route work?', ans: 'The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)' },
        { id: 4, ques: 'What is Node? How does Node work?', ans: 'Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.' }
    ];

    return (
        <div>
            <div className='py-1 md:py-5'></div>
            {
                state === 1 ? <Modal id={quesAnss[0].id} ques={quesAnss[0].ques} ans={quesAnss[0].ans} /> : undefined
            }
            {
                state === 2 ? <Modal id={quesAnss[1].id} ques={quesAnss[1].ques} ans={quesAnss[1].ans} /> : undefined
            }
            {
                state === 3 ? <Modal id={quesAnss[2].id} ques={quesAnss[2].ques} ans={quesAnss[2].ans} /> : undefined
            }
            {
                state === 4 ? <Modal id={quesAnss[3].id} ques={quesAnss[3].ques} ans={quesAnss[3].ans} /> : undefined
            }
            {/* <p>{state}</p> */}


            {/* for mobile device */}
            <div className="lg:hidden overflow-x-auto my-10 mx-auto w-[90%]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th className='border-0'></th>
                            <th className='text-center text-lg font-bold border-0'>Questions & Answers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            quesAnss.map(qa =>
                                <tr key={qa.id}>
                                    <th className='border-0'>Q{qa.id}.</th>
                                    <td className='flex flex-col items-center justify-center'>
                                        <p>{qa.ques}</p>

                                        <div className='my-2'>
                                            <label onClick={() => setState(qa.id)} htmlFor="my-modal-6" className="text-white btn modal-button btn-warning
                                    ">Answer</label>
                                        </div>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {/* for large device */}
            <div className="hidden lg:block overflow-x-auto my-10 mx-auto w-[80%]">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Questions</th>
                            <th className='text-right'>answers</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            quesAnss.map(qa =>
                                <tr key={qa.id}>
                                    <th>Q{qa.id}.</th>
                                    <td>{qa.ques}</td>
                                    <td className='text-right'>
                                        <label onClick={() => setState(qa.id)} htmlFor="my-modal-6" className="btn modal-button btn-warning text-white">Answer</label>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default Blog;
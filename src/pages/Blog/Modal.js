import React from 'react';

const Modal = ({ ques, ans, id }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Q{id}. {ques}</h3>
                    <p className="py-4"><span className='font-bold'>Answer:</span> {ans}</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-success">Got Answer</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
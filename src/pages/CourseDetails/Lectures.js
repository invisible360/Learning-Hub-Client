import React from 'react';
import { FaRegPlayCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Lectures = ({topic}) => {
    return (
        <div className="p-4">
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Lecture-{topic.id}
                </div>
                <div className="collapse-content">
                    <div className='flex justify-between'>
                        <Link className='flex items-center justify-center'><FaRegPlayCircle /><span className='ml-2'>{topic.topic_name}</span></Link>
                        <p>{topic?.duration}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lectures;
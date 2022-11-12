import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, overview, id } = course;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={overview.image_url} alt="Shoes" className='h-64' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{overview.description.slice(0, 93)}...</p>
                <div className="card-actions justify-center my-3">
                    <Link to={`/course-details/${id}`} className="btn btn-accent">Course Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Course;
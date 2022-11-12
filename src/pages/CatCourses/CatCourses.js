import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const CatCourses = () => {
    const catCourses = useLoaderData();

    return (
        <main className='col-span-12 md:col-span-9'>
            <h1 className=' sticky top-0 z-10 text-center text-white text-2xl mb-5 rounded-lg bg-accent py-2'><span className='font-bold'>Number of Course in this Category: {catCourses.length}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    catCourses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </main>
    );
};

export default CatCourses;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCategoryList = () => {
    // const courses = useLoaderData();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(`https://it-hub-server.vercel.app/courses_categories`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <aside className='col-span-12 md:col-span-3'>
            <div className=" sticky top-0  btn-group btn-group-vertical w-full">
                <button className="btn btn-accent text-white mb-3 font-bold" >Top Categories</button>
                {
                    courses.map(course => <Link key={course.id} className="btn btn-accent btn-outline mb-1" to={`/course/${course.id}`}>{course.name}</Link>)
                }
            </div>
        </aside>
    );
};

export default CourseCategoryList;
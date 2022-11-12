import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import AllCourseCard from "../../pages/AllCourseCard/AllCourseCard";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import CatCourses from "../../pages/CatCourses/CatCourses";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Checkout from "../../pages/Checkout/Checkout";
import NotFound404 from "../../pages/404NotFound/NotFound404";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/courses',
                element: <Courses><AllCourseCard></AllCourseCard></Courses>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://it-hub-server.vercel.app/courses_categories/${params.id}`),
                element: <Courses><CatCourses></CatCourses></Courses>
            },
            {
                path: '/course-details/:id',
                loader: ({ params }) => fetch(`https://it-hub-server.vercel.app/course_details/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: ({ params }) => fetch(`https://it-hub-server.vercel.app/course_details/${params.id}`),
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound404 />
            }
        ]
    }
])

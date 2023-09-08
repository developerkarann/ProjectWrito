import { createBrowserRouter } from "react-router-dom";
import Prime from "../../layout/Prime";
import Home from "../../pages/home/Home";

// Courses
import Mern from '../../pages/courses/mern/Mern'
import Python from '../../pages/courses/python/Python'
import Android from '../../pages/courses/android/Android'
import Analytics from "../../pages/courses/analytics/Analytics";
import Dsa from "../../pages/courses/dsa/Dsa";
import MachineLearning from "../../pages/courses/machineLearning/MachineLearning";

// Mentorship Program
import MentorshipProgram from '../../pages/mentorshipProgram/MentorshipProgram'

// PaymentForm
import PaymentForm from '../../pages/PaymentForm/PaymentForm'

import OtherCourses from '../../pages/othersCourse/OtherCourse'

import HireFromUs from '../../pages/hireFromUs/HireFromUs'



import Mentorship from "../../pages/mentorship/Mentorship";
import Entrepreneurship from '../../pages/entrepreneurship/Entrepreneurship'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Prime></Prime>,
        children: [


            // courses related routes
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mern',
                element: <Mern></Mern>
            },
            {
                path: '/python',
                element: <Python></Python>
            },
            {
                path: '/analytics',
                element: <Analytics></Analytics>
            },
            {
                path: '/android',
                element: <Android></Android>
            },
            {
                path: '/dsa',
                element: <Dsa></Dsa>
            },
            {
                path: '/machineLearning',
                element: <MachineLearning></MachineLearning>
            },


            // mentorship route
            // {
            //     path: '/mentorship',
            //     element: <MentorshipProgram></MentorshipProgram>
            // },
            {
                path: '/other',
                element: <OtherCourses></OtherCourses>
            },

            // payment form route
            {
                path: '/paymentForm',
                element: <PaymentForm></PaymentForm>
            },
            {
                path: '/hireUs',
                element: <HireFromUs></HireFromUs>
            },
            {
                path: '/mentorship',
                element: <Mentorship></Mentorship>
            },
            {
                path: '/entrepreneurship',
                element: <Entrepreneurship></Entrepreneurship>
            },
        ]
    },
]);

export default router
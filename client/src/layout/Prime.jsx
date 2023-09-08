import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import NavBar from '../pages/navBar/Navbar';

const Prime = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Prime;
import React from 'react';
import Navbar from '../Components/Navbar';
import Products from './Products';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
         <Navbar/>
         <Products/>
         <Footer/>
        </div>
    );
};

export default Home;
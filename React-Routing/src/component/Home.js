
import React from 'react';
import img1 from './../img/quality.jpeg';
import img2 from './../img/first.jpeg';
import img3 from './../img/second.jpg';
import img4 from './../img/third.JPG';
import { Link } from 'react-router-dom';
import "./../component/Home.css"
import head from './../img/head.webp';
import fund from './../img/fund.png';
import bill from './../img/bill.png';



function Home() {
  return (
<section className="pt-24 bg-white">
    <div className="px-12 mx-auto max-w-7xl">
        
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span>Welcome to</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">E-Payment </span> <span></span>
            </h1>
            
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Simplify your payments online. Fast. Secure. Reliable.
            </p>

            {/* GET STARTED BUTTON */}
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                <Link to="/Login">
                <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0">
                Get started
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </Link>
        
            </div>
        </div>
         {/* CAROUSEL PICTURES */}
          <div className="w-full mx-auto mt-10 text-center md:w-10/12">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        

        </div>
    </div>
    {/* HOW IT WORKS SECTION */}
    <div className="works">
      <h2>How E-Payment Works?</h2>
      <div className="steps">
        <div className="step">
          <div className="icon">
           <Link to="/Login"><img src={head} alt="Create Account" /></Link> 
          </div>
          <h3>Create Account</h3>
          <h6>Firstly Register, get verified and login to E-payment</h6>
         
        </div>
        <div className="step">
          <div className="icon">
            <img src={fund}alt="Load Funds" />
          </div>
          <h3>Load Funds</h3>
          <h6>Load Money to your account</h6>
          
        </div>
        <div className="step">
          <div className="icon">
            <img src={bill} alt="Pay Bills" />
          </div>
          <h3>Pay Bills</h3>
          <h6>You are all set to Pay, Send or Accept payments online</h6>
         
        </div>
      </div>
    </div>
 
</section>
  )
}

export default Home
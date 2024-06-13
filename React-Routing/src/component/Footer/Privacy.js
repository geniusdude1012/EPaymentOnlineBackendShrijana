import React from 'react';
import "./../Footer/Privacy.css";
import back1 from "./../assets/back2.avif";

const Privacy = () => {
    return (
        <div className="about-container"  style={{  backgroundImage: `url(${back1})`, backgroundSize: 'cover' }} >
            <div className="about-header">
                <h1>Privacy Policy</h1>
            </div>
            <div className="about-content">
                <section className="who-we-are">
                    <h5>What information do we collect?</h5>
                    <p>
                       
E-payment systems offer numerous advantages that enhance convenience and efficiency for both consumers and businesses, which align perfectly with our website's concept. Our platform is designed to streamline the user experience, making transactions not only quick and effortless but also secure. One of the most significant benefits of integrating online payments into our website is the ease and speed of transactions; users can complete their purchases or service payments anytime and anywhere with just a few clicks, eliminating the need for physical visits to banks or payment centers. 
                    </p>
                </section>
                <section className="different">
                    <h5>What do we use your information for?</h5>
                    <p>
                    The mission of our E-online payment methods is to provide a seamless, secure, and efficient transaction experience that empowers users and businesses globally. These systems enhance convenience by allowing transactions to be completed anytime and anywhere, removing the constraints of traditional banking. 
                    </p>
                </section>
                <section className="different">
                    <h5>Do we disclose any information to outside parties?
                    </h5>
                    <p>
                    The vision is to build a connected world where financial interactions are frictionless, inclusive, and driven by trust and efficiency.
                    </p>
                    
                </section>
                <section className="different">
                    <h5>Your Consent
                    </h5>
                    <p>
                    The vision is to build a connected world where financial interactions are frictionless, inclusive, and driven by trust and efficiency.
                    </p>
                    
                </section>
                                
                <div className="about-buttons">
                    <button className="btn">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Privacy;


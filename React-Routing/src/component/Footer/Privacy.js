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
                       
                    When you register on our website or complete a form, we collect information from you. You may be required to provide the following information when placing a purchase or registering on our website: name, email address.
                    </p>
                </section>
                <br></br>
                <section className="different">
                    <h5>What do we use your information for?</h5>
                    <p>
                    Any of the information we collect from you may be used in one of the following ways:To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs), To process transactions,
                    </p>
                </section>
                <br></br>
                <section className="different">
                    <h5>Do we disclose any information to outside parties?
                    </h5>
                    <p>
                    We don't exchange or give your personally identifiable information to unaffiliated third parties. This excludes dependable outside parties who help us run our website, manage our business, or provide you with services, provided that they also promise to protect the privacy of this information. 


                    </p>
                    
                </section>
                <br></br>
                <section className="different">
                    <h5>Your Consent
                    </h5>
                    <p>
                    By accessing this website, you agree to our online privacy statement.
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


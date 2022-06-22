import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">Connect with me via phone call,whatsapp or E-mail:</p>
                           <p className="hire__text white">Phone No: <strong>9025085321</strong> or E-mail: <strong>vnagarasu55@gmail.com</strong></p>
                        </div>

                        <div className="input__box">
                           <input type="text" className="contact name" placeholder="Your name *" />
                           <input type="text" className="contact email" placeholder="Your Email *" />
                           <input type="text" className="contact subject" placeholder="Write a Subject" />
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

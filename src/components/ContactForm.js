import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

function ContactForm() {
    const form = useRef();
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        const requiredFields = ['from_fname', 'from_lname', 'from_email', 'from_subject', 'message'];
        const isFormValid = requiredFields.every(field => form.current[field].value.trim() !== '');

        if (!isFormValid) {
            setShowErrorAlert(true);
            return;
        }

        emailjs.sendForm('service_mp5qmn6', 'template_foaay1v', form.current, 'i7C84-AfGhQze9U2-')
            .then((result) => {
                console.log(result.text);
                console.log("message sent");
                setShowSuccessAlert(true);
                setShowErrorAlert(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container'>
            <div className="contact-info-container">
                <div className="get-in-touch-title">Get In Touch!</div>
                <div className="contact-info-text">
                    Feel free to reach out to me using the contact form below. Otherwise, you can reach me through these channels!
                </div>
                <div className="email">
                    <object type="image/svg+xml" data="./images/gmail-logo.svg" class="logo">Gmail Logo</object>
                    <a className="email-link" href="mailto:lucashikaruun@gmail.com">lucashikaruun@gmail.com</a>
                </div>
                <div className="linkedin">
                    <object type="image/svg+xml" data="./images/linkedin-logo.svg" class="logo">Linkedin Logo</object>
                    <a className="linkedin-link" href="https://www.linkedin.com/in/hikaruun/" target="_blank" rel="noreferrer">linkedin.com/in/hikaruun</a>
                </div>
            </div>
            <div className='contact-title'>Contact Form</div>
            <div className='form-container'>
                <form class="row g-3" ref={form} onSubmit={sendEmail}>
                    <div class="col-md-6">
                        <label for="inputFirstName" class="form-label">First Name</label>
                        <input type="text" name="from_fname" class="form-control" id="inputFirstName" placeholder="eg. Yilong" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputLastName" class="form-label">Last Name</label>
                        <input type="text" name="from_lname" class="form-control" id="inputLastName" placeholder="eg. Ma" />
                    </div>
                    <div class="col-12">
                        <label for="inputEmail" class="form-label">Email</label>
                        <input type="email" name="from_email" class="form-control" id="inputEmail" placeholder="eg. yilongma@tesla.com" />
                    </div>
                    <div class="col-12">
                        <label for="inputSubject" class="form-label">Subject</label>
                        <input type="text" name="from_subject" class="form-control" id="inputSubject" placeholder="eg. Job Offer" />
                    </div>
                    <div class="col-12">
                        <label for="inputMessage" class="form-label" name="messsage">Message</label>
                        <textarea class="form-control" name="message" id="inputMessage" placeholder="Enter Your Message" />
                    </div>
                    {showErrorAlert && (
                        <div className='alert alert-danger' role='alert'>
                            Please fill in all fields before submitting
                        </div>
                    )}
                    {showSuccessAlert && (
                        <div className="alert alert-success" role="alert">
                            Your message has been sent successfully!
                        </div>
                    )}

                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
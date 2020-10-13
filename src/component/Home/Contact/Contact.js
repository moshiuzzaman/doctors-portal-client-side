import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'
import { useForm } from 'react-hook-form';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div align="center" className="contact-section py-5">
            <Container>
                <h4 className="section-name mt-5 pt-4">Contact Us</h4>
                <h1 className='section-title-white mb-5'>Always Contact With Us</h1>
                <form className='contact-form mb-5' onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                    <input type="text" placeholder="Subject" name="Subject" ref={register({ required: true })} />
                    <textarea name="message" placeholder="Your Message.." ref={register({ required: true })} />

                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default Contact;
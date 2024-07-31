import React, { useState } from 'react';
import Navigation from './Navigation';
import { Container, Form, Button } from 'react-bootstrap';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Message sent!');
  };

  return (
    <div>
       <section className='sub-head'>
       <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Contact Us</h1>
      </section>
      <Container className='section'>
        <h2>Our Address</h2>
        <p>Springdale Public School, 123 Education Lane, Cityville, 10358</p>
        <h2>Phone</h2>
        <p>+1 (123) 456-7890</p>
        <h2>Email</h2>
        <p>info@springdale.edu</p>
        <h2>Contact Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Enter your name" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email" 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              rows={3} 
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345046266!2d144.95592831558576!3d-37.817209742021504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577ede574f4da7a!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1634239849837!5m2!1sen!2sus"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </Container>
    </div>
  );
}

export default ContactUs;

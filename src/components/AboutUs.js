import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <div>
    <section className='sub-head'>
    <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>About Us</h1>
        </section>
      <Container className='section'>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      <h2>Vision</h2>
      <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      <h2>Mission</h2>
      <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      <h2>Principal's Message</h2>
      <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      <h2>Infrastructure and Facilities</h2>
      <ul>
        <li>State-of-the-art science and computer labs</li>
        <li>Spacious and well-equipped classrooms</li>
        <li>Library with a vast collection of books and digital resources</li>
        <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </ul>
      <h2>Milestones</h2>
      <p>Over the years, we have achieved several milestones:</p>
      <ul>
        <li>1985: School Established</li>
        <li>1995: Inauguration of the Science Wing</li>
        <li>2005: Introduction of Digital Classrooms</li>
        <li>2015: Launch of the Robotics Club</li>
        <li>2020: 35th Anniversary Celebration</li>
      </ul>
      </Container>
    </div>
  );
}

export default AboutUs;

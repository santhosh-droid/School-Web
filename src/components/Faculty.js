import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

function Faculty() {
  return (
    <div>
       <section className='sub-head'>
       <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Faculty</h1>
      </section>
      <Container className='section'>
      <h2>Meet Our Dedicated Faculty Members</h2>
      <ul>
        <li><strong>John Doe:</strong> Principal, M.Ed, 20 years of experience in educational administration.</li>
        <li><strong>Jane Smith:</strong> Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</li>
        <li><strong>Emily Johnson:</strong> English Teacher, M.A. in English, 10 years of teaching experience.</li>
        <li><strong>Michael Brown:</strong> Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.</li>
        <li><strong>Sophia Davis:</strong> Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</li>
        <li><strong>David Wilson:</strong> Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</li>
      </ul>
      <h2>Professional Development</h2>
      <p>Our faculty members regularly participate in professional development programs to stay updated with the latest educational trends and technologies.</p>
      <ul>
        <li>Workshops on modern teaching methodologies</li>
        <li>Conferences on educational innovation</li>
        <li>Continuous learning programs and certifications</li>
      </ul>
      <h2>Faculty Achievements</h2>
      <p>Our teachers are not just educators but also leaders in their respective fields.</p>
      <ul>
        <li>John Doe: Recipient of the National Award for Best Principal</li>
        <li>Jane Smith: Published several research papers in renowned Physics journals</li>
        <li>Emily Johnson: Awarded Best Teacher in English by the State Education Board</li>
        <li>Michael Brown: Recognized for innovative teaching methods in Mathematics</li>
        <li>Sophia Davis: Conducted various science workshops and seminars</li>
        <li>David Wilson: Developed an educational app to enhance coding skills in students</li>
      </ul>
      </Container>
    </div>
  );
}

export default Faculty;

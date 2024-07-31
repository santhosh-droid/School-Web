import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';
function Students() {
  return (
    <div>
      <section className='sub-head'>
      <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Students</h1>
      </section>
      <Container className='section'>
      <h2>Life at Springdale Public School</h2>
      <p>At Springdale, we believe in holistic development. Our students participate in a wide range of extracurricular activities and clubs that help them develop diverse skills.</p>
      <h3>Extracurricular Activities</h3>
      <ul>
        <li>Music</li>
        <li>Dance</li>
        <li>Drama</li>
        <li>Art</li>
        <li>Sports</li>
        <li>Robotics</li>
        <li>Debate Club</li>
        <li>Science Club</li>
      </ul>
      <h3>Clubs and Societies</h3>
      <ul>
        <li>Literary Society</li>
        <li>Environmental Club</li>
        <li>Astronomy Club</li>
        <li>Coding Club</li>
      </ul>
      <h2>Achievements</h2>
      <ul>
        <li><strong>John Smith:</strong> National Level Math Olympiad Winner</li>
        <li><strong>Sarah Lee:</strong> Gold Medalist in State Swimming Championship</li>
        <li><strong>Tech Innovators Club:</strong> Winners of Inter-School Robotics Competition</li>
      </ul>
      <h2>Student Council</h2>
      <p>Our student council plays a vital role in fostering leadership and organizational skills among students.</p>
      <ul>
        <li><strong>President:</strong> Amy Parker, Grade 12</li>
        <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
        <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
      </ul>
      <h2>Student Support Services</h2>
      <p>We offer comprehensive support services to ensure the well-being and success of our students.</p>
      <ul>
        <li>Counseling Services</li>
        <li>Career Guidance</li>
        <li>Academic Support and Tutoring</li>
        <li>Health and Wellness Programs</li>
      </ul>
      <h2>Community Service</h2>
      <p>Our students actively participate in community service projects, fostering a sense of responsibility and empathy.</p>
      <ul>
        <li>Volunteering at local shelters</li>
        <li>Environmental clean-up drives</li>
        <li>Fundraising for charitable causes</li>
        <li>Mentoring younger students</li>
      </ul>
      </Container>
    </div>
  );
}

export default Students;

import React from 'react';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap';

function Admissions() {
  return (
    <div >
       <section className='sub-head'>
       <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Admissions</h1>
      </section>
    <Container className='section'>
      <h2>Process</h2>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
      <h2>Criteria</h2>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h2>Important Dates</h2>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
      </Container>
    </div>
  );
}

export default Admissions;

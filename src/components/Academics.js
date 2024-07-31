import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col } from 'react-bootstrap';

const curriculumData = [
  {
    level: 'Primary (Grades 1-5)',
    subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Art', 'Physical Education']
  },
  {
    level: 'Secondary (Grades 6-10)',
    subjects: ['English', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 'Social Studies', 'Computer Science', 'Physical Education', 'Art']
  },
  {
    level: 'Senior Secondary (Grades 11-12)',
    streams: {
      'Science Stream': ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science', 'English'],
      'Commerce Stream': ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English']
    }
  }
];

const teachingMethodologies = [
  'We use a blend of traditional and modern teaching techniques to cater to different learning styles.',
  'Our teachers employ interactive and engaging methods to ensure effective learning.',
  'Regular assessments and feedback help in tracking student progress and addressing their individual needs.'
];

const educationalResources = [
  'Digital classrooms equipped with the latest technology.',
  'Interactive learning modules to enhance understanding.',
  'Access to online educational platforms for additional learning support.'
];

function Academics() {
  return (
    <div >
      <section className='sub-head'>
        <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Academics </h1>
        </section>
      <Container className='section'>
        <h2>Curriculum</h2>
        {curriculumData.map((curriculum, index) => (
          <div key={index}>
            <h3>{curriculum.level}</h3>
            {curriculum.subjects ? (
              <ul>
                {curriculum.subjects.map((subject, i) => (
                  <li key={i}>{subject}</li>
                ))}
              </ul>
            ) : (
              Object.keys(curriculum.streams).map((stream, i) => (
                <div key={i}>
                  <h4>{stream}</h4>
                  <ul>
                    {curriculum.streams[stream].map((subject, j) => (
                      <li key={j}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        ))}
        <h2>Teaching Methodologies</h2>
        <ul>
          {teachingMethodologies.map((method, index) => (
            <li key={index}>{method}</li>
          ))}
        </ul>
        <h2>Educational Resources</h2>
        <ul>
          {educationalResources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
        <h2>Additional Programs and Activities</h2>
        <p>We offer a range of programs and activities to enhance our academic curriculum and provide students with a well-rounded education:</p>
        <ul>
          <li>After-school tutoring sessions</li>
          <li>Enrichment programs in STEM, arts, and humanities</li>
          <li>Field trips and educational excursions</li>
          <li>Guest lectures and workshops by industry experts</li>
        </ul>
        <h2>Academic Support</h2>
        <p>We are committed to providing support to all students to help them achieve their academic goals:</p>
        <ul>
          <li>Personalized learning plans for students with special needs</li>
          <li>Regular parent-teacher meetings to discuss student progress</li>
          <li>Mentorship programs to guide students in their academic journey</li>
        </ul>
      </Container>
    </div>
  );
}

export default Academics;

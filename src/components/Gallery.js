import React from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const galleryData = [
  { src: '/assets/sports_day.jpg', alt: 'Annual Sports Day', caption: 'Students participating in various sports events.' },
  { src: '/assets/science_exhibition.jpg', alt: 'Science Exhibition', caption: 'Students presenting their science projects.' },
  { src: '/assets/cultural_fest.jpg', alt: 'Cultural Fest', caption: 'Students performing in the cultural fest.' },
  { src: '/assets/classroom.jpg', alt: 'Classroom', caption: 'A glimpse of our interactive classrooms.' },
  { src: '/assets/library.jpg', alt: 'Library', caption: 'Students reading and studying in the school library.' },
];

const videoData = [
  { src: '/assets/school_tour.mp4', alt: 'School Tour', caption: 'Virtual tour of Springdale Public School.' },
  { src: '/assets/annual_function.mp4', alt: 'Annual Function', caption: 'Highlights from the Annual Function 2023.' },
];

function Gallery() {
  return (
    <div>
       <section className='sub-head'>
       <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <h1>Gallery</h1>
      </section>
      <Container className='section'>
        <h2>Photos</h2>
        <Row>
          {galleryData.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Image src={item.src} alt={item.alt} thumbnail />
              <p>{item.caption}</p>
            </Col>
          ))}
        </Row>
        <h2>Videos</h2>
        <Row>
          {videoData.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <video width="100%" controls>
                <source src={item.src} type="video/mp4" />
                {item.alt}
              </video>
              <p>{item.caption}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;

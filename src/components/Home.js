import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <header className=" header text-center">
        <div className="nav">
          <img src="/assets/logo.png" alt="School Logo" width="100" />
          <Navigation />
        </div>
        <div className="main-cont">
          <h1>Springdale Public School</h1>
          <p>
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </p>
          <Link to="/contact-us" className="but">
            Visit to know more
          </Link>
        </div>
      </header>

      <Carousel>
        <Carousel.Item>
          <img
            className="card-img"
            src="../assets/sports_day.jpg"
            alt="Annual Sports Day"
          />
          <Carousel.Caption className="card-content">
            <h2>Annual Sports Day</h2>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img"
            src="../assets/science_exhibition.jpg"
            alt="Science Exhibition"
          />
          <Carousel.Caption className="card-content">
            <h2>Science Exhibition</h2>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card-img"
            src="../assets/cultural_fest.jpg"
            alt="Cultural Fest"
          />
          <Carousel.Caption className="card-content">
            <h2>Cultural Fest</h2>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-4">
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Learn more about our school's history, vision, and mission.
                </Card.Text>
                <Link to="/about-us" className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Academics</Card.Title>
                <Card.Text>
                  Discover our comprehensive curriculum and teaching
                  methodologies.
                </Card.Text>
                <Link to="/academics" className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Admissions</Card.Title>
                <Card.Text>
                  Get information on the admission process and important dates.
                </Card.Text>
                <Link to="/admissions" className="btn btn-primary">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <section className="text-center mt-4">
        <h2><strong>Recent Announcements</strong></h2>
        <p>
          Stay updated with the latest news and announcements from our school.
        </p>
        <ul>
          <li>School Reopens on September 1st</li>
          <li>Online Parent-Teacher Meeting on August 20th</li>
          <li>Annual Sports Day Scheduled for October 15th</li>
        </ul>
      </section>
    <br></br>
      <section className="text-center mt-4">
        <h2><strong>Testimonials</strong></h2>
        <p>Hear what our students and parents have to say about us.</p>
        <blockquote>
          <p>
            "Springdale Public School has been a fantastic experience for our
            children. The faculty is supportive, and the facilities are
            top-notch." - Parent
          </p>
        </blockquote>
        <blockquote>
          <p>
            "The extracurricular activities and clubs have helped me discover my
            passion for science and technology." - Student
          </p>
        </blockquote>
      </section>
      {/*  footer  */}
      <section class="fot">
        <footer>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum nemo{" "}
            <br></br>assumenda nulla asperiores neque reiciendis.
          </p>
        </footer>
      </section>
    </div>
  );
}

export default Home;

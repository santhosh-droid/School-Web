// Navigation component with styled-components
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`
  outline: none;
  text-decoration: none;
  color: inherit; /* Optional: to inherit text color */
  
  &:hover {
    text-decoration: underline; /* Optional: to add underline on hover */
  }
`;

const Navigation = () => {
  return (
    <nav className="text-center nav-links mt-4">
      <NavLink to="/about-us">About Us</NavLink> |{" "}
      <NavLink to="/academics">Academics</NavLink> |{" "}
      <NavLink to="/admissions">Admissions</NavLink> |{" "}
      <NavLink to="/faculty">Faculty</NavLink> |{" "}
      <NavLink to="/students">Students</NavLink> |{" "}
      <NavLink to="/gallery">Gallery</NavLink> |{" "}
      <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  );
};

export default Navigation;

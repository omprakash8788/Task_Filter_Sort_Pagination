import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.div`
  background-color: #022631;
  height: 80px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  margin-top: -20px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px 0;
    position: relative;
  }
`;

const NavItem = styled.h4`
  margin: 0 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  font-size: 24px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
      {isOpen && (
        <div>
          <NavItem>Home</NavItem>
          <NavItem>Filter</NavItem>
          <NavItem>Product</NavItem>
          <NavItem>Test</NavItem>
        </div>
      )}
    </Nav>
  );
};

export default Navbar;

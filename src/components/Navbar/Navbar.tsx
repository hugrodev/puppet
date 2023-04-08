import React, { FC } from 'react';
import './Navbar.scss';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className="Navbar" data-testid="Navbar">
    Navbar Component
  </div>
);

export default Navbar;

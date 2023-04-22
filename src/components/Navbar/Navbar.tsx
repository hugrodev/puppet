import React, { FC } from 'react';
import './Navbar.scss';
import { CiShoppingCart, CiUser } from 'react-icons/ci';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => (
  <div className="Navbar" data-testid="Navbar">
    <div className="navbar__left">
      <a href="#" className="navbar__logo">Logo</a>
    </div>
    <nav className="navbar__center">
      <ul className="navbar__list">
        <li><a href="#">Titre 1</a></li>
        <li><a href="#">Titre 2</a></li>
        <li><a href="#">Titre 3</a></li>
      </ul>
    </nav>
    <div className="navbar__right">
      <a href="#" className="navbar__icon"><CiUser /></a>
      <a href="#" className="navbar__icon"><CiShoppingCart /></a>
    </div>
  </div>
);

export default Navbar;

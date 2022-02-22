import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <ul className="main_menu">
      <li>
        <Link to="/sign-in">
          <FaUser />
          <span>Sign In</span>
        </Link>
      </li>
    </ul>
  );
}

export default MainMenu;

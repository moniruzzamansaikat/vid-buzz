import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="logo">
      Vid
      <span>Buzz</span>
    </Link>
  );
}

export default Logo;

import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const Error = () => (
  <div>
    <h1>Page not found...</h1>
    <p>#EndPoliceBrutality</p>
    <Link to='/'>
      Return home <FiArrowRight />
    </Link>
  </div>
);

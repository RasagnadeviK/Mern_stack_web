import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export const Success = () => {
  return (
    <div>
      <p>Thank you for reaching out to us. We would be in touch soonest.</p>
      <Link to='/'>
        Return home <FiArrowRight />
      </Link>
    </div>
  );
};

import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`rounded-lg  ${className}`}
    style={{
      minHeight: '95%',
      justifyContent: 'start'
    }}
  >
    {children}
  </div>
);

export default Card;

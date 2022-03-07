import React from 'react';

const HomeButton = function () {
  return (
    <a href='/'>
      <span className='sr-only'>Workflow</span>
      <img
        className='h-10 w-auto'
        src='/images/logo-no-text-192.png'
        alt='PMD Logo'
      />
    </a>
  );
};

export default HomeButton;

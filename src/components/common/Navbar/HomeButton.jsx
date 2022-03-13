import React from 'react';

const HomeButton = function () {
  return (
    <a href='/'>
      <span className='sr-only'>Workflow</span>
      <img
        className='h-14 w-14'
        src='/images/logo-no-text-white-192.png'
        alt='PMD Logo'
      />
    </a>
  );
};

export default HomeButton;

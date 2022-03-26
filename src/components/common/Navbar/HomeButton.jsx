import React from 'react';

const HomeButton = function () {
  return (
    <a href='/'>
      <span className='sr-only'>PMD First Aid & CPR</span>
      <img
        className='w-36 md:w-44'
        src='/images/large-font-logo-3.png'
        alt='PMD Logo'
      />
    </a>
  );
};

export default HomeButton;

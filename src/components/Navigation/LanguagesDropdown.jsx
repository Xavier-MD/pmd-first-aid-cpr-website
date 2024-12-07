import { Fragment } from 'react';
import i18n from 'i18next';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import i18next from 'i18next';

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'en-ca',
    flagSvg: 'ontario-flag.svg'
  },
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr-ca',
    flagSvg: 'québec-flag.svg'
  }
];

const LanguagesDropdown = function ({ isLandingPage }) {
  // Base classes
  const buttonBaseClasses = 'flex items-center transition ease-in-out duration-200';
  const iconBaseClasses =
    'w-[1.6rem] md:w-[0.9rem] h-auto mt-[0.1rem] md:mt-[0rem] md:mr-[0.4rem] transition ease-in-out duration-200';

  // Landing page vs. non-landing page classes
  const buttonLandingClasses = 'text-gray-300 group-hover:text-white'; // Example: lighter text on hover if on landing page
  const buttonDefaultClasses = 'text-gray-600 group-hover:text-blue-500'; // Original classes for other pages

  const iconLandingClasses = 'text-gray-300 group-hover:text-white';
  const iconDefaultClasses = 'text-gray-500 group-hover:text-blue-500 md:group-hover:text-blue-500';

  // Classes for Menu.Item based on landing page and active states
  const activeLandingClasses = 'text-white'; // Example: active item on landing page is white text on blue background
  const inactiveLandingClasses = 'text-gray-300';

  const activeDefaultClasses = 'text-blue-500'; // Example: active item on default pages
  const inactiveDefaultClasses = 'text-slate-600';

  return (
    <>
      {/* Language Dropdown Component */}
      <Menu as='div' className='group flex flex-col font-header justify-center items-end md:items-center'>
        {/* Language Tab Item */}
        <div>
          <Menu.Button
            className={classNames(buttonBaseClasses, isLandingPage ? buttonLandingClasses : buttonDefaultClasses)}
          >
            <FontAwesomeIcon
              icon={faEarthAmericas}
              className={classNames(iconBaseClasses, isLandingPage ? iconLandingClasses : iconDefaultClasses)}
            />
            <h2 className='mr-[0.35rem] hidden md:block text-[0.90rem] font-lato capitalize'>{i18next.language}</h2>
            {/* Add your Chevron Icon here if needed */}
          </Menu.Button>
          {/* Menu.Items and Menu.Item code here */}
        </div>
        {/* Animation */}
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          {/* Dropdown Menu */}
          <Menu.Items
            className={classNames(
              'absolute top-[4rem] md:top-[3rem] rounded-md shadow-lg z-50 ring-[0.05rem]',
              isLandingPage
                ? 'bg-black bg-opacity-40 backdrop-blur-md ring-gray-600'
                : 'bg-white bg-opacity-40 ring-black ring-opacity-10'
            )}
          >
            <div className='flex-col py-[0.5rem]'>
              {languages.map(({ code, name, country_code, flagSvg }) => (
                <div key={country_code}>
                  <Menu.Item key={code}>
                    {({ active }) => {
                      // Determine classes for each menu item
                      const appliedClasses = isLandingPage
                        ? active
                          ? activeLandingClasses
                          : inactiveLandingClasses
                        : active
                        ? activeDefaultClasses
                        : inactiveDefaultClasses;

                      return (
                        <button
                          onClick={() => i18next.changeLanguage(code)}
                          className={classNames(
                            appliedClasses,
                            'group flex w-full justify-start px-[1rem] py-[0.2rem] font-thick transition-colors duration-200'
                          )}
                        >
                          <p className='text-[0.9rem]'>{name}</p>
                        </button>
                      );
                    }}
                  </Menu.Item>
                </div>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default LanguagesDropdown;

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

const LanguagesDropdown = function () {
  return (
    <>
      {/* Language Dropdown Component */}
      <Menu as='div' className='group flex flex-col font-header justify-center items-end md:items-center'>
        {/* Language Tab Item */}
        <div>
          <Menu.Button className='flex items-center transition ease-in-out duration-200 text-slate-500 group-hover:text-blue-400'>
            {/* Globe Icon */}
            <FontAwesomeIcon
              className='w-[1.6rem] md:w-[0.9rem] h-auto mt-[0.1rem] md:mt-[0rem] md:mr-[0.4rem] text-blue-400 md:text-slate-400 transition ease-in-out duration-200 group-hover:text-blue-500 md:group-hover:text-blue-400'
              icon={faEarthAmericas}
            />
            {/* Language Text */}
            <h2 className='mr-[0.35rem] hidden md:block font-font4 text-[0.95rem] capitalize'>{i18next.language}</h2>
            {/* Chevron Icon */}
            <FontAwesomeIcon
              className='w-[0.6rem] h-[auto] hidden md:block md:text-slate-400 transition ease-in-out duration-200 group-hover:text-blue-400'
              icon={faChevronDown}
            />
          </Menu.Button>
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
          <Menu.Items className='absolute top-[5rem] rounded-md drop-shadow-xl bg-white ring-[0.05rem] ring-black ring-opacity-10 z-50'>
            <div className='flex-col py-[0.5rem]'>
              {languages.map(({ code, name, country_code, flagSvg }) => (
                <div key={country_code}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={classNames(
                          active ? 'text-slate-800' : 'text-slate-500',
                          'group flex w-full justify-start px-[1rem] py-[0.2rem] font-thick'
                        )}
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <p className='text-[0.9rem]'>{name}</p>
                      </button>
                    )}
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

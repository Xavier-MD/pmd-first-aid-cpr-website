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
      <Menu as='div' className='group flex flex-col font-header justify-center items-end md:items-center'>
        <div>
          <Menu.Button className='flex items-center transition ease-in-out duration-200 text-blue-400 hover:text-blue-500'>
            <FontAwesomeIcon
              className='w-[1.6rem] md:w-[0.9rem] h-auto mt-[0.1rem] md:mt-[0rem] mr-[0.9rem] md:mr-[0.4rem]'
              icon={faEarthAmericas}
            />
            <h2 className='mr-[0.35rem] hidden md:block font-thick text-[0.95rem] capitalize'>
              {i18next.language}
            </h2>
            <FontAwesomeIcon
              className='w-[0.6rem] h-[auto] hidden md:block'
              icon={faChevronDown}
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute mr-[1rem] md:mr-[1.8rem] top-[4.5rem] md:top-[5.3rem] rounded-md shadow-md shadow-slate-200 bg-white ring-[0.05rem] ring-black ring-opacity-10 z-10'>
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

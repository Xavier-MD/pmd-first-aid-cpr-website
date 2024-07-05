import { Fragment } from 'react';
import i18n from 'i18next';
import { Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
    <Menu as='div' className='group inline-flex flex-col font-header justify-center items-center'>
      <div>
        <Menu.Button className='inline-flex items-center transition ease-in-out hover:-translate-y-[1px] hover:scale-110 duration-200 text-blue-400 hover:text-blue-500'>
          <h2 className='mr-[0.7rem] md:mr-[0.5rem] font-thick font-medium text-[1.3rem] md:text-[0.95rem] capitalize'>{i18next.language}</h2>
          <FontAwesomeIcon className='w-auto h-[1.5rem] md:h-[1rem] mr-[2rem] md:mr-[0rem] pb-[0.2rem] md:pb-[0.075rem]' icon={faChevronDown} />
        </Menu.Button>
      </div>

      <Transition as={Fragment} enter='transition ease-out duration-100' enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100' leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100' leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='absolute mr-[3rem] top-[4rem] rounded-sm shadow shadow-slate-400 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10'>
          <div className=''>
            {languages.map(({ code, name, country_code, flagSvg }) => (
              <div key={country_code}>
                <Menu.Item>
                  {({ active }) => (
                    <button className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'group flex w-full items-center px-4 py-2 font-thick hover:bg-transparent')} onClick={() => i18next.changeLanguage(code)}>
                      <p className='text-[0.95rem]'>{name}</p>
                    </button>
                  )}
                </Menu.Item>
              </div>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguagesDropdown;

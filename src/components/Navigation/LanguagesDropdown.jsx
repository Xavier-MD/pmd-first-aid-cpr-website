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
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex items-center mt-[8px] transition ease-in-out hover:-translate-y-[1px] hover:scale-110 duration-200'>
          <h2 className='mr-2 font-thick font-semibold text-blue-500 text-sm'>
            English | Français
          </h2>
          <FontAwesomeIcon size='md' color='#3b82f6' icon={faChevronDown} />
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
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gradient-to-tr from-blue-300 to-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
          <div className='py-1'>
            {languages.map(({ code, name, country_code, flagSvg }) => (
              <div key={country_code}>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-2 text-sm hover:bg-transparent'
                      )}
                      onClick={() => i18next.changeLanguage(code)}
                    >
                      <img
                        className='w-20 h-auto mr-3'
                        src={`/images/${flagSvg}`}
                        alt='PMD Logo'
                      />
                      <p className='text-lg'>{name}</p>
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

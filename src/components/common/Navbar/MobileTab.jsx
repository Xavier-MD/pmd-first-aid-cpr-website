import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';

const MobileTab = function ({ tabInfo }) {
  return (
    <Disclosure.Button
      as='a'
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'bg-gradient-to-r from-lime-600 to-transparent border-blue-200 text-slate-800'
          : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
        'block pl-5 pr-4 py-2 text-base font-medium border-y-2'
      )}
    >
      {tabInfo.name}
    </Disclosure.Button>
  );
};

export default MobileTab;

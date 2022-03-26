import { Disclosure } from '@headlessui/react';
import classNames from 'classnames';

const MobileTab = function ({ tabInfo }) {
  return (
    <Disclosure.Button
      as='a'
      href={tabInfo.href}
      className={classNames(
        tabInfo.href === window.location.pathname
          ? 'bg-gradient-to-r from-lime-600 to-transparent border-slate-200 text-slate-50 border-l-lime-700'
          : 'border-transparent text-slate-600 focus:bg-gradient-to-r from-blue-300 border-l-blue-400 focus:border-l-blue-500 focus:text-slate-700',
        'block pl-4 border-l-4 pr-4 py-2 text-base font-semibold font-header border-y-2'
      )}
    >
      {tabInfo.name}
    </Disclosure.Button>
  );
};

export default MobileTab;

import classNames from 'classnames';

const DesktopTab = function ({ isLandingPage, tabInfo }) {
  const currentPath = window.location.pathname;
  const isActive = currentPath === tabInfo.href;

  // Define classes for when on the landing page:
  const landingActiveClasses = 'text-blue-500';
  const landingInactiveClasses = 'text-gray-300 group-hover:text-white';

  // Define classes for non-landing pages:
  const defaultActiveClasses = 'text-blue-500';
  const defaultInactiveClasses = 'text-gray-600 group-hover:text-blue-400';

  // Choose classes based on isLandingPage prop and whether it's active:
  const appliedClasses = isLandingPage
    ? isActive
      ? landingActiveClasses
      : landingInactiveClasses
    : isActive
    ? defaultActiveClasses
    : defaultInactiveClasses;

  return (
    <a href={tabInfo.href} className='group inline-flex flex-col justify-center items-center focus:outline-none'>
      <h2
        className={classNames(
          appliedClasses,
          'text-[0.9rem] font-lato transition ease-in-out group-hover:scale-[105%] duration-300'
        )}
      >
        {tabInfo.name}
      </h2>
    </a>
  );
};

export default DesktopTab;
import classNames from 'classnames';

const DesktopTab = function ({ isLandingPage, tabInfo }) {
  const currentPath = window.location.pathname;
  const isActive = currentPath === tabInfo.href;

  // Define classes for when on the landing page (dark translucent nav over video):
  const landingActiveClasses = 'text-white border-b-2 border-brand-green';
  const landingInactiveClasses = 'text-[#D5E3F0] border-b-2 border-transparent group-hover:text-white';

  // Define classes for non-landing pages (light nav):
  const defaultActiveClasses = 'text-brand-green-deep border-b-2 border-brand-green';
  const defaultInactiveClasses = 'text-brand-ink border-b-2 border-transparent group-hover:text-brand-green-deep';

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
          'text-[0.9rem] font-body font-bold pb-[0.15rem] transition ease-in-out group-hover:scale-[105%] duration-300 motion-reduce:group-hover:scale-100'
        )}
      >
        {tabInfo.name}
      </h2>
    </a>
  );
};

export default DesktopTab;
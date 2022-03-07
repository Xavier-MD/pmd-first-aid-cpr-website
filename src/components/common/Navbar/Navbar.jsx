import HomeButton from './HomeButton';
import CoursesDropdown from './CoursesDropdown';
import Tab from './Tab';
import TabButton from './TabButton';

const tabsInfo = {
  aboutUs: { name: 'About Us', href: '/about-us' },
  testimonials: { name: 'Testimonials', href: '/testimonials' },
  contactUs: { name: 'Contact Us', href: '/contact-us' }
};

const Navbar = function () {
  return (
    <header className='bg-indigo-600'>
      <nav className=' mx-auto px-10 shadow-md' aria-label='Top'>
        {/* Mobile Bottom Border */}
        <div className='w-full py-3 lg:py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          {/* Content Flexbox (Left) */}
          <div className='flex items-center'>
            <HomeButton />
            {/* Desktop Tabs */}
            <div className='hidden ml-10 lg:flex lg:space-x-8'>
              <Tab key={tabsInfo.aboutUs.name} tabInfo={tabsInfo.aboutUs} />
              <CoursesDropdown />
              <Tab
                key={tabsInfo.testimonials.name}
                tabInfo={tabsInfo.testimonials}
              />
            </div>
          </div>
          {/* Contact Us Button */}
          <TabButton
            key={tabsInfo.contactUs.name}
            tabInfo={tabsInfo.contactUs}
          />
        </div>
        {/* Mobile Tabs */}
        <div className='py-3 flex flex-wrap lg:hidden justify-around'>
          <Tab key={tabsInfo.aboutUs.name} tabInfo={tabsInfo.aboutUs} />
          <CoursesDropdown />
          <Tab
            key={tabsInfo.testimonials.name}
            tabInfo={tabsInfo.testimonials}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const TabIcon = function ({ tabInfo }) {
  return (
    <a
      href={tabInfo.href}
      className='w-14 h-10 inline-flex justify-center items-center bg-blue-500  rounded text-lg text-blue-50 shadow-md shadow-blue-400 active:bg-blue-600 focus:outline-none active:ring-2 active:ring-slate-300'
    >
      <FontAwesomeIcon
        icon={faEnvelope}
        className='w-6 h-6'
        aria-hidden='true'
      />
    </a>
  );
};

export default TabIcon;

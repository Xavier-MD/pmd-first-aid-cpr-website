import classNames from 'classnames';

const Container = function ({ className, children }) {
  return <div className={classNames('mx-auto w-full max-w-[1180px] px-5 sm:px-8', className)}>{children}</div>;
};

export default Container;

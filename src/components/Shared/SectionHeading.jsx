import classNames from 'classnames';

// Eyebrow + heading + optional lead paragraph. The only eyebrow style in the system.
const SectionHeading = function ({ eyebrow, title, center = false, className, children }) {
  return (
    <div className={classNames('max-w-[600px]', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className='text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-green-deep'>{eyebrow}</span>
      )}
      <h2 className='mt-2 text-3xl sm:text-[2.15rem] leading-tight'>{title}</h2>
      {children && <p className='mt-3'>{children}</p>}
    </div>
  );
};

export default SectionHeading;

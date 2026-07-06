// Course card: photo top, Fraunces title, body text, arrow link.
// The whole card is one link; the photo zooms and the arrow nudges on hover.
// `cta` must come from a translation key — no default on purpose (i18n rule).
const CourseCard = function ({ href, image, imageAlt, title, cta, children }) {
  return (
    <a
      href={href}
      className='group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white transition duration-150 hover:-translate-y-[3px] hover:shadow-card motion-reduce:transition-none motion-reduce:hover:translate-y-0'
    >
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={imageAlt}
          className='h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100'
        />
      </div>
      <div className='flex flex-1 flex-col gap-2.5 p-5'>
        <h3 className='text-lg leading-snug'>{title}</h3>
        <p className='flex-1 text-[0.95rem] leading-relaxed'>{children}</p>
        <span className='font-bold text-brand-blue-deep'>
          {cta}{' '}
          <span
            aria-hidden='true'
            className='inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0'
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
};

export default CourseCard;

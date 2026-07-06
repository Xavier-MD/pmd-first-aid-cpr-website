import classNames from 'classnames';

// Pill button system. Rules: green = actions, soft blue = secondary/informational,
// white = on colored bands. No other button styles.
const variantClasses = {
  primary: 'bg-brand-green text-white hover:bg-brand-green-deep',
  soft: 'bg-brand-sky text-brand-blue-deep border-2 border-transparent hover:border-brand-blue',
  white: 'bg-white text-brand-green-deep hover:bg-brand-band'
};

const sizeClasses = {
  sm: 'px-5 py-2.5 text-[0.92rem]',
  md: 'px-7 py-3 text-base'
};

const Button = function ({ as: Tag = 'a', variant = 'primary', size = 'md', className, children, ...props }) {
  return (
    <Tag
      className={classNames(
        'inline-block rounded-full font-bold transition duration-150',
        'focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-brand-green/60',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;

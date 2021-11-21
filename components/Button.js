const Button = ({ children, href = "", type, disabled }) => {
  return (
    <>
      {href !== "" ? (
        <a
          href={href}
          className="px-3 py-2 md:px-4 md:py-2 rounded-full font-primary font-medium text-gray-400 dark:text-gray-200 transition duration-500 lowercase md:uppercase text-xs tracking-widest hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 hover:-translate-y-2"
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          className="px-3 py-2 md:px-4 md:py-2 rounded-full font-primary font-medium text-gray-400 dark:text-gray-200 transition duration-500 lowercase md:uppercase text-xs tracking-widest hover:shadow-xl hover:bg-white dark:hover:bg-gray-700 hover:-translate-y-2"
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

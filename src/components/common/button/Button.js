import PropTypes from 'prop-types';

/**
 * A button component that displays content and handles button types.
 *
 * @param {Object} props - The properties for the button component.
 * @param {'button'|'submit'|'reset'} props.type - The type of the button (button, submit, reset).
 * @param {React.ReactNode} props.children - The content inside the button (usually text or other elements).
 * @returns {JSX.Element} The rendered button component.
 */
function Button({ type, children }) {
  return (
    <button
      className="font-medium w-full shadow-sm text-sm flex justify-center rounded-sm py-2 px-4 mt-6 mb-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

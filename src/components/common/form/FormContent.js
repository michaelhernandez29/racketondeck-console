import PropTypes from 'prop-types';

/**
 * A component that wraps form content inside a styled container.
 *
 * @param {Object} props - The properties for the form content component.
 * @param {React.ReactNode} props.children - The form content to be displayed inside the container.
 * @returns {JSX.Element} The rendered form content component.
 */
function FormContent({ children }) {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}

FormContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormContent;

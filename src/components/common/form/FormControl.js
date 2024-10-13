import PropTypes from 'prop-types';

/**
 * A component that wraps individual form controls inside a styled container.
 *
 * @param {Object} props - The properties for the form control component.
 * @param {React.ReactNode} props.children - The form controls to be displayed inside the container.
 * @returns {JSX.Element} The rendered form control component.
 */
function FormControl({ children }) {
  return <div className="space-y-1 mb-4">{children}</div>;
}

FormControl.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormControl;

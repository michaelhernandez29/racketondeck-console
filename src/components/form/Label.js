import PropTypes from 'prop-types';

/**
 * A label component for form elements, associating the label with a form control.
 *
 * @param {Object} props - The properties for the label component.
 * @param {string} props.htmlFor - The id of the form control that the label is associated with.
 * @param {React.ReactNode} props.children - The content inside the label (usually text).
 * @returns {JSX.Element} The rendered label component.
 */
function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Label;

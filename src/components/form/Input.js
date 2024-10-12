import PropTypes from 'prop-types';

/**
 * An input component for forms, handling various input types.
 *
 * @param {Object} props - The properties for the input component.
 * @param {string} props.id - The unique identifier for the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.type - The type of input (e.g., text, email, password).
 * @param {string} props.value - The current value of the input field.
 * @param {function} props.onChange - The function to handle changes in the input field.
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {boolean} [props.required] - Whether the input is required or not.
 * @returns {JSX.Element} The rendered input component.
 */
function Input({ id, name, type, value, onChange, placeholder, required }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder ?? ''}
      required={required}
      className="text-sm w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
    />
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;

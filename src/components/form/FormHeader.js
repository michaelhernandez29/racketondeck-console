import PropTypes from 'prop-types';

/**
 * A header component for forms, displaying a title and a subtitle.
 *
 * @param {Object} props - The properties for the form header component.
 * @param {string} props.title - The main title to be displayed.
 * @param {string} [props.subtitle] - The optional subtitle to be displayed.
 * @returns {JSX.Element} The rendered form header component.
 */
function FormHeader({ title, subtitle }) {
  return (
    <header className="space-y-2 text-center">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
        {title}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
    </header>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default FormHeader;

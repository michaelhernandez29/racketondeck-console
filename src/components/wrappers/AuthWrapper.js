import PropTypes from 'prop-types';

import FormHeader from '../form/FormHeader';

/**
 * A wrapper component for authentication-related pages, displaying a title, subtitle, and content.
 *
 * @param {Object} props - The properties for the AuthWrapper component.
 * @param {string} props.title - The main title for the authentication page.
 * @param {string} [props.subtitle] - The optional subtitle for the authentication page.
 * @param {React.ReactNode} props.children - The content to be displayed inside the wrapper.
 * @returns {JSX.Element} The rendered AuthWrapper component.
 */
function AuthWrapper({ title, subtitle, children }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-md mx-auto space-y-8">
      <FormHeader title={title} subtitle={subtitle} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
    </main>
  );
}

AuthWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AuthWrapper;

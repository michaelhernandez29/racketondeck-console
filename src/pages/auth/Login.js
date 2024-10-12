import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { StatusCodes } from 'http-status-codes';
import AuthService from '../../api/services/AuthService';
import Button from '../../components/button/Button';
import FormControl from '../../components/form/FormControl';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import AuthWrapper from '../../components/wrappers/AuthWrapper';

/**
 * The login form component for user authentication.
 *
 * @returns {JSX.Element} The rendered login form component.
 */
function Login() {
  const [dataForm, setDataForm] = useState({ email: '', password: '' });

  /**
   * Handles input changes and updates the form data.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   */
  const handleChange = (e) => {
    e.preventDefault();

    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handles form submission.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   * @returns {Promise<void>} A promise that resolves when the form is submitted.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await AuthService.login(dataForm);
    if (response.statusCode !== StatusCodes.OK) {
      toast.error(response.message);
      return;
    }

    toast.success('Logged successfully!');
  };

  return (
    <AuthWrapper title="Welcome Back!" subtitle="Login to manage your academy">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="m@example.com"
            required
          />
        </FormControl>

        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={dataForm.password}
            onChange={handleChange}
            required
          />
        </FormControl>

        <Button type="submit">Login</Button>
      </form>

      <div className="mt-4 text-center text-sm">
        <p>
          Not have an account?
          <Link to="/register" className="ml-1 text-blue-600">
            Create one
          </Link>
        </p>
      </div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} theme="colored" />
    </AuthWrapper>
  );
}

export default Login;

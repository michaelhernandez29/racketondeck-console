import { StatusCodes } from 'http-status-codes';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import AccountService from '../../api/services/AccountService';

import Button from '../../components/common/button/Button';
import FormControl from '../../components/common/form/FormControl';
import Input from '../../components/common/form/Input';
import Label from '../../components/common/form/Label';
import AuthWrapper from '../../components/wrappers/AuthWrapper';

/**
 * The registration form component for RacketOnDeck, allowing users to register their academy.
 *
 * @returns {JSX.Element} The rendered registration form component.
 */
function Register() {
  const [dataForm, setDataForm] = useState({ name: '', email: '', password: '' });

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

    const response = await AccountService.create(dataForm);
    if (response.statusCode !== StatusCodes.CREATED) {
      toast.error(response.message);
      return;
    }

    toast.success('Account created successfully!');
  };

  return (
    <AuthWrapper title="RacketOnDeck" subtitle="Register your academy and start managing your sports facility">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={dataForm.name}
            onChange={handleChange}
            placeholder="Your Academy Name"
            required
          />
        </FormControl>

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

        <Button type="submit">Create account</Button>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} theme="colored" />

      <div className="mt-4 text-center text-sm">
        <p className="mb-4">
          Already have an account?
          <Link to="/login" className="ml-1 text-blue-600 ">
            Login
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
}

export default Register;

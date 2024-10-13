import Button from '../common/button/Button';
import Label from '../common/Divider';
import FormControl from '../common/form/FormControl';
import Input from '../common/form/Input';

/**
 * UserModal component for creating a new user.
 *
 * This modal displays a form to input user information such as name.
 * It includes fields for the user data and can be used as part of a larger user management system.
 *
 * @returns {JSX.Element} The rendered modal with a form to create a new user.
 */
function UserModal() {
  return (
    <section className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center" role="dialog">
      <article className="bg-white rounded-sm w-1/3 py-8 px-4 shadow sm:px-10">
        <form>
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="name" required />
          </FormControl>

          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </FormControl>

          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </FormControl>

          <FormControl>
            <Label htmlFor="type">Type</Label>
            <Input id="type" name="type" type="type" required />
          </FormControl>

          <FormControl>
            <Label htmlFor="phoneNumber">Phone</Label>
            <Input id="phoneNumber" name="phoneNumber" type="number" required />
          </FormControl>

          <Button type="submit">Create user</Button>
        </form>
      </article>
    </section>
  );
}

export default UserModal;

import Button from '../../components/button/Button';
import FormControl from '../../components/form/FormControl';
import Input from '../../components/form/Input';
import Label from '../../components/form/Label';
import AuthWrapper from '../../components/wrappers/AuthWrapper';

/**
 * The registration form component for RacketOnDeck, allowing users to register their academy.
 *
 * @returns {JSX.Element} The rendered registration form component.
 */
function Register() {
  return (
    <AuthWrapper title="RacketOnDeck" subtitle="Register your academy and start managing your sports facility">
      <form>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your Academy Name" required />
        </FormControl>

        <FormControl>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </FormControl>

        <FormControl>
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </FormControl>
      </form>
      <Button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3 rounded-md transition-all duration-300"
      >
        Crear cuenta
      </Button>

      <div className="mt-4 text-center">
        <a href="/login" className="text-sm text-blue-600 hover:underline">
          ¿Ya tienes cuenta? Inicia sesión
        </a>
      </div>
    </AuthWrapper>
  );
}

export default Register;

import FormHeader from '../form/FormHeader';

function AuthWrapper({ title, subtitle, children }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-md mx-auto space-y-8">
      <FormHeader title={title} subtitle={subtitle} />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">{children}</div>
    </main>
  );
}

export default AuthWrapper;

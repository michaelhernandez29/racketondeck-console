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

export default FormHeader;

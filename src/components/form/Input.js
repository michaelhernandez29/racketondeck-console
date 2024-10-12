function Input({ id, name, type, placeholder, required }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder ?? ''}
      required={required}
      className="text-sm w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 transition-all duration-300 ease-in-out bg-white text-gray-700 placeholder-gray-400 focus:outline-none"
    />
  );
}

export default Input;

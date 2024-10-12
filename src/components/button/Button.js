function Button({ type, children }) {
  return (
    <button
      className="font-medium w-full shadow-sm text-sm flex justify-center rounded-sm py-2 px-4 mt-6 mb-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;

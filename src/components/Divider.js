function Divider({ text }) {
  return (
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="bg-background px-2 text-muted-foreground text-gray-500 dark:text-gray-400">{text}</span>
      </div>
    </div>
  );
}

export default Divider;

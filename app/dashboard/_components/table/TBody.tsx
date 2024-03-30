const TBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <tbody
      className="
    bg-white 
    divide-y 
    divide-gray-100 
    dark:divide-gray-700 
    text-gray-800 
    dark:text-gray-400 
    dark:bg-gray-900"
    >
      {children}
    </tbody>
  );
};

export default TBody;

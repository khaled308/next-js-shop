const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
      {title}
    </h1>
  );
};

export default Heading;

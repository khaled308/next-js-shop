import { CiSearch } from "react-icons/ci";

export const Search = () => {
  return (
    <div className="hidden relative md:flex items-center">
      <input
        type="text"
        className="py-1 px-2 rounded"
        placeholder="Find Your Product"
      />
      <button className="absolute right-2 text-xl">
        <CiSearch />
      </button>
    </div>
  );
};

// src/components/SearchBar.jsx

const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="max-w-md mx-auto mb-6 ">
      <input
        type="text"
        placeholder="Search by title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-center mt-3">
        <button
          onClick={onSearch}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

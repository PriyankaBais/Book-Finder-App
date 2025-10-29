import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    // **CHANGED:** Made search bar wider
    <form onSubmit={handleSubmit} className="flex justify-center mb-8 relative w-full max-w-2xl mx-auto">
      
      <div className="absolute left-3 top-0 h-full flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e.g., The Lord of the Rings"
        // **CHANGED:** Reduced vertical padding from 'py-3' to 'py-2.5'
        className="w-full px-4 py-2.5 pl-10 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button
        type="submit"
        // **CHANGED:** Reduced vertical padding from 'py-3' to 'py-2.5'
        className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium px-6 py-2.5 rounded-r-md hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

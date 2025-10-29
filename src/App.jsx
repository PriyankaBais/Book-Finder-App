import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchBooks = async (query) => {
    if (!query) return;
    setHasSearched(true);
    setIsLoading(true);
    setError(null);
    setBooks([]);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data.docs);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // **CHANGED:** A flat, clean background color
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8"> 
      {/* **CHANGED:** Widened container to fit more cards */}
      <div className="max-w-7xl mx-auto">
        
        {/* **CHANGED:** Reduced title size and margin */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          📚 Open Library Book Finder
        </h1>
        
        <SearchBar onSearch={fetchBooks} />
        
        <BookList 
          books={books} 
          isLoading={isLoading} 
          error={error} 
          hasSearched={hasSearched} 
        />
      </div>
    </div>
  );
}

export default App;

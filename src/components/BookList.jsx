import BookCard from './BookCard';

function BookList({ books, isLoading, error, hasSearched }) {

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-16 text-gray-500">
        {/* **CHANGED:** Slightly smaller spinner */}
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-base">Searching for books...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-16 p-6 bg-red-50 text-red-700 rounded-lg shadow-sm">
        {/* **CHANGED:** Smaller icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto text-red-400 mb-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126Z" />
        </svg>
        {/* **CHANGED:** Smaller text */}
        <p className="font-semibold text-lg">Oops! Something went wrong.</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (hasSearched && books.length === 0) {
    return (
      <div className="text-center mt-16 p-6 text-gray-500">
        {/* **CHANGED:** Smaller icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400 mb-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        {/* **CHANGED:** Smaller text */}
        <p className="text-xl font-semibold">No books found.</p>
        <p className="text-base">Please try a different search term.</p>
      </div>
    );
  }

  if (!hasSearched) {
     return (
      <div className="text-center mt-16 p-6 text-gray-400">
        {/* **CHANGED:** Smaller icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
        </svg>
        {/* **CHANGED:** Smaller text */}
        <p className="text-xl font-semibold">Welcome!</p>
        <p className="text-base">Type a book title above to start your search.</p>
      </div>
    );
  }

  return (
    // **CHANGED:** More columns and a smaller gap for a tighter grid
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-8">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

export default BookList;
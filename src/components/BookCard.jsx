function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/180x280.png?text=No+Cover';

  return (
    // **CHANGED:** // 1. Subtler 'shadow' and faster 'duration-200'
    // 2. A more subtle 'hover:scale-[1.02]'
    <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden flex flex-col
                    transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg">
      
      {/* **CHANGED:** Reduced image height from 'h-64' to 'h-52' */}
      <img 
        src={coverUrl} 
        alt={book.title} 
        className="w-full h-52 object-cover" 
      />
      
      {/* **CHANGED:** Reduced padding from 'p-5' to 'p-4' */}
      <div className="p-4 flex flex-col flex-grow">
        {/* **CHANGED:** Reduced text size from 'text-lg' to 'text-base' and 'font-bold' to 'font-semibold' */}
        <h3 
          className="font-semibold text-base text-gray-900 truncate" 
          title={book.title}
        >
          {book.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-1">
          {book.author_name ? book.author_name[0] : 'Unknown Author'}
        </p>
        
        {/* **CHANGED:** Added 'mt-auto' to ensure it's always at the bottom */}
        <p className="text-xs text-gray-500 mt-auto pt-2">
          First published: {book.first_publish_year || 'N/A'}
        </p>
      </div>
    </div>
  );
}

export default BookCard;
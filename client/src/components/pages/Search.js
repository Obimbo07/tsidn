import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [websiteContent, setWebsiteContent] = useState('');

//   useEffect(() => {
//     // Fetch website content on component mount
//     fetch('https://example.com/content.html')
//       .then(response => response.text())
//       .then(content => setWebsiteContent(content));
//   }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const searchRegex = new RegExp(searchTerm, 'gi');
    const matches = websiteContent.match(searchRegex);

    setSearchResults(matches || []);
  };

  const renderSearchResults = () => {
    if (!searchResults.length) {
      return <p className="error-text">No results found.</p>;
    }

    return searchResults.map((result) => (
      <p key={result}>
        {result}
      </p>
    ));
  };

  return (
    <div>
      <form className="search" onSubmit={handleSearchSubmit}>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && <h3>Results</h3>}
      {renderSearchResults()}
    </div>
  );
};

export default Search;

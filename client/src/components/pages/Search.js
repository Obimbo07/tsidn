import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react';


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [websiteContent, setWebsiteContent] = useState('');
  let websiteContent;

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
    // if (!searchResults.length) {
    //   return <p className="error-text">No results found.</p>;
    // }

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
          id="search-input"
          placeholder="Search here..."
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button class="searchbtn" type="submit">
        <FontAwesomeIcon icon={faSearchengin} />
        </button>
      </form>
      {searchResults.length > 0 && <h3>Results</h3>}
      {renderSearchResults()}
    </div>
  );
};

export default Search;

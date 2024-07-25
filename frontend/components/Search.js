import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Search(){
    const [searchTerm, setsearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState('');

    let websiteContent;

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
    
        const searchRegex = new RegExp(searchTerm, 'gi');
        const matches = websiteContent.match(searchRegex);
    
        setSearchResults(matches || []);
    };

    // const renderSearchResults = () => {
    //     // if (!searchResults.length) {
    //     //   return <p className="error-text">No results found.</p>;
    //     // }
    
    //     return searchResults.map((result) => (
    //       <p key={result}>
    //         {result}
    //       </p>
    //     ));
    // };

    return (
        <>
            <form className="p-2 h-fit border-solid bg-blue-800 rounded-lg w-fit" onSubmit={handleSearchSubmit}>
                <input
                  id="search-input"
                  placeholder="Search here.."
                  type="text"
                  value={searchTerm}
                  onchange={handleInputChange}
                />
                <button className="p-2" type="submit">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
            {/* {searchResults.length > 0 && <h3>Results</h3>}
            {renderSearchResults()} */}
        </>
    )
}
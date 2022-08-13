import React from 'react'

function Search({ setCountries, Country }) {
  const handleSearch = (e) => {
    setCountries({data: Country.data.filter((listOfCountries) => (
      listOfCountries.name.toLowerCase().includes(e.target.value.toLowerCase())
      ))});
  };

  return (
    <div className="search">
      <input className="searchFiled" onChange={handleSearch} placeholder='Search....' />
    
    </div>
  );
}
export default Search

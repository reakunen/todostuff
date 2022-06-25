import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({handleSearchNote}) => {
  return (
    <div className='searchcon'>
        <div className='search'>
            <input className='search-input' type="text" placeholder='Type to search...' 
              onChange={(e) => {handleSearchNote(e.target.value.toLowerCase())}}/>
            <SearchIcon className='search-icon' style={{fontSize:32}}/>
        </div>
    </div>
  )
}

export default Search
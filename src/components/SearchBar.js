import React from 'react'

const SearchBar = (props) => {
  // console.log(props)

  return (
    <div>
      <h1>{props.searchTitle}</h1>
      <label>
        Search Trains:
        <input id="input" type="text" onChange={props.searchMethod} />
      </label>
    </div>
  )
}

export default SearchBar

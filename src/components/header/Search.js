import React from 'react'
// import { AiOutlineSearch } from 'react-icons/ai'
import './Search.css'


const Search = (props) => {

    return (
        <div id="search-factor">
        <input onChange = {props.search} value ={props.value} type="search" name="Search" placeholder="Search items" className="search"/>
        </div>
    )
}

export default Search

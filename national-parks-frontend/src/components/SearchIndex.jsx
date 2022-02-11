import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import StateList from '../util/StateList'


function SearchIndex() {
    const [state, setState] = useState("AL")

    const handleChange = (e) => {
        const searchedState = e.target.value 
        setState(searchedState)
    }

    return (
        <div>
            <h1>Homepage</h1>
            <h4>Enter a state</h4>
            <form className="header__form">
                <select onChange={handleChange}>
                    <StateList />
                </select>
                <Link to={`/parks/` + state}>
                    <button>Find parks</button>
                </Link>
            </form>
        </div>
    )
}

export default SearchIndex
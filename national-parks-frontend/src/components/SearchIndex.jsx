import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchIndex() {
    const [state, setState] = useState("")

    const handleChange = (e) => {
        const searchedState = e.target.value 
        setState(searchedState)
    }

    return (
        <div>
            <h1>Homepage</h1>
            <h4>Enter a state</h4>
            <form className="header__form">
                <input
                    className="form__input-text"
                    name="name"
                    placeholder="search by state"
                    value={state}
                    onChange={handleChange}
                />
                <Link to={`/parks/` + state}>
                    <button>Find parks</button>
                </Link>
            </form>
        </div>
    )
}

export default SearchIndex
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
        <div className='search-page home'>
            <div className='search-page-container'>
                <div className='search-container'>
                    <div className='search-box'>
                        <h1>National Parks</h1>
                        <p>by Sam Cowing</p>
                        <h4>
                            Explore Nationation Parks within the U.S. by selecting a state in which to start exploring below. All park data is provided by the NPS.
                        </h4>
                        <h6>Enter a state</h6>
                        <form className="header__form">
                            <select onChange={handleChange} placeholder="Select A State">
                                <StateList />
                            </select>
                            <Link to={`/parks/` + state}>
                                <button>Find parks</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchIndex
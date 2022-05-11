import { useParams, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import stateAbbr from '../util/stateAbbr';
import '../util/images.css';
import '../styles/parkListCards.css';

function ParksList() {
    const [parks, setParks] = useState([]);
    const { stateCode } = useParams()
    
    const handleFetch = async () => {
        try {
            const key = process.env.REACT_APP_API_KEY
            const URL = `https://developer.nps.gov/api/v1/parks?api_key=${key}&stateCode=${stateCode}`
            const resp = await fetch(URL)
            const parkData = await resp.json()
            const foundParks = await parkData.data
            setParks(foundParks)
        } catch (err) {
            console.log(err)
        }
    }

    const state = () => {
        return Object.keys(stateAbbr).filter(state => state.includes(stateCode)).reduce((cur, key) => { return Object.assign(stateAbbr[key] )}, {});
    }
    const stateName = JSON.stringify(state())

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div className={stateCode + " listBackground"}>
            <div className='page-container'>
                <div className='state-container'>
                    <h5>
                        {stateName.replaceAll('"',"")}
                    </h5>
                </div>
                <div className='list-container'>
                    <div className='row g-4'>
                        <div className='col'>
                            <div className='card-columns'>
                                {parks.map((data, index) => {
                                    return (
                                        <div key={data.parkCode} className='card border-0 list-page-card'>
                                            <div>
                                                <Link to={`/park/` + data.parkCode}>
                                                <div className='card-img-container'>
                                                    <img className='card-img-top' alt="" src={data.images[0].url} />
                                                </div>
                                                <div className='card-body flex-fill'>
                                                    <div className='card-title'>
                                                        <h4>
                                                            {data.fullName}
                                                        </h4>
                                                    </div>
                                                    <p className='card-text'>
                                                        {data.description}
                                                    </p>
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParksList
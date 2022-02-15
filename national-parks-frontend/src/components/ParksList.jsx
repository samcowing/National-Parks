import { useParams, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './images.css';

function ParksList() {
    const [parks, setParks] = useState([]);
    const { stateCode } = useParams()
    
    const handleFetch = async () => {
        try {
            const URL = "https://developer.nps.gov/api/v1/parks?api_key=9SQb1si6TjCRdRJDP7Q90kRhHmVbs0rhSMDU0p0Q&stateCode=" + stateCode
            const resp = await fetch(URL)
            const parkData = await resp.json()
            const foundParks = await parkData.data
            setParks(foundParks)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])

    return (
        <div className={stateCode + " listBackground"}>
            <div className='page-container'>
                <div className='list-container'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        {parks.map(data => {
                            return (
                                <div className='col'>
                                    <div className='card'>
                                        <div key={data.parkCode}>
                                            <div className='card-img-container'>
                                                <img className='card-img-top' src={data.images[0].url} />
                                            </div>
                                            <div className='card-body'>
                                                <div className='card-title'>
                                                <Link to={`/park/` + data.parkCode}>
                                                    {data.fullName}
                                                </Link>
                                                </div>
                                            <p className='card-text'>
                                                {data.description}
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParksList
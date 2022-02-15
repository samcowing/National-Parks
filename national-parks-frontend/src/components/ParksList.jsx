import { useParams, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import '../util/images.css';

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
                    <div className='row g-4'>
                        <div className='col'>
                            <div className='card-columns'>
                                {parks.map((data, index) => {
                                    return (
                                        <div className='card border-0'>
                                            <div key={data.parkCode}>
                                                <Link to={`/park/` + data.parkCode}>
                                                <div className='card-img-container'>
                                                    <img className='card-img-top' src={data.images[0].url} />
                                                </div>
                                                <div className='card-body'>
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
                                                <div class="card-footer">
                                                    <div>
                                                        {data.activities.map(activity => 
                                                            <span className='btn'>
                                                                {activity.name}
                                                            </span>
                                                        )}
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
            </div>
        </div>
    )
}

export default ParksList
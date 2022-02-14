import { useParams, Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ParkActivities from './ParkActivities'

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

    let image = ".util/state-images/" + stateCode + ".jpg"
    let imagetest = "../util/state-images/NY.jpg"

    return (
        <div>
            <h1>Parks List</h1>
            <div>
                <select>  
                    <ParkActivities parks = {parks}/>
                </select>
            </div>
            <div>
                <img src={imagetest} />
            </div>
            <div>
                {parks.map(data => {
                    return (
                        <div key={data.parkCode}>
                            <Link to={`/park/` + data.parkCode}>
                                {data.fullName}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ParksList
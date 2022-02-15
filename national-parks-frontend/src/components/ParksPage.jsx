import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import initialState from '../util/initialData';
import { map } from 'jquery';

function ParksPage() {
    
    const [park, setPark] = useState(initialState);
    const { parkCode } = useParams()

    const handleFetch = async () => {
        try {
            const URL = "https://developer.nps.gov/api/v1/parks?api_key=9SQb1si6TjCRdRJDP7Q90kRhHmVbs0rhSMDU0p0Q&parkCode=" + parkCode
            const resp = await fetch(URL)
            const parkData = await resp.json()
            const foundPark = await parkData.data[0]
            setPark(foundPark)
            console.log(foundPark)
        } catch (err) {
            console.log(err)
        }
    }

    console.log(park)

    useEffect(() => {
        handleFetch()
    }, [])
    
    return (
        <div>
            <div className='page-container'>
                <div className='jumbotron-fluid'>
                    <h1 className='display-4'>{park.fullName}</h1>
                    <p className='lead'>
                        {park.description}
                    </p>
                    <hr/>
                </div>
                <div className='activities-container'>
                    <h4>Activities</h4>
                    <ul className='list-group list-group-horizontal flex-wrap'>
                        {park.activities.map(activity =>
                            <li className="list-group-item flex-fill">
                                {activity.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='topics-container'>
                    <h4>Topics</h4>
                    <ul className='list-group list-group-horizontal flex-wrap'>
                        {park.topics.map(topic =>
                            <li className="list-group-item flex-fill">
                                {topic.name}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='weather-container'>
                    <div className='card'>
                        <div className='card-header'>
                            Weather
                        </div>
                        <div className='card-body'>
                            <h6>
                                {park.weatherInfo}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='directions-container'>
                    <div className='card'>
                        <div className='card-header'>
                            Directions
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                {park.directionsInfo}
                            </h5>
                            <h6>
                                {park.addresses[0].line1},  
                                {park.addresses[0].city}, 
                                {park.addresses[0].stateCode}, 
                                {park.addresses[0].postalCode} 

                            </h6>
                            <a href={park.directionsUrl}>
                                {park.directionsUrl}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='contacts-container'>
                    <div className='card'>
                        <div className='card-header'>
                            Contact
                        </div>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Phone: {park.contacts.phoneNumbers[0].phoneNumber}
                            </h5>
                            <h5 className='card-title'>
                                Email: {park.contacts.emailAddresses[0].emailAddress}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParksPage
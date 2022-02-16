import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import initialState from '../util/initialData';
import uuid from 'react-uuid'

function ParksPage() {
    const [park, setPark] = useState(initialState);
    const { parkCode } = useParams()

    const handleFetch = async () => {
        try {
            const key = process.env.REACT_APP_API_KEY
            const URL = `https://developer.nps.gov/api/v1/parks?api_key=${key}&parkCode=${parkCode}`
            const resp = await fetch(URL)
            const parkData = await resp.json()
            const foundPark = await parkData.data[0]
            setPark(foundPark)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleFetch()
    }, [])
    
    return (
        <div>
            <div className='page-container detail-container'>
                <div className='jumbotron-fluid'>
                    <h1 className='display-4'>{park.fullName}</h1>
                    <p className='lead'>
                        {park.description}
                    </p>
                    <hr/>
                </div>
                <div className='left-side col-3'>
                    <div className='activities-container card'>
                        <div className="card-header">
                            Activities
                        </div>
                        <ul className='list-group'>
                            {park.activities.map(activity =>
                                <li key={activity.id} className="list-group-item flex-fill">
                                    {activity.name}
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='topics-container card'>
                        <div className="card-header">
                            Topics
                        </div>
                        <ul className='list-group'>
                            {park.topics.map(topic =>
                                <li key={topic.id} className="list-group-item flex-fill">
                                    {topic.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='right-side col-9'>
                    <div className='weather-container'>
                        <div className='card detail-page-card'>
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
                        <div className='card detail-page-card'>
                            <div className='card-header'>
                                Directions
                            </div>
                            <div className='card-body'>
                                <h6 className='card-title'>
                                    {park.directionsInfo}
                                </h6>
                                <hr/>
                                <h5>
                                    {park.addresses[0].line1},<br/> 
                                    {park.addresses[0].city},<br/>
                                    {park.addresses[0].stateCode},&nbsp;
                                    {park.addresses[0].postalCode} 

                                </h5>
                                <hr/>
                                <a href={park.directionsUrl}>
                                    {park.directionsUrl}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='contacts-container'>
                        <div className='card detail-page-card'>
                            <div className='card-header'>
                                Contact
                            </div>
                            <div className='card-body'>
                                <h6 className='card-title'>
                                    Phone: {park.contacts.phoneNumbers[0].phoneNumber}
                                </h6>
                                <h6 className='card-title'>
                                    Email: {park.contacts.emailAddresses[0].emailAddress}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className='row g-4'>
                        <div className='col'>
                            <div className='card-columns'>
                                {park.images.map((data, index) => {
                                    return (
                                        <div key={uuid()} className='card border-0 list-page-card'>
                                            <div>
                                                <div className='card-img-container'>
                                                    <img className='card-img-top' alt={data.altText} src={data.url} />
                                                </div>
                                                <div className='card-body flex-fill'>
                                                    <div className='card-title'>
                                                        <h4>
                                                            {data.title}
                                                        </h4>
                                                    </div>
                                                    <p className='card-text'>
                                                        {data.caption} <br/>
                                                        <small className="text-muted">
                                                            &#8212;&nbsp;{data.credit}
                                                        </small>
                                                    </p>
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

export default ParksPage
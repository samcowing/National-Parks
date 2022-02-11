import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function ParksPage() {
    const [park, setPark] = useState([]);
    const { parkCode } = useParams()

    const handleFetch = async () => {
        try {
            const URL = "https://developer.nps.gov/api/v1/parks?api_key=9SQb1si6TjCRdRJDP7Q90kRhHmVbs0rhSMDU0p0Q&parkCode=" + parkCode
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
            <h1>{park.fullName}</h1>
        </div>
    )
}

export default ParksPage
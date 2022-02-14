import React, { useEffect, useState } from 'react'

function ParkActivities(props) {
    let initialState = []
    const [activities, setActivities] = useState(initialState)
    const [uniqueActivities, setUniqueActivities] = useState([])

    let testActivities = [{id:1, name:1}, {id:1, name:1}, {id:2, name:2}]

    //console.log(activities)
    //getActivities()
    

    const testmap = async() => {
        const allActivities = props.parks.map((park) => {
            park.activities.map((activity) => {
                initialState.push(activity)
            })
        }).then((resolve) => {
            const updatedActivities = initialState.filter((value, index, self) =>
            index === self.findIndex((activity) => (
                activity.id === value.id 
            ))
        )
        }
            
        )
        console.log(allActivities)
        const updatedActivities = initialState.filter((value, index, self) =>
            index === self.findIndex((activity) => (
                activity.id === value.id 
            ))
        )
        //setActivities(activityArr)
        //console.log(updatedActivities)
    }

    console.log(testmap())

    //console.log(activities
    
    
    //console.log(activityList)

    //let activityList = <option value="KS">Kansas</option>


    //console.log(activities.sort())

    /*
    parkActivityList.map(data => {
        //console.log(data)
        if(!uniqueActivities.includes(data.id)) {
            let updatedUA = uniqueActivities.push(data.id)
            //let updatedActivities = activities.push(data)
            //console.log(data.name)
            //console.log(data.id)
            props.setUniqueActivities(updatedUA)
        }
    })

    console.log(activities)
    console.log(uniqueActivities)
    */
   
    //console.log(props.parks.map(data => {data.activities.map(checkActivity)}))

    return (
        <>
           {activities.map(activity => {
               <option value={activity.id}>{activity.name}</option>
           })}
        </>
    )
}

export default ParkActivities

//<option value={data[index].id}>{data[index].name}</option>
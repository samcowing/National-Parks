const initialState = {
    fullName: "",
    description: "",
    activities: [
        {
            id: "",
            name: "",
        }
    ],
    topics: [
        {
            id: "",
            name: "",
        }
    ],
    weatherInfo: "",
    entranceFees: [
        {
            cost: "",
            description: "",
            title: "",
        }
    ],
    entrancePasses: [
        {
            cost: "",
            description: "",
            title: "",
        }
    ],
    directionsInfo: "",
    directionsUrl: "",
    addresses: [
        {
            postalCode: "",
            city: "",
            stateCode: "",
            line1: "",
        }
    ],
    operatingHours: [
        {   
            exceptions: [
                {
                    name: ""
                }
            ],
            description: "",
            standardHours: {
                sunday: "",
                monday: "",
                tuesday: "",
                wednesday: "",
                thursday: "",
                friday: "",
                saturday: ""
            }
        }
    ],
    images: [
        {
            credit: "",
            title: "",
            altText: "",
            caption: "",
            url: "",
        }
    ],
    contacts: {
        phoneNumbers: [
            {
                phoneNumber: "",
                description: "",
                extension: "",
                type: ""
            }
        ],
        emailAddresses: [
            {
                description: "",
                emailAddress: ""
            }
        ]
    }

}

export default initialState
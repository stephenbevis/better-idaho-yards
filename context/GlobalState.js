import React, { createContext, useReducer } from "react"

// App Reducer
import AppReducer from "./AppReducer"

// Initial State
const initialState = {
    currentService: {},
    services: [
        {
            icon: 'icon',
            image: '../services/lawn-mowing.jpg',
            title: 'Lawn Mowing',
            description: "Transform your outdoor space into a pristine oasis with our expert lawn mowing service. Our skilled professionals will meticulously trim your grass, ensuring a uniform and healthy appearance. Say goodbye to the hassle of maintaining your lawn and hello to a lush, well-manicured yard that will be the envy of your neighborhood."
        },
        {
            icon: 'icon',
            image: '../services/snow-shoveling.jpg',
            title: 'Snow Removal',
            description: 'When winter blankets your property in a layer of snow, our prompt and efficient snow removal service is here to save the day. Our dedicated team will clear your driveways, sidewalks, and pathways, ensuring safe and accessible passage. With our reliable snow removal service, you can rest easy knowing that your property will be free from snow, allowing you to go about your daily routine without any inconvenience.'
        },
        {
            icon: 'icon',
            image: '../services/weed-removal.jpg',
            title: 'Weed Control',
            description: 'Take control of pesky weeds with our comprehensive weed control service. Our experienced technicians will identify and target unwanted weeds, employing effective techniques to eliminate them from your lawn and garden. We use environmentally-friendly methods that will protect your plants while eradicating the weeds, leaving you with a vibrant and weed-free outdoor space to enjoy. Say goodbye to the frustration of battling weeds and hello to a flourishing landscape that will enhance the beauty of your property.'
        },
        {
            icon: 'icon',
            image: '../services/fertilization.jpg',
            title: 'Fertilization',
            description: "Give your lawn the nourishment it deserves with our top-notch fertilization service. Our expert team will assess your soil's needs and apply the appropriate fertilizers to promote healthy growth and vibrant greenery. By delivering the essential nutrients your lawn craves, we ensure that it remains resilient against environmental stressors and maintains its lush appearance throughout the seasons. Trust our fertilization service to revitalize your lawn and elevate its overall health and beauty."
        },
        {
            icon: 'icon',
            image: '../services/gutter-cleaning.jpg',
            title: 'Gutter Cleaning',
            description: "Protect your property from water damage with our reliable gutter cleaning service. Our skilled technicians will meticulously remove debris, leaves, and buildup from your gutters, ensuring proper water flow and preventing clogs. By maintaining clean and functional gutters, you can safeguard your home's foundation, prevent water damage, and avoid costly repairs. Let us take care of your gutter cleaning needs, providing you with peace of mind and a well-maintained property."
        },
        {
            icon: 'icon',
            image: '../services/seeding.jpg',
            title: 'Seeding',
            description: 'Renew and rejuvenate your lawn with our professional seeding service. Whether you need to repair bare patches or enhance the overall density of your grass, our experts have you covered. We will select the most suitable seed blend for your specific needs, carefully prepare the soil, and evenly distribute the seeds for optimal germination. With our precise seeding techniques and high-quality seeds, you can expect a thicker, healthier, and more vibrant lawn that will make your outdoor space truly stand out.'
        }
    ],
    team: [
        {
            image: '../team/team1.jpg',
            firstname: 'Tate',
            lastname: 'Anderson',
            title: 'CEO'
        },
        {
            image: '../team/team2.jpg',
            firstname: 'Brett',
            lastname: 'Cooper',
            title: 'CEO'
        },
        {
            image: '../team/team3.jpg',
            firstname: 'Luke',
            lastname: 'Combs',
            title: 'CEO'
        },
        {
            image: '../team/team4.jpg',
            firstname: 'Don',
            lastname: 'Rucker',
            title: 'CEO'
        },
        {
            image: '../team/team5.jpg',
            firstname: 'Laura',
            lastname: 'Croft',
            title: 'CEO'
        },
        {
            image: '../team/team6.jpg',
            firstname: 'Adam',
            lastname: 'Warlock',
            title: 'CEO'
        }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const setCurrentService = (service) => {
        dispatch({
            type: 'SET_CURRENT_SERVICE',
            payload: service
        })
    }

    return (
        <GlobalContext.Provider value={{
            team: state.team,
            currentService: state.currentService,
            services: state.services,
            setCurrentService
        }}>{children}</GlobalContext.Provider>
    )
}
import React, { useContext } from 'react'

// Utilities
import toggleDrawer from '../utilities/toggleDrawer'

// Context
import { GlobalContext } from '../context/GlobalState'

const Services = () => {
    const { services, setCurrentService } = useContext(GlobalContext)

    const handleServiceClick = (service) => {
        setCurrentService(service)
        toggleDrawer()
    }

    return (
        <>
            <h2 className='text-3xl text-center mb-8'>What We Offer</h2>
            
            <div className="grid grid-cols-3 gap-5">
                {services && services.map(service => (
                    <div className='border px-5 py-3 cursor-pointer' onClick={e => handleServiceClick(service)}>
                        <p className='text-2xl text-center'>{service.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services
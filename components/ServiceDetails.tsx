import React, { useContext } from 'react'

// Icons
import { FaChevronLeft } from 'react-icons/fa'

// Utilities
import toggleDrawer from '../utilities/toggleDrawer'

// Context
import { GlobalContext } from '../context/GlobalState'

const ServiceDetails = () => {
    const { currentService } = useContext(GlobalContext)

    return (
        <>
            <div className="drawer-background" onClick={toggleDrawer}></div>
            <div className='drawer overflow-y-scroll'>
                <div className="px-7 pb-6">
                    <h2 className='text-2xl mb-1 sticky top-0 bg-white py-4'><FaChevronLeft className='inline-block border-r text-3xl mr-2 pr-4 cursor-pointer' onClick={toggleDrawer}>Back</FaChevronLeft> {currentService.title}</h2>
                    <p className='mb-5'>{currentService.description}</p>

                    {currentService.image && <img className='mb-10' src={currentService.image} alt="" />}

                    <h2 className='text-2xl mb-3'>We can help with your {currentService.title?.toLowerCase()} needs!</h2>
                    <p className='border bg-teal-600 text-white inline-block py-3 px-6 cursor-pointer'>Contact Us Today</p>
                </div>
            </div>
        </>
    )
}

export default ServiceDetails
import React from 'react'

// Components
import Container from '../components/Container'

const Hero = () => {
    return (
        <div className='relative h-80 bg-gradient-to-r from-teal-700 to-teal-800 mb-16'>
            <div className="hero-angled-bg"></div>
            
            <div className="flex items-center h-full hero-background-image">
                <Container classes='text-white grid grid-cols-2'>
                    <div>
                        <h2 className='text-4xl mb-3 drop-shadow-lg'>We make yards beautiful!</h2>
                        <p className='text-xl drop-shadow-lg'>Contact Us Today!</p>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Hero
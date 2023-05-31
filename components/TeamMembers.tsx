import React, { useContext } from 'react'

// Context
import { GlobalContext } from '../context/GlobalState'

// Components
import Container from './Container'

const TeamMembers = () => {
    const { team } = useContext(GlobalContext)

    return (
        <div className="bg-gradient-to-r from-teal-700 to-teal-800 text-white">
            <Container classes='pt-16 pb-20'>
                <h2 className='text-3xl text-center mb-8'>Meet The Team</h2>

                <div className="grid grid-cols-3 gap-5">
                    {team && team.map(member => (
                        <div className='bg-white p-3'>
                            <div className="h-80 bg-cover bg-center relative" style={{ backgroundImage: `url('${member.image}')` }} >
                                <div className="absolute bottom-0 left-0 py-2 px-8 text-black bg-teal-400 text-lg border-r border-t">{member.firstname}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default TeamMembers
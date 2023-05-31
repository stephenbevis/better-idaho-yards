import React from 'react'

// Utilities
import toggleDrawer from '../utilities/toggleDrawer'

const Drawer = () => {
    return (
        <>
            <div className="drawer-background" onClick={toggleDrawer}></div>
            <div className='drawer'></div>
        </>
    )
}

export default Drawer
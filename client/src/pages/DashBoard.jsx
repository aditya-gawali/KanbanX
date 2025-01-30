import React from 'react'
import Sidebar from '../components/Sidebar'
import NavbarD from '../components/NavbarD'
import Board from '../components/Board'

const DashBoard = () => {
    return (
        <>

            <div className="w-screen h-screen relative">
                <Sidebar/>
                <NavbarD/>
                <Board/>
            </div>
        </>
    )
}

export default DashBoard
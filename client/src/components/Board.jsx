import React from 'react'
import Columns from './Columns'
import Card from './Card'

const Board = () => {
    return (
        <>

            <div className="md:pl-[250px] pl-[60px] pr-[20px] pt-[70px] w-full h-full overflow-y-auto">
                <div className='w-[100vw] flex flex-row gap-2 min-h-full border mb-2 rounded-md shadow-sm p-3 justify-between'>
                    <Columns title="Backlog" color="green" cards = {<Card/>}/>
                    <Columns title="Pending" color="red" cards = {<Card/>}/>
                    <Columns title="To Do" cards = {<Card/>}/>
                    <Columns title="Doing" cards = {<Card/>}/>
                    <Columns title="Done" cards = {<Card/>}/>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Board
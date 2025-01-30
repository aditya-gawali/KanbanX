import React from 'react'

const Columns = ({title, cards, color}) => {
    return (
        <>
            <div className='w-[50%] h-full'>
                <div className={`bg-${!color ? "gray" : color}-200 rounded-md m-2 text-center p-2`}>
                    {title}
                </div>
                
                {
                    cards
                }

            </div>
        </>
    )
}

export default Columns
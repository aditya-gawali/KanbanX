import React, { useState } from 'react'

const Columns = ({ title, cards, color = "orange" }) => {

    const [bgColor, setBgColor] = useState(`bg-gray-200`)
    return (
        <>
            <div className='w-[50%] h-full'>
                <div className={`${bgColor} rounded-md m-2 text-center p-2`}>
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
import React from 'react'
import { useParams } from 'react-router-dom'
import Board from '../components/Board'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Boards = () => {

    const { id } = useParams()
    const [myBoard, setMyBoard] = useState(null)


    useEffect(() => {
        const fetchBoardDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/boards/${id}`)
                setMyBoard(response.data)
            } catch (error) {
                console.error('Error fetching board details:', error)
            }
        }

        if (id) {
            fetchBoardDetails()
        }
    }, [id])

    console.log(myBoard)

    return (
        <>
            {myBoard && <Board columns={myBoard.columns} />}
        </>
    )
}

export default Boards
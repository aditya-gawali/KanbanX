import React from 'react'
import Columns from './Columns'
import Card from './Card'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
const Board = ({ columns }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    const handleAddColumn = () => {
        setIsModalOpen(true);
    };

    const handleSaveColumn = () => {
        if (newColumnTitle) {
            columns.push({ title: newColumnTitle, cards: [] });
            setNewColumnTitle('');
            setIsModalOpen(false);
        }
    };

    return (
        <>
        <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Column</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    value={newColumnTitle}
                    onChange={(e) => setNewColumnTitle(e.target.value)}
                    placeholder="Column Title"
                    className="form-control"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSaveColumn}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>

            <div className='d-flex justify-between items-center px-2'>
                <h3>{}</h3>
                <Button onClick={handleAddColumn} className=" my-3">Add Column</Button>
            </div>
            
            <div className='mt-2 max-w-[100vw] flex flex-row gap-2 min-h-full  mb-2 p-3 justify-between'>

                {
                    columns.map((col) => {
                        return (
                            <Columns title={col.title} cards={<Card />} />
                        )
                    })
                }
                {/* <Columns title="Backlog" color="green" cards={<Card />} />
                <Columns title="Pending" color="red" cards={<Card />} />
                <Columns title="To Do" cards={<Card />} />
                <Columns title="Doing" cards={<Card />} />
                <Columns title="Done" cards={<Card />} /> */}

            </div>
        </>
    )
}

export default Board
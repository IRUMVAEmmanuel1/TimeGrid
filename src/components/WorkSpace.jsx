import React, { useState} from 'react'
import Modal from 'react-modal'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
Modal.setAppElement('#root')
function WorkSpace() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
       <div>
     {/* <Stack spacing={2} direction="row">
         <Button variant="contained">Contained</Button>
    </Stack> */}
                <button className="bg-blue-600 text-white mt-10 ml-10 p-4" onClick={() => setModalIsOpen(true)}>Create WorkSpace</button>
                <Modal isOpen={modalIsOpen} shouldCloseOverLayClick={false} onRequestClose = {() => setModalIsOpen(false)} style={
                    {
                        overlay: {
                            backgroundColor:'#006991'
                        },
                    }
                }> 
                <h2>Modal title</h2>
                <p>Modal Body</p>
                <div>
                   <button onClick={() => setModalIsOpen(false)}>Close </button>
                </div>
            </Modal>
        </div>
    )
}

export default WorkSpace

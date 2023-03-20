import React from 'react'
import { Modal } from 'react-bootstrap'

const Modals = ({Boady,show,handleClose}) => {
  return (
    <div style={{width:"100%"}}>
      <Modal show={show} onHide={handleClose}  className="l" centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className='l'>{Boady}</Modal.Body>
      </Modal>
    </div>
  )
}

export default Modals

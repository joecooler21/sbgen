import React from 'react'
import html2canvas from 'html2canvas'
import './Modal.css'

const Modal = ({ showModal, setShowModal, image }) => {

  const closeModal = () => {
    setShowModal(false)
  }
  return (<div>

   
    <div id="myModal" className="modal" style={{display:showModal ? 'block' : 'none'}}>
      <span className="close" onClick={closeModal}>&times;</span>
      <img className="modal-content" src={image} id="img01"></img>
      <div id="caption"></div>
    </div>


  </div>)



}

export default Modal

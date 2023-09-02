import Balloon from './components/Balloon'
import Modal from './components/Modal'
import { useState, useEffect} from 'react'
import { FaImage } from 'react-icons/fa'
import html2canvas from 'html2canvas'
import './App.css'

function App() {

  const menu = [{icon:<FaImage />}]
  const [image, setImage] = useState('test.jpg')
  const [prevImage, setPrevImage] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const buttonStyles = {
    position:'absolute',
    left:'25px',
    top:'25px',
  }

  const fileSelect = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const previewClick = () => {

    showModal ? setShowModal(false) : setShowModal(true)
    html2canvas(document.querySelector('#capture')).then(canvas=>{
      setPrevImage(canvas.toDataURL('img/jpg'))})

    
    
  }
  
  
  return (
    <div>
      <div>
        <input>
        </input>
        <button>Load URL</button>
        <input onChange={fileSelect} type='file' accept='.jpg, .png'></input>
      <button onClick={previewClick} style={{border:'1px solid black', width:'fit-content', cursor:'pointer'}}>Preview / Save</button>

        </div>

      
      <div style={{border: image ? '2px solid black' : 'none'}}>

      <div style={{overflow:'hidden'}}id='capture'>
      <img src={image}></img>
      <Balloon />
      </div>

    
    </div>

    <Modal showModal = {showModal} setShowModal={setShowModal} image={prevImage}/>
     </div>
     

  )
}

export default App

import { React, useState, useRef } from 'react'
import './Balloon.css'
import Draggable, { DraggableCore } from 'react-draggable';
import { FaRegCircle, FaRegSquare, FaPalette, FaPencilAlt, FaUndo, FaRandom, FaExpandArrowsAlt, FaSave } from 'react-icons/fa'

const Balloon = () => {

    const [border, setBorder] = useState(`255px 15px 255px 15px/15px 225px 15px 255px`)
    const [width, setWidth] = useState('fit-content')
    const [height, setHeight] = useState('fit-content')
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState('Hi there! Welcome to my speech balloon generator. Use the buttons below to customize this to your liking.')
    const [type, setType] = useState('rectangle')
    const [padding, setPadding] = useState('10px')
    const [position, setPosition] = useState({x:null, y:null})

    const balloonStyles = {
        position:'absolute',
        placeItems:'center',
        top:'150px',
        display: 'flex',
        maxWidth: '300px',
        border: '3px solid black',
        borderRadius: border,
        height: height,
        width: width,
        backgroundColor: 'white',
        cursor: 'pointer',
        fontFamily: 'animeReg',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: padding,
        caretColor: edit ? 'black' : 'transparent'
    }

    const buttonStyles = {
        margin: '5px',
        padding: '5px',
        cursor: 'pointer',
        border: '1px solid black',
        backgroundColor: 'white',
        borderRadius: '5px'
    }

    const textStyles = {
        outline: 'transparent',
        width: '300px',
        height: '100px',
        fontFamily: 'animeReg'
    }

    const randomizeBorderClick = () => {
        setBorder(`${Math.floor(Math.random() * 256)}px 15px ${Math.floor(Math.random() * 256)}px 15px/15px ${Math.floor(Math.random() * 256)}px 15px ${Math.floor(Math.random() * 256)}px`)
    }

    const setEditClick = () => {
        edit ? setEdit(false) : setEdit(true)
    }

    const textAreaChange = (e) => {
        setText(e.target.value)

    }

    const changeTypeClick = () => {
        if (type === 'oval') {
            setBorder('50%')
            setPadding('30px')
        }
        if (type === 'rectangle') {
            setBorder('255px 15px 255px 15px/15px 225px 15px 255px')
            setPadding('10px')
        }
        type === 'rectangle' ? setType('oval') : setType('rectangle')
    }

    const endDrag = (event, data) => {
        
    }

    const menu = [{ text: type === 'oval' ? <FaRegCircle /> : <FaRegSquare />, handler: changeTypeClick },
    { text: <FaPalette /> },
    { text: <FaExpandArrowsAlt /> },
    { text: edit ? <FaSave /> : <FaPencilAlt />, handler: setEditClick },
    { text: <FaRandom />, handler: randomizeBorderClick },
    { text: <FaUndo /> }]



    return (
        
            <div>
                <div style={{position:'absolute', top:'100px', left:'25px'}}>
                {menu.map((e, index) => {
                    return (<button key={index} onClick={e.handler} style={buttonStyles}>{e.text}</button>)
                })}
                </div>
                
              {edit ? <div style ={{...balloonStyles}}><textarea style={textStyles} onChange={textAreaChange}></textarea></div>:
              <Draggable onStop={endDrag} ><div style={balloonStyles}>{text}</div></Draggable>}
                
            </div>
    )
}

export default Balloon

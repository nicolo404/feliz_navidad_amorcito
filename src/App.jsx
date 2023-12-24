//import { Fragment } from "react"
//import React from "react"
import PropTypes from "prop-types"

const MyButton = (props) => {
    return <button>{props.text}</button>
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    edad: PropTypes.number
}

const MyUserOnline = () => {
    return <h1>Online</h1>    
}


const App = () => {
  const title = "React" 
  const classTitle = "text-center" 
  const pathImg = "https://picsum.photos/200"
  const user = true
  const frutas = ['🍎', '🍐', '🍊']
  return (
    <>
      <h1 className={classTitle}>Text Center {title.toLocaleUpperCase()}</h1>
      <img src={pathImg} alt=""/>
      <MyButton text = "boton 1" edad={10}/>
      <MyButton text = "boton 2" edad={10}/>
      <MyButton text = "boton 3" edad={10}/>
      {user ? <MyUserOnline/> : <h1>Offline</h1>}
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}-{index}</li>
        ))}
      </ul>
    </>
  )
}
export default App
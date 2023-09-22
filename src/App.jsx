import {useState} from 'react'
import './App.css'
import Gallery from './components/Gallery/Gallery'
import Form from './components/Form/Form'

function App() {
  const [isauth , setisauth] = useState(localStorage.getItem("auth") == 1)
  const loggin = (e) => {
    if (e || localStorage.getItem("auth") === "1")  setisauth(true)
  }


  return (
    <>
    {
      isauth ? 
      <Gallery auth={setisauth}/> :
      <Form FormData={loggin}/>

    }
    </>
  )
}

export default App

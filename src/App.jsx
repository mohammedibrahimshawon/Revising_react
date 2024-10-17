import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>count "i love you"</h1>
      <Todo ttask="learn"></Todo>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br /><br /><br />
        <person>i am a person</person>
        <Student>
        </Student>
        
     
      </div> */}
      
    </>
  )
}

function Person(){
  
  return <h3>i am ghoost</h3>
}

function Student(){
  return  (
    <div className='Student'>
      <h1>this is a student </h1>
      <p>name:</p>
      <p>roll:</p>
    </div>
  )
}

function Developer(){
  return(
    <div>

    </div>
  )
}
export default App

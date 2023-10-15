import styles from './index.module.css'
import sqlLogo from './assets/kitty.png'

import { useState } from 'react'

function App() {
  const [queryDesciption, setQueryDescription] = useState("")
  const onSubmit = (e) => { 
    e.preventDedault();
    console.log("form submitted: ", queryDesciption)
  }

  return (
    <main className = {styles.main}>
      <img src={sqlLogo} alt="" className = {styles.icon}/>
      <h3>Generate SQL with AI</h3>


      <form onSubmit={onSubmit}>
      <input type="text" 
        name = "Query-description"
        placeholder='Describe your query'
        onChange={(e) => setQueryDescription(e.target.value)}
      />
      <input type="submit" value = "Generate query"/>
      </form>
    </main>
  )
}

export default App

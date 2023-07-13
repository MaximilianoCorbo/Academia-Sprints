import './App.css'
import Header from './components/Header.jsx'
import Todo from './components/Todo.jsx'
import { useState } from 'react'



function App() {
  const [theme, setTheme] = useState("light")
  
  return (
      <div className ={`ThemeWrapper ${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
        <Todo theme={theme}/>

        <footer>
          <p>
            FullStack Developer Bootcamp <br/> 
            Programado por Maximiliano Corbo
          </p>
        </footer>
      </div>
    
  )
}

export default App

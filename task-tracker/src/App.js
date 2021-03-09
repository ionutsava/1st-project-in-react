import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/TasksTasks'
const App = () => {
  return (
    <div className="container">
     <Header />
     <Tasks />
    </div>
  )
}

export default App;

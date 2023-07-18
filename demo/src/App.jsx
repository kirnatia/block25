import { useState } from 'react'

import './App.css'
import { Button } from './components/Button'
import { Avatar } from './components/Avatar'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Natia",
    imageUrl: "https://www.shutterstock.com/image-photo/cute-monkey-lives-natural-forest-260nw-1039282306.jpg",
  })

  return (
    <>
      <div className="card">
        <h1> Hi, {user.name.split(' ')[0]}</h1>
        <Button count={count} setCount={setCount} />
     

      </div>
      <Avatar user= {user} />
    </>
  )
}

export default App


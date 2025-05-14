import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/jokes');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getJokes()
    return () => {
      setJokes([])
    }
  }, [])


  return (
    <>
      <h1>hello duck</h1>
      <h2>total jokes : {jokes.length}</h2>
      {jokes.map(joke => <div key={joke.id}>
        {joke.joke}
      </div>)}
    </>
  )
}

export default App

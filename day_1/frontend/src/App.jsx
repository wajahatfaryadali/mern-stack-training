import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes, setJokes] = useState([]);

  const getJokes = async () => {
    try {
      const response = await axios.get('/api/jokes');
      setJokes(response.data)
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
      <h1>****</h1>
      <h2>total jokes : {jokes.length}</h2>
      {jokes.map(joke => <div key={joke.id} style={{ display: 'flex', gap: '8px' }}>
        <div>
          {joke.id}:
        </div>
        <div>
          {joke.joke}
        </div>
      </div>)}
    </>
  )
}

export default App

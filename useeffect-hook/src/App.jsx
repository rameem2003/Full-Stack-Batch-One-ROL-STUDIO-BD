import React, { useEffect, useState } from 'react'
import Component from './Component'

const App = () => {
  const [todo, setTodo] = useState({})
  let [count, setCount]  = useState(0)
  let [countTwo, setCountTwo]  = useState(0)



  const fetchData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await res.json()

    // console.log(data);
    setTodo(data)
    
  }

  
  // useEffect(() => {
  //   console.log("component Render");

  // }, [count, countTwo])
  

  useEffect(() => {
    fetchData() 
  }, [count])
  
  console.log(todo);

  return (
    <div>
      <h1>Use Effect</h1>

      <button onClick={() => setCount(count = count + 1)}>TAP One {count}</button>
      <button onClick={() => setCountTwo(countTwo = countTwo + 1)}>TAP Two {countTwo}</button>

      {/* <Component/> */}
    </div>
  )
}

export default App

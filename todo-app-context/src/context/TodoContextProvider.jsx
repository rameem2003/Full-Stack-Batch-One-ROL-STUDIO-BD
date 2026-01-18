import React, { useState } from 'react'
import { createContext } from "react";

export const TodoContext = createContext()


const TodoContextProvider = ({children}) => {
const [todos, setTodos] = useState([{todo : "Todo1"}])


const addNewTodo = (newTodo) => {
    setTodos(prev => [...prev, newTodo])
}


  return (
    <TodoContext.Provider value={{todos, addNewTodo}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

import { createContext, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'

export const TaskContext = createContext()

export const DataTasks = () => useContext(TaskContext)

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const { push } = useRouter()

  const createNewTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }])
    push('/')
  }

  const removeTask = (id) => {}

  return (
    <TaskContext.Provider value={{ tasks, createNewTask }}>
      {children}
    </TaskContext.Provider>
  )
}

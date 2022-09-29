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

  const updateTask = (id, updateTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { ...task, ...updateTask } : task
      ),
    ])
  }

  return (
    <TaskContext.Provider value={{ tasks, createNewTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  )
}

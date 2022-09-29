import Layout from '../components/Layout'
import { AiOutlineSave } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { DataTasks } from '../context/tasksContext'
import { useRouter } from 'next/router'

export default function New(props) {
  const [task, setTask] = useState({
    title: '',
    description: '',
  })

  const { createNewTask, updateTask, tasks } = DataTasks()

  const { push, query } = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.id) {
      createNewTask(task.title, task.description)
    } else {
      updateTask(query.id, task)
    }
  }

  useEffect(() => {
    if (query.id) {
      const taskFound = tasks.find((task) => task.id === query.id)
      // setTask({ title: taskFound.title, description: taskFound.description })
    }
  }, [])

  return (
    <Layout>
      <form
        className="flex flex-col gap-5 w-screen px-4 py-8"
        onSubmit={handleSubmit}>
        <h1 className="text-3xl text-blue-200">
          {query.id ? 'Update Task' : 'Add your task'}
        </h1>
        <input
          className="px-4 py-3 rounded-md focus:text-gray-500 focus:outline-none bg-gray-800 border border-gray-700"
          type="text"
          placeholder="Write a title"
          name="title"
          onChange={handleChange}
          value={task.title}
        />
        <textarea
          className="px-4 py-3 rounded-md focus:text-gray-500 focus:outline-none border border-gray-700 bg-gray-800"
          rows="2"
          placeholder="Write a description"
          name="description"
          onChange={handleChange}
          value={task.description}
        />

        <button
          className="inline-flex items-center place-content-center gap-4 bg-blue-800 px-5 py-3 rounded-md uppercase font-bold text-blue-50 hover:bg-blue-600 transition-all disabled:opacity-60"
          disabled={!task.title}>
          Save
          <AiOutlineSave></AiOutlineSave>
        </button>
      </form>
    </Layout>
  )
}

import Layout from '../components/Layout'
import { DataTasks } from '../context/tasksContext'
import Card from '../components/Card'

export default function Home() {
  const { tasks } = DataTasks()

  return (
    <Layout>
      {tasks.length === 0 ? (
        <div className="bg-gray-700 shadow-md text-4xl p-8 m-4 rounded-md text-gray-400 ">
          <span className="bg-gray-500 px-4 py-1 rounded-md mr-4">
            I am sorry!
          </span>
          You have not created any tasks
        </div>
      ) : (
        <div>
          {tasks.map((task, index) => (
            <Card
              key={task.title}
              id={task.id}
              title={task.title}
              description={task.description}
              index={index}></Card>
          ))}
        </div>
      )}
    </Layout>
  )
}

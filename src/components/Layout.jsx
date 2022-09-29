import { BsFillAwardFill, BsPlusSquare } from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { DataTasks } from '../context/tasksContext'

const Layout = ({ children }) => {
  const { push } = useRouter()

  const { tasks } = DataTasks()

  return (
    <div className="h-screen bg-gray-900">
      <header className="flex place-content-between py-6 px-4 place-items-center bg-gray-800 text-white transition-all">
        <div className="flex place-items-center gap-4">
          <Link href={'/'}>
            <a>
              <div className="flex place-items-center gap-2 font-bold text-2xl uppercase  hover:text-gray-400 transition-all">
                <BsFillAwardFill className="text-4xl"></BsFillAwardFill>
                Tasks
              </div>
            </a>
          </Link>
          <span className="bg-gray-700 px-4 py-2 rounded-md ">
            {tasks.length} tasks
          </span>
        </div>

        <div>
          <button
            className="inline-flex items-center gap-4 bg-blue-800 px-5 py-3 rounded-md uppercase font-bold text-blue-50 hover:bg-blue-400 transition-all"
            onClick={() => push('/new')}>
            Add Task
            <BsPlusSquare></BsPlusSquare>
          </button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout

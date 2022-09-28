import '../styles/globals.css'
import '../sass/main.scss'
import { TaskProvider } from '../context/tasksContext'

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  )
}

export default MyApp

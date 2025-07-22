
import './App.css'
import { Header } from './components/header'

function App() {
  

  return (
    <div className="app">
        <div className="">
          <Header/>
        </div>

        <div className="min-h-screen items-center gap-5 pt-20 flex flex-col justify-center justify-items-center text-white">
          <h1 className='text-white text-6xl'>Building your dreams online.</h1>
          <h1 className='text-gray-400 text-5xl'>We craft high-performance websites, automation tools, and digital solutions.</h1>
          <div className="flex flex-row gap-30">
          <button className="b">Contrate-nos</button>
          <button className="">Portfolio</button>
          </div>
        </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import Table from './components/table'
function App() {

  const [table, setTable] = useState('Purchase')

  return (
    <div className="container grid gap-12 py-12 w-100 mx-auto">
        <h1 className="text-5xl bg-bold text-center">Dashboard</h1>
        <div className="container h-screen w-100 flex">
          <div>
             <ul className="grid gap-4">
              <li className="text-2xl p-5 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black">Purchase Table</li>

              <li className="text-2xl p-5 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black">Sales Table</li>
             </ul>
          </div>
          <div className="px-12 overflow-x-auto">
            <Table/>
          </div>
        </div>
    </div> 
  )
}

export default App

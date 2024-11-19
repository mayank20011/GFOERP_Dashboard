import { useState } from 'react'
import ProductTable from "./components/ProductTable.jsx"
import Salestable from "./components/Salestable";
function App() {

  const [table, setTable] = useState('Purchase')
  function showPurchaseTable(e)
  {
    setTable('Purchase');
  }
  function showSalesTable(e)
  {
    setTable('Sales');
  }
  return (
    <div className="container grid gap-12 py-12 w-100 mx-auto">
        <h1 className="text-5xl bg-bold text-center">Dashboard</h1>
        <div className="container w-100 flex flex-col space-y-12">
          <div>
             <ul className="flex space-x-4">
              <li className="text-md p-2 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black w-fit" onClick={showPurchaseTable}>Purchase Table</li>

              <li className="text-md p-2 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black w-fit" onClick={showSalesTable}>Sales Table</li>

             </ul>
          </div>
          <div className="overflow-x-auto">
            {table === 'Purchase'? <ProductTable/>:<Salestable/>}
          </div>
        </div>
    </div> 
  )
}

export default App

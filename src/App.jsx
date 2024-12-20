import { useState, useEffect } from "react";
import ProductTable from "./components/ProductTable.jsx";
import Salestable from "./components/Salestable";
import axios from "axios";
import FilterContainer from "./components/FilterContainer.jsx";
function App() {
  // console.log('app rerendered');
  const [table, setTable] = useState("Purchase");
  const [filteredSalesData, setFilteredSalesData] = useState(null);
  const [filteredPurchaseData, setFilterPurchaseData] = useState(null);

  function showPurchaseTable(e) {
    setTable("Purchase");
  }
  function showSalesTable(e) {
    setTable("Sales");
  }

  useEffect(() => {
    console.log("State updated:", filteredPurchaseData);
    // Logs the new state whenever it updates
  }, [filteredPurchaseData]);

  // for filter data
  function handleFilterSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = {};
    formData.forEach((value, key) => {
      if (value != "") {
        data[key] = value;
      }
    });
    if (table === "Purchase") {
      if (data.hasOwnProperty("sbd")) {
        data["timeStamp"] = data["sbd"];
        delete data.sbd;
      }
      data = JSON.stringify(data);
      axios
        .get(
          `https://gfoerp-mern-api.vercel.app/Purchase/getDataByFilter?data=${data}`
        )
        .then((response) => {
          setFilterPurchaseData(response.data.data);
          // console.log(filteredPurchaseData);
        })
        .catch((err) => {
          console.log(err);
          alert(`Something Went Wrong ${err}`);
        });
    } else {
      if (data.hasOwnProperty("sbd")) {
        data["dateOfOrder"] = data["sbd"];
        delete data.sbd;
      }
      data = JSON.stringify(data);
      axios
        .get(
          `https://gfoerp-mern-api.vercel.app/Sales/getDataByFilter?data=${data}`
        )
        .then((response) => {
          setFilteredSalesData(response.data.data);
          // console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
          alert(`Something Went Wrong ${err}`);
        });
    }
  }

  return (
    <div className="container grid gap-12 py-12 w-100 mx-auto">
      <h1 className="text-5xl bg-bold text-center">Dashboard</h1>
      <div className="container w-100 flex flex-col space-y-12">
        <div>
          <ul className="flex space-x-4">
            <li
              className="text-md p-2 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black w-fit hover:bg-green-600"
              onClick={showPurchaseTable}
            >
              Purchase Table
            </li>

            <li
              className="text-md p-2 font-bold border-2 text-center rounded-lg hover:scale-90 transition duration-300 cursor-pointer text-white bg-blue-600 shadow-sm shadow-black w-fit hover:bg-green-600"
              onClick={showSalesTable}
            >
              Sales Table
            </li>
          </ul>
        </div>
        <FilterContainer handleFilterSubmit={handleFilterSubmit} setFilteredSalesData={setFilteredSalesData} setFilterPurchaseData={setFilterPurchaseData} />
        <div className="overflow-x-auto">
          {table === "Purchase" ? (
            <ProductTable
              filteredPurchaseData={filteredPurchaseData}
            />
          ) : (
            <Salestable
              filteredSalesData={filteredSalesData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

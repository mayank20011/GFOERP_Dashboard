import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterContainer from "./FilterContainer";

const tableHeading = [
  "Client Name",
  "Quality",
  "Fat",
  "CLR",
  "Alchol",
  "Acidity",
  "Adulteration",
  "TimeStamp",
  "What To Do",
];

function Table({ table, handleFilterSubmit, filteredPurchaseData, setFilterPurchaseData }) {
  const [dataa, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // console.log('Table rerendered')
  // console.log(filteredPurchaseData);

  // useEffect(()=>{
  //   // console.log(`useEffect run`);
  //     setData(filteredPurchaseData);
  // },[filteredPurchaseData]);

  useEffect(() => {
    if(filteredPurchaseData){
      setData(filteredPurchaseData);
    }
    else{
      const fetchData = () => {
        axios
          .get("https://gfoerp-mern-api.vercel.app/Purchase/")
          .then((response) => {
            setLoading(false);
            setData(response.data.data);
            // console.log("API response data: ", response.data.data);
          })
          .catch((err) => {
            setLoading(false);
            console.error("Error fetching data:", err);
          });
      };
      // Fetch data initially
      fetchData();
      // Set up interval to fetch data every 10 seconds
      const interval = setInterval(fetchData, 10000);
      // Clean up interval on component unmount
      return () => clearInterval(interval);}
  }, [filteredPurchaseData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {/* <FilterContainer handleFilterSubmit={handleFilterSubmit} setFilterPurchaseData={setFilterPurchaseData}/> */}
      <h1 className="text-2xl bold">ProductTable</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            {tableHeading.map((heading) => (
              <th className="p-4 border border-black" key={heading}>
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataa.map((row, index) => {
            const objKeys = Object.keys(row);
            return (
              <tr
                key={index}
                className={
                  index % 2 === 0 ? "text-center bg-slate-200" : "text-center"
                }
              >
                {objKeys.map((key, index) =>
                  index === 0 || index === 10 ? (
                    ""
                  ) : (
                    <td key={key} className="p-4 border border-black">
                      {row[key]}
                    </td>
                  )
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// import React from "react";
// import dataArray from "./Productrawtabledata.js";

// const tableHeading = [
//   "Client Name",
//   "Quality",
//   "Fat",
//   "CLR",
//   "Alchol",
//   "Acidity",
//   "Adulteration",
//   "TimeStamp",
//   "What To Do",
// ];

// function Table() {
//   return (
//     <table className="table-fixed">
//       <thead>
//         <tr>
//           {tableHeading.map((data) => (
//             <th className="p-4 border border-black" key={data}>{data}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {dataArray.map((row,index) => {
//           const objKeys = Object.keys(row);
//           return(
//           <tr key={index} className={ index%2==0? 'text-center bg-slate-200':'text-center'}>
//             {objKeys.map((key)=>(
//                 <td key={key} className='p-4 border border-black'>{row[key]}</td>
//             ))}
//           </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default Table;


import React, { useEffect, useState } from "react";
import axios from "axios";

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

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
let response;

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
         response = await axios.get("https://gfoerp-mern-api.vercel.app/Purchase/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
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
        {data.map((row, index) => {
          const objKeys = Object.keys(row);
          return (
            <tr key={index} className={index % 2 === 0 ? 'text-center bg-slate-200' : 'text-center'}>
              {objKeys.map((key) => (
                <td key={key} className='p-4 border border-black'>{row[key]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;


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
  const [dataa, setData] = useState([]);
  const [loading, setLoading] = useState(true);

let response;

  useEffect(()=>{
    axios.get("https://gfoerp-mern-api.vercel.app/Purchase/")
    .then((response)=>
      {
        setData(response.data);
        setLoading(false);
      })
    .catch((err)=>{
      console.error("Error fetching data:", err);
    });
  },[]);

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
        {dataa.map((row, index) => {
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


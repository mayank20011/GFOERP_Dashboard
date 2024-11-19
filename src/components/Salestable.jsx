import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const tableHeading = [
  "Client Name",
  "Date of Order",
  "Date of dispatch and Time",
  "Full Cream (500ml)",
  "Full Cream (400ml)",
  "Toned Milk (500ml)",
  "Toned Milk (400ml)",
  "DTM (500ml)",
  "DTM (400ml)",
  "DTM Bacha(170ml)",
  "Family Pack (450ml)",
  "Cow Milk (500ml)",
  "Cow Milk (350ml)",
  "Buffalo Milk (1L)",
  "Buffalo Milk (500ml)",
  "Dahi lite (400grm)",
  "Dahi lite (160grm)",
  "Plain Chach (300ml)",
  "Masala Chach (300)",
];

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tableRows=[];

  useEffect(() => {
    axios
      .get("https://gfoerp-mern-api.vercel.app/Sales/")
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    
  if (loading) {
    return <h1>Loading...</h1>;
  }

  for(let i=data.length-1;i>=0;i--)
    {
      const row=data[i];
      const objKeys = Object.keys(row);
      const rowcells=[];
      for(let j=0;j<objKeys.length;j++)
        { 
          const key=objKeys[j];
          if(j>0 && j<4)
          {
             rowcells.push(<td key={key} className="p-1 border text-sm border-black">
              {row[key]}
            </td>)
          }
          else if(j==4)
            {
              const quantityobj=row[key];
              const quantitykeys=Object.keys(row[key]);
              for(let k=0;k<quantitykeys.length-1;k++)
                {
                  const qkey=quantitykeys[k];
                  rowcells.push(<td key={qkey} className="p-1 border text-sm border-black">
                    {quantityobj[qkey]}
                  </td>)
                }
            }
            else
            {
              continue;
            }
        }
        tableRows.push( <tr key={i} className={i % 2 === 0 ? 'text-center bg-slate-200' : 'text-center'}> {rowcells} </tr>);
    }

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          {tableHeading.map((data) => (
            <th
              className="p-1 border border-black text-sm"
              key={data}
              style={{ minWidth: "100px" }}
            >
              {data}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableRows}
        {/* {data.map((row, index) => {
          const objKeys = Object.keys(row);
          return (
            <tr
              key={index}
              className={
                index % 2 == 0 ? "text-center bg-slate-200" : "text-center"
              }
            >
              {objKeys.map((key,index) => (
                <td key={key} className="p-1 border text-sm border-black">
                  {row[key]}
                </td>
              ))}
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
}

export default Table;

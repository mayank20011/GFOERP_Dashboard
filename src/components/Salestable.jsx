import React from "react";
import dataArray from "./Salesdataraw.js";

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
  "Masala Chach (300)"
];

function Table() {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          {tableHeading.map((data) => (
            <th className="p-1 border border-black text-sm" key={data} style={{"minWidth":"100px"}}>{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataArray.map((row,index) => {
          const objKeys = Object.keys(row);
          return(
          <tr key={index} className={ index%2==0? 'text-center bg-slate-200':'text-center'}>
            {objKeys.map((key)=>(
                <td key={key} className='p-1 border text-sm border-black'>{row[key]}</td>
            ))}
          </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
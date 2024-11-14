import React from "react";
import dataArray from "./rawtabledata.js";

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
  return (
    <table class="table-fixed">
      <thead>
        <tr>
          {tableHeading.map((data) => (
            <th className="p-4 border">{data}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataArray.map((row)=>
          {
            <tr>
              { Object.keys(row).map(()=>{})}
            </tr>
          })}
        <tr>
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td className="p-4 border">Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;

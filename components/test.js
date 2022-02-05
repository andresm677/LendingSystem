import { onSnapshot, orderBy, query, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
function Test({lendings, handleSelection}) {


  //const diff_time = todos[0].return_date.seconds - todos[0].end_date.seconds;
  console.log(lendings);
  /*todos.forEach((todo) => {
    console.log(new Date(todo.timestamp));
    //console.log(todo.start_date);
  });*/
  const calcDaysBetween = (return_date, end_date) => {
    return (return_date - end_date) / (1000 * 3600 * 24);
  };
  const centerCell = {textAlign: "center"}

  return (
    <div>
      <h1>Control Prestamos</h1>
      <table>
        <tr>
          <th>Articulo</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
          <th>Fecha Devolucion</th>
          <th>Ver</th>
        </tr>
        {lendings.map((todo) => (
          <tr>
            <td style={centerCell}>{todo.item}</td>
            <td style={centerCell}>{new Date(todo.start_date).toLocaleDateString()}</td>
            <td style={centerCell}>{new Date(todo.end_date).toLocaleDateString()}</td>
            <td style={centerCell}>{todo.return_date == null ? '-' : new Date(todo.return_date).toLocaleDateString()}</td>
            <td><button onClick={()=> handleSelection({itemname: todo.item, start_date: todo.start_date, end_date: todo.end_date, return_date: todo.return_date})}>Ver multa</button></td>
          </tr>
        ))}
        
      </table>
    </div>
  );
}

export default Test;

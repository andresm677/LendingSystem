import React from "react"

function Penalty({selected}){
    //const {itemname, start_date, end_date, return_date} = selected;

    const getPenalty = (return_date, end_date) => {
      let time_difference;
      if(!return_date) {
        const todayTime = new Date(Date.now()).setHours(0,0,0,0);
        
        time_difference = todayTime - end_date;
      }
        else {
          time_difference = return_date - end_date;
        }
        
        if (time_difference <= 0) {
          return "No hay multa";
        }
        const delay = time_difference / (24 * 60 * 60 * 1000);
        return `Multa de \$${delay * 5}`;
      };
    return <div>
        {selected && <div>
        <p><span></span>{"Articulo: "+selected.itemname}</p>
        <p>{"Fecha inicio: " + new Date(selected.start_date).toLocaleDateString()}</p>
        <p>{"Fecha fin: "+new Date(selected.end_date).toLocaleDateString()}</p>
        <p>{"Fecha devolucion: "+ (!selected.return_date ? "-" :new Date(selected.return_date).toLocaleDateString())}</p>
        <p>{getPenalty(selected.return_date,  selected.end_date)}</p>
    </div>}
    </div>
}
export default Penalty;
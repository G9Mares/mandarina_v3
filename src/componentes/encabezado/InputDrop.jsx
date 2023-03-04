import React from 'react'

function InputDrop({dato, opciones,seteador,enabled=true}) {


  if (enabled && Array.isArray(opciones) ) {
    return(
      <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="inputGroupSelect01">{dato}</label>
      <select className="form-select" id="inputGroupSelect01" onChange={(e)=>{seteador(e.target.value)}} >
      <option> </option>
      {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>{opcion}</option>
        ))}
      </select>
    </div>
    )

    
  }

  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="inputGroupSelect01">{dato}</label>
      <select className="form-select" id="inputGroupSelect01" disabled >

      
      </select>
    </div>
  )
}

export default InputDrop
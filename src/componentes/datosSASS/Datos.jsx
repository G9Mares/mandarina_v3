import React , {useContext } from 'react'
import InputDrop from '../encabezado/InputDrop'
import { VentaContext } from '../../context/VentaContext'


function DatosSASS() {
  
  const {tipo,settipo,marca,setmarca,modelo,setmodelo,setniv,setcargador,setsku,setmotor,setbateria} = useContext(VentaContext)




  

  // const tipo_unidad = {'E-Bike':{'Mate':['Icon','City','X 14A','X 17A'],'Praia':['Ibiza','Copa','Puka','Bora'],'Starker':['TFlex','TFlex pro','Sport 2.0','Urban ST']},
  // 'E-Scooter':{'Velocifero':['Mad 2000','Mad 1600','Mad 800','Mad Air','Mini Mad Plus'],'Segway':['F12','E22','F30','E45','G30P']},
  // 'Mops':{'VMoto':['CPX','CUX']},
  // 'E-Motos':{'VMoto':['TC 1900','TC Hunter','TC Max'],'Zero':['FX','FXE','DS','DSR','DSRX']},
  // 'Vehiculo 4 ruedas':{'Coche':['Coche Electrico']}}
  return (
    <div className="row">
      <div className="col">
        <table className='table mb-4'>
        <tbody>
          <tr>
            
            <td>
              
            <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Tipo de unidad</span>
                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" value={tipo} onChange={e => settipo(e.target.value)} />
            </div>
            
            </td>
          </tr>
          <tr>
           <td>
          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Marca</span>
                            <input type="text" className="form-control" placeholder="Marca" aria-label="Marca" aria-describedby="basic-addon1" value={marca} onChange={e => setmarca(e.target.value)} />
          </div>
          </td>
          </tr>
          <tr>
          <td>
          <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Modelo</span>
                            <input type="text" className="form-control" placeholder="Modelo" aria-label="Modelo" aria-describedby="basic-addon1" value={modelo} onChange={e => setmodelo(e.target.value)} />
                        </div>
                        </td>
          </tr>
          <tr>
           
            <td>
              <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">SKU:</span>
                  <input type="text" className="form-control" placeholder="SKU" aria-label="sku" aria-describedby="basic-addon1" onChange={(e)=>{setsku(e.target.value)}}/>
              </div>
            </td>
          </tr>
          
        </tbody>

      </table>

      </div>
      <div className="col">
      <table className='table mb-4'>
        <tbody>
          
          <tr>
            <td>
            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">NIV:</span>
                  <input type="text" className="form-control" placeholder="NIV" aria-label="NIV" aria-describedby="basic-addon1" onChange={(e)=>{setniv(e.target.value)}}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">N° Cargador:</span>
                  <input type="text" className="form-control" placeholder="N° Cargador" aria-label="N° Cargador" aria-describedby="basic-addon1" onChange={(e)=>{setcargador(e.target.value)}}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">N° Motor:</span>
                  <input type="text" className="form-control" placeholder="N° Motor" aria-label="N° Motor" aria-describedby="basic-addon1" onChange={(e)=>{setmotor(e.target.value)}} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
            <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">N° Bateria:</span>
                  <input type="text" className="form-control" placeholder="N° Bateria" aria-label="N° Bateria" aria-describedby="basic-addon1" onChange={(e)=>{setbateria(e.target.value)}} />
              </div>
            </td>
          </tr>
        </tbody>

      </table>

      </div>
    </div>
    

  )
}

export default DatosSASS
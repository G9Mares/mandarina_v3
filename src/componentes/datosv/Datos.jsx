import React , {useContext } from 'react'
import InputDrop from '../encabezado/InputDrop'
import { VentaContext } from '../../context/VentaContext'


function Datos() {
  
  const {tipo,settipo,marca,setmarca,setmodelo,setniv,setcargador,setsku,setmotor,setbateria} = useContext(VentaContext)




  

  const tipo_unidad = {'E-Bike':{'Mate':['Icon','City','X 14A','X 17A'],'Praia':['Ibiza','Copa','Puka','Bora'],'Starker':['TFlex','TFlex pro','Sport 2.0','Urban ST']},
  'E-Scooter':{'Velocifero':['Mad 2000','Mad 1600','Mad 800','Mad Air','Mini Mad Plus'],'Segway':['F12','E22','F30','E45','G30P']},
  'Mops':{'VMoto':['CPX','CUX']},
  'E-Motos':{'VMoto':['TC 1900','TC Hunter','TC Max'],'Zero':['FX','FXE','DS','DSR','DSRX']},
  'Vehiculo 4 ruedas':{'Coche':['Coche Electrico']}}
  return (
    <div className="row">
      <div className="col">
        <table className='table mb-4'>
        <tbody>
          <tr>
            
            <td>
              <InputDrop dato={'Tipo Unidad'} opciones={Object.keys(tipo_unidad)} seteador={settipo} ></InputDrop>
            </td>
          </tr>
          <tr>
           
            <td>{tipo ?  <InputDrop dato={'Marca'} opciones={Object.keys(tipo_unidad[tipo])} seteador={setmarca}></InputDrop> : <InputDrop dato={'Marca'} enabled={false} ></InputDrop>

              }
              
            </td>
          </tr>
          <tr>
            <td>{marca ?  <InputDrop dato={'Modelo'} opciones={tipo_unidad[tipo][marca]} seteador={setmodelo}></InputDrop> : <InputDrop dato={'Modelo'} enabled={false} ></InputDrop>

              }
              
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

export default Datos
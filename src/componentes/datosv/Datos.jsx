import React , {useContext, useEffect} from 'react'
import { VentaContext } from '../../context/VentaContext'
import InputDrop from '../encabezado/InputDrop'

function Datos() {
 const {settipo,sku,setsku,niv,setniv,cargador,setcargador,motor,setmotor,bateria,setbateria,setmarca,setmodelo,marca} = useContext(VentaContext)
  const tipo_unidad = ['E-Bike','Scooter','Motocicleta']

  const equipos = { 'MATE':['X 17A','X 14A','Icon','City'],
                    'STARKER':['Starkids','Bici ONE','SKUTY sport','S1','S1 Lite','SPORT 2.0','URBAN ST','T-FLEX PRO(350W)','T-FLEX PRO(500W)'],
                    'PRAIA':['Bora','Copa','Puka','Ibiza'],
                    'SEGWAY':['E12','E22','GP30P','F30','E45'],
                    'VELOCIFERO':['MAD AIR','Mini Mad Plus','Mini Mad','Mad 1600','Mad 2000'],
                    'NUUV':['KQi Pro','KQi Sport'],
                    'ZERO':['SR','SR/S','SR/F','FXE','FX','DS','S','DSR','SR/S','DSR/X'],
                    'UBCO':['Adventure Bike', 'Work Bike'],
                    'VMOTO':['CPX', 'TS HUNTER','TC MAX','TC 1900','CUX DUCATI','CUX'],
                    '...':['']}

    const marcas = ['MATE','STARKER','PRAIA','SEGWAY','VELOCIFERO','NUUV','ZERO','UBCO','VMOTO']

    useEffect(()=>{ 
      console.log(marca)
    },[marca])

  return (
    <table className='table mb-4'>
      <tbody>
        <tr>
          <th scope='row'>TIPO DE UNIDAD:</th>
          <td><InputDrop  opciones={tipo_unidad} seteador={settipo}  /> </td>
        </tr>
        <tr>
          <th scope='row'>MARCA:</th>
          <td><InputDrop opciones={marcas} seteador={setmarca} /> </td>
        </tr>
        {marca ? <tr>
          <th scope='row'>MODELO:</th>
          <td><InputDrop opciones={equipos[marca]} seteador={setmodelo} /></td>
        </tr>:<tr>
          <th scope='row'>MODELO:</th>
          <td><input type="text" className='form-control' disabled /></td>
        </tr>}
        
        <tr>
          <th scope='row'>SKU:</th>
          <td><input type="text" className='form-control' value={sku} onChange={(e)=>{setsku(e.target.value)}} /> </td>
        </tr>
        <tr>
          <th scope='row'>NIV:</th>
          <td><input type="text" className='form-control' value={niv} onChange={(e)=>{setniv(e.target.value)}} /></td>
        </tr>
        <tr>
          <th scope='row'>N° CARGADOR:</th>
          <td><input type="text" className='form-control' value={cargador} onChange={(e)=>{setcargador(e.target.value)}} /></td>
        </tr>
        <tr>
          <th scope='row'>N° MOTOR:</th>
          <td><input type="text" className='form-control' value={motor} onChange={(e)=>{setmotor(e.target.value)}} /></td>
        </tr>
        <tr>
          <th scope='row'>N° BATERIA:</th>
          <td><input type="text" className='form-control' value={bateria} onChange={(e)=>{setbateria(e.target.value)}} /></td>
        </tr>
      </tbody>

    </table>
  )
}

export default Datos
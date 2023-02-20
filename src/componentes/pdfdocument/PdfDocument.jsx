import React , {useContext} from 'react'
import { VentaContext } from '../../context/VentaContext'

function PdfDocument() {

  const {Crearpdf} =useContext(VentaContext)
    


  return (
    <div className='text-center mt-2 row'>
      <div className="col">
        <button className='btn btn-secondary' onClick={()=>{Crearpdf('Poliza y Garantia')}} >Crear Poliza y Garantia</button>
      </div>
      <div className="col">
        <button className='btn btn-secondary' onClick={()=>{Crearpdf('CheckList')}} >Crear CheckList</button>
      </div>
        
    </div>
  )
}

export default PdfDocument
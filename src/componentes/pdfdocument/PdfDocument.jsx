import React , {useContext} from 'react'
import { VentaContext } from '../../context/VentaContext'

function PdfDocument() {

  const {Crearpdf} =useContext(VentaContext)
    


  return (
    <div className='text-center mt-2'>
        <button className='btn btn-secondary' onClick={Crearpdf} >Crear Pdf</button>
    </div>
  )
}

export default PdfDocument
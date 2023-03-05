import React , { useContext }   from 'react'
import './Encabezado.css'

import DatosSASS from '../datosSASS/Datos'
import Lista from '../lista/Lista'
import Footer from '../footer/Footer'
import Garantia from '../garantia/Garantia'
import { VentaContext } from '../../context/VentaContext'
import PdfDocument from '../pdfdocument/PdfDocument'




function EncabezadoSASS() {
    
    const {setsucursal ,setvendedor,setcliente,setconcepto,fechaActual,setFechaActual,sucursal ,vendedor,cliente,concepto} = useContext(VentaContext)
    
    

    // const sucursales = ['Condesa', 'Horacio']
    // const vendedor = ['Ignacio Salguero','Carlos Guerra','Randall Avila','Omar Cruz','Gustavo Mares']
    // const concepto = ['Venta','Transferencia']

  return (
    <div className="container encabezado mt-4" id='archivo' >
        <div className="row container pt-2">
            <div className="col-md-12 col-lg-4 text-center">
                <img src="/img/logo2.png" id='img_logo' className='w-75' alt="" />
            </div>
            <div className="col-md-12 col-lg-8">
                <h4 className='text-center'>
                    DATOS GENERALES
                </h4>
                <div className="row pb-3 mt-3">
                    <div className="col">
                    <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Sucursal</span>
                            <input type="text" className="form-control" placeholder="Nombre de la Sucursal" aria-label="Sucursal" aria-describedby="basic-addon1" onChange={(e)=>{setsucursal(e.target.value)}} value={sucursal} />
                    </div>
                    <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Vendedor</span>
                            <input type="text" className="form-control" placeholder="Vendedor" aria-label="Vendedor" aria-describedby="basic-addon1" onChange={(e)=>{setvendedor(e.target.value)}} defaultValue={vendedor} />
                    </div>
                    
                    <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Cliente</span>
                            <input type="text" className="form-control" placeholder="Nombre del cliente" aria-label="cliente" aria-describedby="basic-addon1" onChange={(e)=>{setcliente(e.target.value)}} defaultValue={cliente} />
                    </div>


                    </div>
                    <div className="col">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Observaciones</span>
                        <input type="text" className="form-control" placeholder="Observaciones" aria-label="Observaciones" aria-describedby="basic-addon1"/>
                    </div>
                        
                    <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Concepto</span>
                            <input type="text" className="form-control" placeholder="Tipo de movimiento" aria-label="Concepto" aria-describedby="basic-addon1" defaultValue={'Venta'} onChange={(e)=>{setcliente(e.target.value)}} />
                    </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Fecha entrega</span>
                            <input type="date" className="form-control" placeholder="Fecha" aria-label="Fecha" aria-describedby="basic-addon1" value={fechaActual} onChange={e => setFechaActual(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <DatosSASS/>
    <Lista/>
    <Footer/>
    <Garantia/>
    <PdfDocument/>
    </div>
  )
}

export default EncabezadoSASS
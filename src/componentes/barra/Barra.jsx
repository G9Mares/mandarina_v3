import React , {useContext} from 'react'
import './Barra.css'
import Form from '../form/Form'
import { IntegracionContext } from '../../context/IntegracionContext'


function Barra() {
  const {setnumpedid,numpedid} = useContext(IntegracionContext)
  return (
    <div className="container barra pb-2">
        	<div className="row pb-3">
                <div className="col-md-6 col-lg-3">
                    <div className="input-group mt-3">
                        <input type="number" className="form-control" placeholder="N° Pedido" aria-label="Recipient's username" aria-describedby="button-addon2" value={numpedid} onChange={(e)=>{setnumpedid(e.target.value)}} />
                        <button className="btn btn-secondary" type="button" id="button-addon2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Generar</button>
                    </div>
                </div>
                <Form/>
                <div className="col-md-6 col-lg-6">
                <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Email de envio" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button className="btn btn-secondary" type="button" id="button-addon2"  >Enviar Checklist</button>
                </div>
                </div>
                
                <div className="col-md-6 col-lg-3 ms-auto me-auto">
                <div className="input-group mt-3 ">
                            <button className="btn btn-secondary ms-auto me-auto w-75" type="submit" id="button-addon2">Enviar Completo</button>

                            </div>
                </div>

            </div>

    </div>
  )
}

export default Barra


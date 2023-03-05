import React ,{useState,useContext} from 'react'
import { IntegracionContext } from '../../context/IntegracionContext'


function Form() {
    const {logear,lista_vehiculos} = useContext(IntegracionContext)

    const [usuario,setusuario] = useState('')
    const [pasword,setpasword] = useState('')


    if (lista_vehiculos) {
      return(
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Check List Automatico</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
      <h1 className="h5 mb-3 fw-normal">Selecciona el vehiculo para el checklist</h1>

      {lista_vehiculos.map((vehiculo , index)=>(
        <button className='btn btn-secondary' key={index} value={index} >{vehiculo.description}</button>
      ))}
      
      </div>
      <div className="modal-footer">
      </div>
    </div>
  </div>
</div>
      )
      
    }
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Check List Automatico</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center">
      <form onSubmit={(e)=>{logear(usuario,pasword,e)}} >
            <img className="mb-4" src='/img/logo.png' alt="" width="72"/>
            <h1 className="h3 mb-3 fw-normal">Incia sesion con SASS</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Usuario de SASS" required value={usuario} onChange={(e)=>{setusuario(e.target.value)}}/>
                <label htmlFor="floatingInput">Usuario</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={pasword} onChange={(e)=>{setpasword(e.target.value)}} />
                <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <button className="w-100 btn btn-lg btn-dark" type="submit">Generar</button>
            <p className="mt-5 mb-3 text-muted">&copy; Gmares</p>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Form
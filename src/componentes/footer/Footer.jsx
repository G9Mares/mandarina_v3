import React , {useRef} from 'react'
import SignatureCanvas from 'react-signature-canvas'
import Swal from 'sweetalert2'

function Footer({asesor,cliente}) {
    const sigCanvas1 = useRef()
    const sigCanvas2 = useRef()
    function confirm() {
        Swal.fire({
            title: 'Quieres guardar la firma?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `Repetir`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire("Repita la firma", '', 'info')
              sigCanvas2.current.clear()
            }
          })

    
    }
    function confirm1() {
        Swal.fire({
            title: 'Quieres guardar la firma?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `Repetir`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire("Repita la firma", '', 'info')
              sigCanvas1.current.clear()
            }
          })

    
    }
    
  return (
    <div className="container row">
        <div className="col-6 border border-dark text-center" >
                <SignatureCanvas penColor='green'
                                    canvasProps={{  className: 'sigCanvas2 w-75'}} ref={sigCanvas2} onEnd={confirm} />
                <label className='text-center'>{asesor} </label>
        </div>
        <div className="col-6 border border-dark text-center" >
                <SignatureCanvas penColor='green'
                                    canvasProps={{  className: 'sigCanvas1 w-75' }} ref={sigCanvas1} onEnd={confirm1} />
        <label className='text-center'>{cliente} </label>
    </div>
    <p>
    Acepto que he recibido por parte de E-mobility Operations toda la información para el uso del vehículo eléctrico que acabo de adquirir, además tengo el conocimiento de la importancia de leer el Manual de Usuario y el Manual de Garantía las cuales están en  la siguiente dirección: https://www.mandarina.bike/pages/manuales-de-vehiculos y estudiar las RECOMENDACIONES DE CARGA Y USO DE LAS BATERIAS.  También confirmo que he recibido impreso la Orden de Entrega a satisfacción donde incluye la Póliza de Garantía Legal y el Manual de Inicio Rápido.  Si he recibido el vehículo por fuera de las instalaciones de E-mobility Operations debo enviar éste documento firmado, en caso de no hacerlo, acepto que todos los documentos y manuales fueron entregados a satisfacción.
    </p>
    <div className="row">
        <div className="col text-center">
            <h5>Garantia</h5>
            <img src="/img/qr_1.png" id='garantia' alt="" />

        </div>
        <div className="col text-center">
            <h5>Nuestro Pacto</h5>
            <img src="/img/qr_2.png" id='garantia' alt="" />

        </div>
        <div className="col text-center">
            <h5>Terminos y Condiciones</h5>
            <img src="/img/qr_3.png" id='garantia' alt="" />

        </div>
    </div>
        
    </div>
    
  )
}

export default Footer
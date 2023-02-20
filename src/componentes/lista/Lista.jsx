import React, {useContext} from 'react'
import { VentaContext } from '../../context/VentaContext'

function Lista() {

    const {setMarco,Marco,setDisplay,Display,Asiento,setAsiento,Acelerador,setAcelerador,Sistema,setSistema,Verificacion,setVerificacion,Ruedas,setRuedas,Claxon,setClaxon,Luces,setLuces,Espejos,setEspejos,Herramienta,setHerramienta,Bateria,setBateria,Cargador,setCargador,Switch,setSwitch,Alarma,setAlarma,Motor,setMotor,Reflactantes,setReflactantes,Aditamentos,setAditamentos,Manuales,setManuales,Juego,setJuego,Frenos,setFrenos} = useContext(VentaContext)
    function cambiarCaracteristica(funcion , valor, campo) {
        const nuevo_dato = [campo,valor,""]
        funcion(nuevo_dato)
        
    } 
    function cambiarComents(comentarios,campo,funcion) {
        console.log(comentarios,campo)

        const nuevo_dato = [campo[0],campo[1],comentarios]
        funcion(nuevo_dato)
    }

  return (
    <div className="container">
       
        <table className='table' id='my-table'>
                    <thead>
                        <tr>
                            <th scope='col'>CHECK LIST</th>
                            <th scope='col'>SI</th>
                            <th scope='col'>NO</th>
                            <th scope='col'>OBSERVACIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'>Marco</th>
                            <td><input type="radio" name='marcoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setMarco,'Si','Motor')} /></td>
                            <td><input type="radio" name='marcoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setMarco,'No','Motor')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Marco,setMarco)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Display</th>
                            <td><input type="radio" name='displayEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setDisplay,'Si','Display')} /></td>
                            <td><input type="radio" name='displayEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setDisplay,'No','Display')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Display,setDisplay)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Asiento</th>
                            <td><input type="radio" name='asientoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAsiento,'Si','Asiento')} /></td>
                            <td><input type="radio" name='asientoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAsiento,'No','Asiento')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Asiento,setAsiento)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Sistema de plegado</th>
                            <td><input type="radio" name='SistemaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setSistema,'Si','Sistema de plegado')} /></td>
                            <td><input type="radio" name='SistemaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setSistema,'No','Sistema de plegado')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Sistema,setSistema)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Verificacion de cambios</th>
                            <td><input type="radio" name='VerificacionEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setVerificacion,'Si','Verificacion de cambios')} /></td>
                            <td><input type="radio" name='VerificacionEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setVerificacion,'No','Verificacion de cambios')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Verificacion,setVerificacion)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Acelerador</th>
                            <td><input type="radio" name='aceleradorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAcelerador,'Si','Acelerador')} /></td>
                            <td><input type="radio" name='aceleradorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAcelerador,'No','Acelerador')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Acelerador,setAcelerador)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Frenos</th>
                            <td><input type="radio" name='FrenosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setFrenos,'Si','Frenos')} /></td>
                            <td><input type="radio" name='FrenosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setFrenos,'No','Frenos')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Frenos,setFrenos)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Ruedas</th>
                            <td><input type="radio" name='ruedasEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setRuedas,'Si','Ruedas')} /></td>
                            <td><input type="radio" name='ruedasEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setRuedas,'No','Ruedas')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Ruedas,setRuedas)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Claxon</th>
                            <td><input type="radio" name='ClaxonEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setClaxon,'Si','Claxon')} /></td>
                            <td><input type="radio" name='ClaxonEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setClaxon,'No','Claxon')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Claxon,setClaxon)}} /></td>
                        </tr><tr>
                            <th scope='row'>Luces (Luz delantera,trasera,direccionales)</th>
                            <td><input type="radio" name='LucesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setLuces,'Si','Luces(Luz delantera,trasera,direccionales)')} /></td>
                            <td><input type="radio" name='LucesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setLuces,'No','Luces(Luz delantera,trasera,direccionales)')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Luces,setLuces)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Espejos</th>
                            <td><input type="radio" name='EspejosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setEspejos,'Si','Espejos')} /></td>
                            <td><input type="radio" name='EspejosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setEspejos,'No','Espejos')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Espejos,setEspejos)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Herramienta de armado</th>
                            <td><input type="radio" name='HerramientaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setHerramienta,'Si','Herramienta de armado')} /></td>
                            <td><input type="radio" name='HerramientaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setHerramienta,'No','Herramienta de armado')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Herramienta,setHerramienta)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Juego de llaves</th>
                            <td><input type="radio" name='JuegoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setJuego,'Si','Juego  de llave')} /></td>
                            <td><input type="radio" name='JuegoEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setJuego,'No','Juego  de llave')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Juego,setJuego)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Bateria</th>
                            <td><input type="radio" name='BateriaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setBateria,'Si','Bateria')} /></td>
                            <td><input type="radio" name='BateriaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setBateria,'No','Bateria')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Bateria,setBateria)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Cargador</th>
                            <td><input type="radio" name='CargadorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setCargador,'Si','Cargador')} /></td>
                            <td><input type="radio" name='CargadorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setCargador,'No','Cargador')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Cargador,setCargador)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Aditamentos Cargador (Cables - Conectores)</th>
                            <td><input type="radio" name='AditamentosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAditamentos,'Si','Aditamentos Cargador (Cables - Conectores)')} /></td>
                            <td><input type="radio" name='AditamentosEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAditamentos,'No','Aditamentos Cargador (Cables - Conectores)')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Aditamentos,setAditamentos)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Manuales</th>
                            <td><input type="radio" name='ManualesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setManuales,'Si','Manuales')} /></td>
                            <td><input type="radio" name='ManualesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setManuales,'No','Manuales')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Manuales,setManuales)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Motor</th>
                            <td><input type="radio" name='MotorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setMotor,'Si','Motor')} /></td>
                            <td><input type="radio" name='MotorEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setMotor,'No','Motor')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Motor,setMotor)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Alarma</th>
                            <td><input type="radio" name='AlarmaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAlarma,'Si','Alarma')} /></td>
                            <td><input type="radio" name='AlarmaEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setAlarma,'No','Alarma')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Alarma,setAlarma)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Switch de encendido</th>
                            <td><input type="radio" name='SwitchEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setSwitch,'Si','Switch de encendido')} /></td>
                            <td><input type="radio" name='SwitchEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setSwitch,'No','Switch de encendido')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Switch,setSwitch)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Reflactantes</th>
                            <td><input type="radio" name='ReflactantesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setReflactantes,'Si','Reflactantes')} /></td>
                            <td><input type="radio" name='ReflactantesEstado' className='form-check-input' onClick={()=>cambiarCaracteristica(setReflactantes,'No','Reflactantes')} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{cambiarComents(e.target.value,Reflactantes,setReflactantes)}} /></td>
                        </tr> 

                    </tbody>
                </table>
    </div>
  )
}

export default Lista
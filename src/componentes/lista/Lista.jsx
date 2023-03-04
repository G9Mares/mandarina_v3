import React , {useContext} from 'react'
import { VentaContext } from '../../context/VentaContext'


function Lista() {

    const {CambiarParametro,Marco,Switch, Reflactantes,Salpicaderas, Herramienta, Juego, Bateria, Cargador, Aditamentos, Manuales, Motor, Alarma,Display, Asiento, Sistema, Verificacion, Acelerador, Frenos, Ruedas, Claxon, Luces, Espejos,setDisplay, setAsiento, setSistema, setVerificacion, setAcelerador, setFrenos, setRuedas, setClaxon, setLuces, setEspejos, setSalpicaderas, setHerramienta, setMarco,setJuego, setBateria, setCargador, setAditamentos, setManuales, setMotor, setAlarma, setSwitch, setReflactantes} = useContext(VentaContext)
    

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
                            <td><input type="radio"  name='marco_status' className='form-check-input' onClick={()=>{CambiarParametro(Marco,'Status','Si',setMarco)}}  /></td>
                            <td><input type="radio" name='marco_status' className='form-check-input' onClick={()=>{CambiarParametro(Marco,'Status','No',setMarco)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Marco,'Observaciones',e.target.value,setMarco)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Display</th>
                            <td><input type="radio" name='Display-status' className='form-check-input'  onClick={()=>{CambiarParametro(Display,'Status','Si',setDisplay)}} /></td>
                            <td><input type="radio" name='Display-status' className='form-check-input' onClick={()=>{CambiarParametro(Display,'Status','No',setDisplay)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Display,'Observaciones',e.target.value,setDisplay)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Asiento</th>
                            <td><input type="radio" name='Asiento-status' className='form-check-input'   onClick={()=>{CambiarParametro(Asiento,'Status','Si',setAsiento)}} /></td>
                            <td><input type="radio" name='Asiento-status' className='form-check-input'   onClick={()=>{CambiarParametro(Asiento,'Status','No',setAsiento)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Asiento,'Observaciones',e.target.value,setAsiento)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Sistema de plegado</th>
                            <td><input type="radio" name='Sistema-status' className='form-check-input'   onClick={()=>{CambiarParametro(Sistema,'Status','Si',setSistema)}}  /></td>
                            <td><input type="radio" name='Sistema-status' className='form-check-input'   onClick={()=>{CambiarParametro(Sistema,'Status','No',setSistema)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Sistema,'Observaciones',e.target.value,setSistema)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Verificacion de cambios</th>
                            <td><input type="radio" name='Verificacion-status' className='form-check-input'   onClick={()=>{CambiarParametro(Verificacion,'Status','Si',setVerificacion)}}  /></td>
                            <td><input type="radio" name='Verificacion-status' className='form-check-input'   onClick={()=>{CambiarParametro(Verificacion,'Status','No',setVerificacion)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Verificacion,'Observaciones',e.target.value,setVerificacion)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Acelerador</th>
                            <td><input type="radio" name='Acelerador-status' className='form-check-input'  onClick={()=>{CambiarParametro(Acelerador,'Status','Si',setAcelerador)}}   /></td>
                            <td><input type="radio" name='Acelerador-status' className='form-check-input'  onClick={()=>{CambiarParametro(Acelerador,'Status','No',setAcelerador)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Acelerador,'Observaciones',e.target.value,setAcelerador)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Frenos</th>
                            <td><input type="radio" name='Frenos-status' className='form-check-input'  onClick={()=>{CambiarParametro(Frenos,'Status','Si',setFrenos)}}   /></td>
                            <td><input type="radio" name='Frenos-status' className='form-check-input'  onClick={()=>{CambiarParametro(Frenos,'Status','No',setFrenos)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Frenos,'Observaciones',e.target.value,setFrenos)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Ruedas</th>
                            <td><input type="radio" name='Ruedas-status' className='form-check-input'  onClick={()=>{CambiarParametro(Ruedas,'Status','Si',setRuedas)}}  /></td>
                            <td><input type="radio" name='Ruedas-status' className='form-check-input'  onClick={()=>{CambiarParametro(Ruedas,'Status','No',setRuedas)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Ruedas,'Observaciones',e.target.value,setRuedas)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Claxon</th>
                            <td><input type="radio" name='Claxon-status' className='form-check-input'   onClick={()=>{CambiarParametro(Claxon,'Status','Si',setClaxon)}}  /></td>
                            <td><input type="radio" name='Claxon-status' className='form-check-input'   onClick={()=>{CambiarParametro(Claxon,'Status','No',setClaxon)}} /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Claxon,'Observaciones',e.target.value,setClaxon)}} /></td>
                        </tr><tr>
                            <th scope='row'>Luces (Luz delantera,trasera,direccionales)</th>
                            <td><input type="radio" name='Luces-status' className='form-check-input'  onClick={()=>{CambiarParametro(Luces,'Status','Si',setLuces)}}  /></td>
                            <td><input type="radio" name='Luces-status' className='form-check-input'  onClick={()=>{CambiarParametro(Luces,'Status','No',setLuces)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Luces,'Observaciones',e.target.value,setLuces)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Salpicaderas</th>
                            <td><input type="radio" name='Salpicaderas-status' className='form-check-input'  onClick={()=>{CambiarParametro(Salpicaderas,'Status','Si',setSalpicaderas)}}  /></td>
                            <td><input type="radio" name='Salpicaderas-status' className='form-check-input'  onClick={()=>{CambiarParametro(Salpicaderas,'Status','No',setSalpicaderas)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Salpicaderas,'Observaciones',e.target.value,setSalpicaderas)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Espejos</th>
                            <td><input type="radio" name='Espejos-status' className='form-check-input'  onClick={()=>{CambiarParametro(Espejos,'Status','Si',setEspejos)}}   /></td>
                            <td><input type="radio" name='Espejos-status' className='form-check-input' onClick={()=>{CambiarParametro(Espejos,'Status','No',setEspejos)}}   /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Espejos,'Observaciones',e.target.value,setEspejos)}}  /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Herramienta de armado</th>
                            <td><input type="radio" name='Herramienta-status' className='form-check-input'  onClick={()=>{CambiarParametro(Herramienta,'Status','Si',setHerramienta)}}   /></td>
                            <td><input type="radio" name='Herramienta-status' className='form-check-input' onClick={()=>{CambiarParametro(Herramienta,'Status','No',setHerramienta)}}   /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Herramienta,'Observaciones',e.target.value,setHerramienta)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Juego de llaves</th>
                            <td><input type="radio" name='Juego-status' className='form-check-input'  onClick={()=>{CambiarParametro(Juego,'Status','Si',setJuego)}}   /></td>
                            <td><input type="radio" name='Juego-status' className='form-check-input'  onClick={()=>{CambiarParametro(Juego,'Status','No',setJuego)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Juego,'Observaciones',e.target.value,setJuego)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Bateria</th>
                            <td><input type="radio" name='Bateria-status' className='form-check-input'  onClick={()=>{CambiarParametro(Bateria,'Status','Si',setBateria)}}   /></td>
                            <td><input type="radio" name='Bateria-status' className='form-check-input'  onClick={()=>{CambiarParametro(Bateria,'Status','No',setBateria)}}  /></td>
                            <td><input type="text" className="form-control" onChange={(e)=>{CambiarParametro(Bateria,'Observaciones',e.target.value,setBateria)}}/></td>
                        </tr>
                        <tr>
                            <th scope='row'>Cargador</th>
                            <td><input type="radio" name='Cargador-status' className='form-check-input'  onClick={()=>{CambiarParametro(Cargador,'Status','Si',setCargador)}}  /></td>
                            <td><input type="radio" name='Cargador-status' className='form-check-input'  onClick={()=>{CambiarParametro(Cargador,'Status','No',setCargador)}} /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Cargador,'Observaciones',e.target.value,setCargador)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Aditamentos Cargador (Cables - Conectores)</th>
                            <td><input type="radio" name='Aditamentos-status' className='form-check-input'  onClick={()=>{CambiarParametro(Aditamentos,'Status','Si',setAditamentos)}}  /></td>
                            <td><input type="radio" name='Aditamentos-status' className='form-check-input' onClick={()=>{CambiarParametro(Aditamentos,'Status','No',setAditamentos)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Aditamentos,'Observaciones',e.target.value,setAditamentos)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Manuales</th>
                            <td><input type="radio" name='Manuales-status' className='form-check-input'  onClick={()=>{CambiarParametro(Manuales,'Status','Si',setManuales)}}  /></td>
                            <td><input type="radio" name='Manuales-status' className='form-check-input' onClick={()=>{CambiarParametro(Manuales,'Status','No',setManuales)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Manuales,'Observaciones',e.target.value,setManuales)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Motor</th>
                            <td><input type="radio" name='Motor-status' className='form-check-input' onClick={()=>{CambiarParametro(Motor,'Status','Si',setMotor)}}   /></td>
                            <td><input type="radio" name='Motor-status' className='form-check-input' onClick={()=>{CambiarParametro(Motor,'Status','No',setMotor)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Motor,'Observaciones',e.target.value,setMotor)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Alarma</th>
                            <td><input type="radio" name='Alarma-status' className='form-check-input' onClick={()=>{CambiarParametro(Alarma,'Status','Si',setAlarma)}}   /></td>
                            <td><input type="radio" name='Alarma-status' className='form-check-input' onClick={()=>{CambiarParametro(Alarma,'Status','No',setAlarma)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Alarma,'Observaciones',e.target.value,setAlarma)}}/></td>
                        </tr>
                        <tr>
                            <th scope='row'>Switch de encendido</th>
                            <td><input type="radio" name='Switch-status' className='form-check-input' onClick={()=>{CambiarParametro(Switch,'Status','Si',setSwitch)}}   /></td>
                            <td><input type="radio" name='Switch-status' className='form-check-input' onClick={()=>{CambiarParametro(Switch,'Status','No',setSwitch)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Switch,'Observaciones',e.target.value,setSwitch)}} /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Reflactantes</th>
                            <td><input type="radio" name='Reflactantes-status' className='form-check-input' onClick={()=>{CambiarParametro(Reflactantes,'Status','Si',setReflactantes)}}  /></td>
                            <td><input type="radio" name='Reflactantes-status' className='form-check-input' onClick={()=>{CambiarParametro(Reflactantes,'Status','No',setReflactantes)}}  /></td>
                            <td><input type="text" className="form-control"onChange={(e)=>{CambiarParametro(Reflactantes,'Observaciones',e.target.value,setReflactantes)}} /></td>
                        </tr> 

                    </tbody>
                </table>
    </div>
  )
}

export default Lista
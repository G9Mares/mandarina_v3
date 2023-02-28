import React from 'react'

function Lista() {
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
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control"/></td>
                        </tr>
                        <tr>
                            <th scope='row'>Display</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Asiento</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Sistema de plegado</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Verificacion de cambios</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Acelerador</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Ruedas</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Claxon</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr><tr>
                            <th scope='row'>Luces (Luz delantera,trasera,direccionales)</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Espejos</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Herramienta de armado</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Juego de llaves</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Bateria</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Cargador</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Aditamentos Cargador (Cables - Conectores)</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Manuales</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Motor</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Alarma</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control"/></td>
                        </tr>
                        <tr>
                            <th scope='row'>Switch de encendido</th>
                            <td><input type="checkbox" className='form-check-input'  /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr>
                        <tr>
                            <th scope='row'>Reflactantes</th>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="checkbox" className='form-check-input' /></td>
                            <td><input type="text" className="form-control" /></td>
                        </tr> 

                    </tbody>
                </table>
    </div>
  )
}

export default Lista
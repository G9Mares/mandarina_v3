import React from 'react'

function Datos() {
  return (
    <table className='table mb-4'>
      <tbody>
        <tr>
          <th scope='row'>TIPO DE UNIDAD:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
        <tr>
          <th scope='row'>SKU:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
        <tr>
          <th scope='row'>NIV:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
        <tr>
          <th scope='row'>N° CARGADOR:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
        <tr>
          <th scope='row'>N° MOTOR:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
        <tr>
          <th scope='row'>N° BATERIA:</th>
          <td><input type="text" className='form-control' /></td>
        </tr>
      </tbody>

    </table>
  )
}

export default Datos
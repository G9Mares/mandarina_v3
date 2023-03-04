import React , {useRef , useContext} from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { VentaContext } from '../../context/VentaContext'


function Garantia() {
    const {tipo,marca,modelo,motor,niv, fechaActual, bateria,cargador} = useContext(VentaContext)
   
    const sigCanvas2 = useRef()


    
  return (
    <div className='text-start mt-3 border border-3 rounded pt-2 pb-2 pe-4 ps-4 '>
        <div className="row">
            <div className="col">
                <h4 className='mt-3'>POLIZA DE GARANTIA LEGAL</h4>
            </div>
            <div className="col text-end">
                <img src="/img/logo.png" width={60} height={60} alt="" />
                <h6>FOLIO:</h6>
            </div>
        </div>
        <p className='mt-2'>
            <strong>Importado y Distribuido por:</strong> EMOBILITY OPERATIONS, S. DE R.L. DE C.V., con domicilio en Calle Añil, No. 237, Int. P, Col. Granjas México, Iztacalco, Ciudad de México, C.P. 08400., con línea telefónica número 55 5256 8099

        </p>
        <p className='mt-3'>
            <strong>
            Condiciones de la Garantía
            </strong>
        </p>
        <p className='mt-2'>
        Garantiza este producto por el término de 1 año(s) o hasta un kilometraje recorrido según el tipo de vehículo (patinetas eléctricas hasta 2 000 km bicicletas eléctricas hasta 2 000 km y en motocicletas eléctricas 13 000 km), lo primero que ocurra en sus partes, componentes y mano de obra contra cualquier defecto de fabricación y funcionamiento a partir de la fecha de entrega al consumidor sin costo adicional. <br></br>

    EMOBILITY OPERATIONS, S. DE R.L. DE C.V. se compromete a sustituir el producto, así como los accesorios defectuosos del mismo absorbiendo los gastos de transportación que se deriven de su cumplimiento. El tiempo de reposición del producto al consumidor en ningún caso será mayor a 90 días contados a partir de la recepción de la notificación del Centro de Servicio Autorizado Mandarina.bike (CSA). <br></br>

    Para hacer efectiva esta garantía, el requisito es la presentación del producto en un CSA Mandarina.bike junto con esta póliza debidamente sellada por el establecimiento que lo vendió, o la factura, o recibo o comprobante, en el consten los datos específicos del producto objeto de la compraventa y marcar sin costo en días hábiles al teléfono 55 5160 1768 para confirmar el cambio; para la Ciudad de México acudir a la dirección del CSA Centro de Servicio Autorizado, con domicilio en Sonora180, Hipódromo, Cuauhtémoc, 06100, CDMX. Para el resto del país, el cliente debe acudir a CSA más cercano a su domicilio. Una vez verificado y autorizado por el CSA, el costo del envío y la mano de obra corren por cuenta del importador.
        </p>
        <div className='mt-3'>
            <strong>ESTA GARANTÍA NO ES VÁLIDA EN LOS SIGUIENTES CASOS:</strong>
            <ul className="list-group list-group-flush w-75 ms-auto me-auto">
                <li className="list-group-item">
                a. Cuando el producto ha sido utilizado en condiciones distintas a las normales
                </li>
                <li className="list-group-item">
                b. Cuando el producto no hubiese sido operado de acuerdo con el instructivo de uso que se le acompaña
                </li>
                <li className="list-group-item">
                c. Cuando el producto ha sido alterado o reparado por personas no autorizadas por EMOBILITY OPERATIONS, S. DE R.L. DE C.V.
                </li>
                <li className="list-group-item">
                d. Esta garantía no cubre los daños o defectos resultantes de no seguir las instrucciones del manual del propietario, accidentes (caídas y/o golpes), mal uso, negligencia, abuso, uso comercial indebido, modificación o montaje incorrecto. Igualmente, la garantía no cubre si el conductor o usuario no cumple con las especificaciones técnicas del manual, como peso, edad o cualquiera otra medida que garantice el buen funcionamiento del vehículo.
                </li>
                <li className="list-group-item">
                e. Esta garantía no cubre los daños por uso indebido de las características del vehículo: peso del conductor, velocidad máxima, manipulación de las características de fábrica y generación de potencia indebida del motor.
                </li>
                <li className="list-group-item">
                f. Los componentes eléctricos no son susceptibles de garantía si estos fueron expuestos a agua directa o presion.
                </li>
                <li className="list-group-item">
                g. El producto se hubiese utilizado en condiciones distintas a las normales. Abuso, uso indebido, uso imprudente, negligencia o uso comercial. Conducir a una velocidad insegura en calle pavimentada, conducir a una velocidad insegura en calle sin pavimentar, conducir sobre obstáculos, carrera amateur, carrera profesional, uso en deportes en zonas rurales, daño por fuego, daño por agua, daño químico, uso del vehículo en con carga y peso excesivo
                </li>
                <li className="list-group-item">
                h. Esta garantía no cubre el desgaste normal de sus productos consumibles, por ejemplo: llantas, cámaras de aire, pastillas de freno, cadenas, acelerador de mano, maneta de frenado, entre otros.
                </li>
                <li className="list-group-item">
                i. Esta garantía no cubre las piezas dañadas por un intento de reparación a menos que sea realizado por un centro de reparación autorizado de Mandarina.bike.
               </li>
               <li className="list-group-item">
               j. Esta garantía no cubre ninguna modificación no autorizada realizada a los vehículos y/o a sus componentes
               </li>
               <li className="list-group-item">
               k. Esta garantía cubre únicamente productos comercializados dentro de la República Mexicana por EMOBILITY OPERATIONS, S. DE R.L. de C.V. o sus distribuidores autorizados
               </li>


            </ul>
        </div>
        <p className='mt-3'>
            <strong>IMPORTANTE:</strong>
            <br />
            La garantía no es válida cuando el producto ha sido utilizado con accesorios o piezas no aprobadas por EMOBILITY OPERATIONS, S. DE R.L. DE C.V.
        </p>
        <div className="row">
            <div className="col">
            <table className='table'>
                <tbody>
                <tr>
                    <th scope='row'>Producto</th>
                    <td><input type="text" className='form-control'  readOnly  defaultValue={tipo} /></td>
                </tr>
                <tr>
                    <th scope='row'>Marca</th>
                    <td><input type="text" className='form-control' readOnly  defaultValue={marca}  /></td>
                </tr>
                <tr>
                    <th scope='row'>Modelo</th>
                    <td><input type="text" className='form-control' readOnly  defaultValue={modelo}  /></td>
                </tr>
                <tr>
                    <th scope='row'>NIV</th>
                    <td><input type="text" className='form-control' readOnly  defaultValue={niv}  /></td>
                </tr>
                </tbody>
            </table>  
                
            </div>
            <div className="col">
            <table className='table'>
                <tbody>
                <tr>
                    <th scope='row'>N° Bateria</th>
                    <td><input type="text" className='form-control'  readOnly defaultValue={bateria} /></td>
                </tr>
                <tr>
                    <th scope='row'>N° Cargador</th>
                    <td><input type="text" className='form-control'  readOnly defaultValue={cargador} /></td>
                </tr>
                <tr>
                    <th scope='row'>N° Motor</th>
                    <td><input type="text" className='form-control'  readOnly defaultValue={motor}/></td>
                </tr>
                <tr>
                    <th scope='row'>Fecha de entrega</th>
                    <td><input type="text" className='form-control'   readOnly defaultValue={fechaActual} /></td>
                </tr>
                </tbody>
            </table>  
            
            
            
            </div>
            <p className='text-center mt-3'>
                <strong>
                AVISO DE PRIVACIDAD
                </strong>
            </p>
            <p className='mt-2'>
            De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares, el Presente Aviso de Privacidad prevé las políticas, procedimientos y lineamientos a implementarse para Emobility Operations, S.R.L. de C.V. relacionadas con la obtención, uso y divulgación de sus datos personales
            </p>
            <p className='text-center mt-3'>
                <strong>
                Responsable de los datos personales
                </strong>
            </p>
            <p className='mt-2'>
            Emobility Operations S.R.L. de C.V. (en adelante referida como “La Responsable” o “eMobility”) con domicilio en Añil 237 Col. Granjas Mexico CP.08400 Alcaldía Iatacalco, Ciudad de México, es la Responsable de la obtención,dovulgación,almacenamiento,uso,manejo,aprovechamiento, y/o disposición de los datos personales que recaba de sus clientes y usuarios del sitio web www.mandarina.bike (En adelante referidos como “Titulares”)
            </p>
            <div>
            <div className="border w-50 border-dark text-center ms-auto me-auto" >
                <SignatureCanvas penColor='green'
                                    canvasProps={{   className: 'sigCanvas2 w-100 h-100'}} ref={sigCanvas2}  clearOnResize={false} />
                <label className='text-center'></label>
        </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Garantia
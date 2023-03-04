import { createContext , useState , useEffect } from "react"
import jsPDF from "jspdf";
import  autoTable  from 'jspdf-autotable';
import { imgData1 } from "./ImgData";

export const VentaContext = createContext()

function VentaContextProvider({children}) {
    const [concepto,setconcepto] = useState('')
    const [sucursal,setsucursal] = useState('')

    const [fechaActual, setFechaActual] = useState(new Date().toISOString().substring(0, 10))
    const [folio,setfolio] = useState('')
    const [vendedor,setvendedor] = useState('')
    const [cliente,setcliente] = useState('')
    const [tipo,settipo] = useState()
    const [niv,setniv] = useState('')
    const [sku,setsku] = useState('')
    const [cargador ,setcargador] = useState('')
    const [motor ,setmotor] = useState('')
    const [bateria ,setbateria]= useState('')
    const [marca ,setmarca]= useState('')
    const [modelo ,setmodelo]= useState('')

    const [Marco,setMarco] =useState({'Concepto':'Marco','Status':'','Observaciones':''})
    const [Display,setDisplay] =useState({'Concepto':'Display','Status':'','Observaciones':''})
    const [Asiento,setAsiento] =useState({'Concepto':'Asiento','Status':'','Observaciones':''})
    const [Sistema,setSistema] =useState({'Concepto':'Sistema','Status':'','Observaciones':''})
    const [Verificacion,setVerificacion] =useState({'Concepto':'Verificacion','Status':'','Observaciones':''})
    const [Acelerador,setAcelerador] =useState({'Concepto':'Acelerador','Status':'','Observaciones':''})
    const [Frenos,setFrenos] =useState({'Concepto':'Frenos','Status':'','Observaciones':''})
    const [Ruedas,setRuedas] =useState({'Concepto':'Ruedas','Status':'','Observaciones':''})
    const [Claxon,setClaxon] =useState({'Concepto':'Claxon','Status':'','Observaciones':''})
    const [Luces,setLuces] =useState({'Concepto':'Luces','Status':'','Observaciones':''})
    const [Espejos,setEspejos] =useState({'Concepto':'Espejos','Status':'','Observaciones':''})
    const [Salpicaderas,setSalpicaderas] =useState({'Concepto':'Salpicaderas','Status':'','Observaciones':''})
    const [Herramienta,setHerramienta] =useState({'Concepto':'Herramienta','Status':'','Observaciones':''})
    const [Juego,setJuego] =useState({'Concepto':'Juego','Status':'','Observaciones':''})
    const [Bateria,setBateria] =useState({'Concepto':'Batería','Status':'','Observaciones':''})
    const [Cargador,setCargador] =useState({'Concepto':'Cargador','Status':'','Observaciones':''})
    const [Aditamentos,setAditamentos] =useState({'Concepto':'Aditamentos','Status':'','Observaciones':''})
    const [Manuales,setManuales] =useState({'Concepto':'Manuales','Status':'','Observaciones':''})
    const [Motor,setMotor] =useState({'Concepto':'Motor','Status':'','Observaciones':''})
    const [Alarma,setAlarma] =useState({'Concepto':'Alarma','Status':'','Observaciones':''})
    const [Switch,setSwitch] =useState({'Concepto':'Switch','Status':'','Observaciones':''})
    const [Reflactantes,setReflactantes] =useState({'Concepto':'Reflactantes','Status':'','Observaciones':''})
    const [firma1,setfirma1] =useState({'Concepto':'firma1','Status':'','Observaciones':''})
    const [firma2,setfirma2] =useState({'Concepto':'firma2','Status':'','Observaciones':''})
    
    // Zona de useEffect()

    useEffect(()=>{},
    [marca,modelo,tipo,vendedor,cliente,motor,niv,fechaActual, bateria,cargador])


    function CambiarParametro(objeto,propiedad,valor,seteador) {
      const objeto_modifica = {...objeto}

      objeto_modifica[propiedad] = valor
      seteador(objeto_modifica)


      
    }




    

    function Crearpdf(){

        
        var pdf = new jsPDF();
        

        

        //Proceso para la imagen del encabezado
        var pageWidth = pdf.internal.pageSize.width;
        var x = (pageWidth/2)-35
        var pageHeihgt = pdf.internal.pageSize.height
        
        pdf.addImage(imgData1,"PNG",x,1,70,48)
        
        //Proceos para los datos generales
        var mitad = pageWidth/2
        //Aca van los titulos
        pdf.setFont("Helvetica","Bold");
        pdf.setFontSize(17)
        pdf.text(mitad-30, 58, 'ORDEN DE ENTREGA')
        //Aca van los subtituos
        pdf.setFontSize(12)
        pdf.text(14,78,'Datos Generales')
        pdf.text(14,115,'Datos Vehiculo')
        //Aca va el texto normal


        pdf.setFontSize(12)
        pdf.setFont("Helvetica",'');
        //Aca va lo que esta a la izquierda
        pdf.text(mitad+30, 68, fechaActual);
        pdf.text(mitad+68, 74, 'Folio:'+folio);
        //Aca va lo que va a la derecha

        pdf.text(14,86,'Concepto: '+concepto)
        pdf.text(14,93,'Sucursal: '+sucursal)
        pdf.text(14,100,'Cliente: '+cliente)
        pdf.text(14,107,'Vendedor: '+vendedor)

        pdf.text(14,180,'Acepto que he recibido por parte de E-mobility Operations toda la información para el uso del vehículo eléctrico que acabo de adquirir, además tengo el conocimiento de la importancia de leer el Manual de Usuario y el Manual de Garantía las cuales están en  la siguiente dirección: https://www.mandarina.bike/pages/manuales-de-vehiculos y estudiar las RECOMENDACIONES DE CARGA Y USO DE LAS BATERIAS.  También confirmo que he recibido impreso la Orden de Entrega a satisfacción donde incluye la Póliza de Garantía Legal y el Manual de Inicio Rápido.  Si he recibido el vehículo por fuera de las instalaciones de E-mobility Operations debo enviar éste documento firmado, en caso de no hacerlo, acepto que todos los documentos y manuales fueron entregados a satisfacción.',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.textWithLink("Garantía",18,270,{url:'https://www.google.com/?hl=es'})
        pdf.textWithLink("Nuestro Pacto",84,270,{url:'https://www.google.com/?hl=es'})
        pdf.textWithLink("Terminos y Condiciones",149,270,{url:'https://www.google.com/?hl=es'})

        // Aca van la vinetas

        pdf.setTextColor(254,144,21)
        pdf.setFontSize(14)

        pdf.text('»',14,270)
        pdf.text('»',80,270)
        pdf.text('»',145,270)

        autoTable(pdf,{
          columnStyles:{0:{halign:'left',fillColor:[254,144,21],textColor:0,lineColor:[0,0,0],lineWidth:.2},
                        1:{fillColor:[252,246,239],lineColor:[0,0,0],lineWidth:.2}},
          margin:{top:120},
          body:[
            ['Tipo Unidad:',tipo],
            ['SKU',sku],
            ['NIV',niv],
            ['N° Cargador',cargador],
            ['N° Motor',motor],
            ['N° Bateria',bateria],
            
          ]
        })


        pdf.addPage()

        // Aca van los subtitulos pagina 2
        pdf.setTextColor(0,0,0)
        pdf.setFont('Helvetica','Bold')
        pdf.setFontSize(12)
        pdf.text(14,28,'Check List')

        //Aca van las firmas

        pdf.setFont('Helvetica','')

        pdf.addImage(firma1,"PNG",14,210,70,48)
        pdf.text(28,265,'Asesor Comercial \n'+vendedor)

        pdf.addImage(firma2,"PNG",mitad+14,210,70,48)
        pdf.text(mitad+28,265,'Cliente \n'+cliente)
        console.log(Marco.Concepto)
        //Aca va el check list
        autoTable(pdf,{
          margin:{top:36},
          headStyles:{fillColor:[254,144,21]},
          alternateRowStyles:{fillColor:[255,231,206]},
          head:[['Check list','Estatus','Observaciones']],
          body:[
            [Marco.Concepto,Marco.Status,Marco.Observaciones],
            [Display.Concepto,Display.Status,Display.Observaciones],
            [Asiento.Concepto,Asiento.Status,Asiento.Observaciones],
            [Sistema.Concepto,Sistema.Status,Sistema.Observaciones],
            [Verificacion.Concepto,Verificacion.Status,Verificacion.Observaciones],
            [Acelerador.Concepto,Acelerador.Status,Acelerador.Observaciones],
            [Frenos.Concepto,Frenos.Status,Frenos.Observaciones],
            [Ruedas.Concepto,Ruedas.Status,Ruedas.Observaciones],
            [Claxon.Concepto,Claxon.Status,Claxon.Observaciones],
            [Luces.Concepto,Luces.Status,Luces.Observaciones],
            [Espejos.Concepto,Espejos.Status,Espejos.Observaciones],
            [Salpicaderas.Concepto,Salpicaderas.Status,Salpicaderas.Observaciones],
            [Herramienta.Concepto,Herramienta.Status,Herramienta.Observaciones],
            [Juego.Concepto,Juego.Status,Juego.Observaciones],
            [Bateria.Concepto,Bateria.Status,Bateria.Observaciones],
            [Cargador.Concepto,Cargador.Status,Cargador.Observaciones],
            [Aditamentos.Concepto,Aditamentos.Status,Aditamentos.Observaciones],
            [Manuales.Concepto,Manuales.Status,Manuales.Observaciones],
            [Motor.Concepto,Motor.Status,Motor.Observaciones],
            [Alarma.Concepto,Alarma.Status,Alarma.Observaciones],
            [Switch.Concepto,Switch.Status,Switch.Observaciones],
            [Reflactantes.Concepto,Reflactantes.Status,Reflactantes.Observaciones],
          ]
        })


        

        // Aca viene la poliza

        pdf.addPage()

        pdf.setTextColor(0,0,0)
        pdf.setFont('Helvetica','Bold')
        pdf.setFontSize(12)
        pdf.text(14,28,'Poliza de Garantía')

        pdf.setFontSize(10)

        pdf.text(14,50, 'Condiciones de la Garantía:')
        pdf.text(14,115, 'ESTA GARANTIA NO ES VALIDA EN LOS SIGUIENTES CASOS:')
        pdf.text(14,pageHeihgt-30, 'IMPORTANTE:')

        pdf.setFontSize(8)

        pdf.setFont('Helvetica','')
        pdf.text(14,36,'Importado y Distribuido por: EMOBILITY OPERATIONS, S. DE R.L. DE C.V., con domicilio en Calle Añil, No. 237, Int. P, Col. Granjas México, Iztacalco, Ciudad de México, C.P. 08400., con línea telefónica número 55 5256 8099',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.text(14,55,'Garantiza este producto por el término de 1 año(s) o hasta un kilometraje recorrido según el tipo de vehículo (patinetas eléctricas hasta 2 000 km bicicletas eléctricas hasta 2 000 km y en motocicletas eléctricas 13 000 km), lo primero que ocurra en sus partes, componentes y mano de obra contra cualquier defecto de fabricación y funcionamiento a partir de la fecha de entrega al consumidor sin costo adicional.',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})


        pdf.text(14,70,'EMOBILITY OPERATIONS, S. DE R.L. DE C.V. se compromete a sustituir el producto, así como los accesorios defectuosos del mismo absorbiendo los gastos de transportación que se deriven de su cumplimiento. El tiempo de reposición del producto al consumidor en ningún caso será mayor a 90 días contados a partir de la recepción de la notificación del Centro de Servicio Autorizado Mandarina.bike (CSA).',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.text(14,83,'Para hacer efectiva esta garantía, el requisito es la presentación del producto en un CSA Mandarina.bike junto con esta póliza debidamente sellada por el establecimiento que lo vendió, o la factura, o recibo o comprobante, en el consten los datos específicos del producto objeto de la compraventa y marcar sin costo en días hábiles al teléfono 55 5160 1768 para confirmar el cambio; para la Ciudad de México acudir a la dirección del CSA Centro de Servicio Autorizado, con domicilio en Sonora180, Hipódromo, Cuauhtémoc, 06100, CDMX. Para el resto del país, el cliente debe acudir a CSA más cercano a su domicilio. Una vez verificado y autorizado por el CSA, el costo del envío y la mano de obra corren por cuenta del importador.',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.text(14,pageHeihgt-25,'La garantía no es válida cuando el producto ha sido utilizado con accesorios o piezas no aprobadas por EMOBILITY OPERATIONS, S. DE R.L. DE C.V.',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        autoTable(pdf,{
          margin:{top:120},
          body:[
            ['»','Cuando el producto ha sido utilizado en condiciones distintas a las normales'],
            ['»','Cuando el producto no hubiese sido operado de acuerdo con el instructivo de uso que se le acompaña'],
            ['»','Cuando el producto ha sido alterado o reparado por personas no autorizadas por EMOBILITY OPERATIONS, S. DE R.L. DE Cv'],
            ['»','Esta garantía no cubre los daños o defectos resultantes de no seguir las instrucciones del manual del propietario, accidentes (caídas y/o golpes), mal uso, negligencia, abuso, uso comercial indebido, modificación o montaje incorrecto. Igualmente, la garantía no cubre si el conductor o usuario no cumple con las especificaciones técnicas del manual, como peso, edad o cualquiera otra medida que garantice el buen funcionamiento del vehículo.'],
            ['»','Esta garantía no cubre los daños por uso indebido de las características del vehículo: peso del conductor, velocidad máxima, manipulación de las características de fábrica y generación de potencia indebida del motor.'],
            ['»','Los componentes eléctricos no son susceptibles de garantía si estos fueron expuestos a agua directa o presión'],
            ['»','El producto se hubiese utilizado en condiciones distintas a las normales. Abuso, uso indebido, uso imprudente, negligencia o uso comercial. Conducir a una velocidad insegura en calle pavimentada, conducir a una velocidad insegura en calle sin pavimentar, conducir sobre obstáculos, carrera amateur, carrera profesional, uso en deportes en zonas rurales, daño por fuego, daño por agua, daño químico, uso del vehículo en con carga y peso excesivo'],
            ['»','Esta garantía no cubre el desgaste normal de sus productos consumibles, por ejemplo: llantas, cámaras de aire, pastillas de freno, cadenas, acelerador de mano, maneta de frenado, entre otro'],
            ['»','Esta garantía no cubre las piezas dañadas por un intento de reparación a menos que sea realizado por un centro de reparación autorizado de Mandarina.bike.'],
            ['»','Esta garantía no cubre ninguna modificación no autorizada realizada a los vehículos y/o a sus componente'],
            ['»','Esta garantía cubre únicamente productos comercializados dentro de la República Mexicana por EMOBILITY OPERATIONS, S. DE R.L. de C.V. o sus distribuidores autorizados.']
            
          ]
        })


        pdf.addPage()


        autoTable(pdf,{
          columnStyles:{0:{halign:'left',fillColor:[254,144,21],textColor:0,lineColor:[0,0,0],lineWidth:.2},
                        1:{fillColor:[252,246,239],lineColor:[0,0,0],lineWidth:.2}},
          margin:{top:30},
          body:[
            ['Marca y modelo',marca],
            ['Tipo Unidad:',tipo],
            ['SKU',sku],
            ['NIV',niv],
            ['N° Cargador',cargador],
            ['N° Motor',motor],
            ['N° Bateria',bateria],
            
          ]
        })

        pdf.text(14,90,'En caso de requerir consumibles, accesorios, partes y componentes usted podrá enviar un correo electrónico a servicio@mandarina.bike para que se proporcione información de donde podrá obtenerlos. Para mayor información de nuestros productos, podrá visitar nuestra página https://www.mandarina.bike/pages/garantias donde encontrará el Manual de Uso y Garantía, o acudir a la dirección de CSA Centro de Servicio Autorizado, con domicilio en Sonora 180, Hipódromo, Cuauhtémoc, 06100, Ciudad de México, CDMX',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.text(14,122,'De conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares, el Presente Aviso de Privacidad prevé las políticas, procedimientos y lineamientos a implementarse para Emobility Operations, S.R.L. de C.V. relacionadas con la obtención, uso y divulgación de sus datos personales.',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.text(14,142,'Emobility Operations S.R.L. de C.V. (en adelante referida como “La Responsable” o “eMobility”) con domicilio en Añil 237 Col. Granjas Mexico CP.08400 Alcaldía Iatacalco, Ciudad de México, es la Responsable de la obtención,dovulgación,almacenamiento,uso,manejo,aprovechamiento, y/o disposición de los datos personales que recaba de sus clientes y usuarios del sitio web www.mandarina.bike (En adelante referidos como “Titulares”)',{align:"justify",lineHeightFactor: 1.5,maxWidth:pageWidth-28})

        pdf.setFont('Helvetica','Bold')
        pdf.setFontSize(10)

        pdf.text('AVISO DE PRIVACIDAD',mitad-18,115)
        pdf.text('RESPONSABLE DE LOS DATOS PERSONALES',mitad-36,135)

        pdf.addImage(firma2,"PNG",mitad-35,150,70,48)
        pdf.text("Nombre completo y firma del cliente",mitad-30,195)
        pdf.text(cliente,mitad-10,202)


        

        
        pdf.save("Checklist.pdf")
            }
    const data = {Switch, Reflactantes,Salpicaderas, Herramienta, Juego, Bateria, Cargador, Aditamentos, Manuales, Motor, Alarma, Display, Asiento, Sistema, Verificacion, Acelerador, Frenos, Ruedas, Claxon, Luces, Espejos,cliente,vendedor,tipo,modelo,marca,motor,niv,bateria,cargador,fechaActual,Marco,CambiarParametro,setFrenos,setmodelo,Crearpdf,setconcepto,setsucursal,setFechaActual,setfolio,setvendedor,setcliente,settipo,setniv,setsku,setcargador,setmotor,setbateria,setmarca,setMarco,setDisplay,setAsiento,setSistema,setVerificacion,setAcelerador,setRuedas,setClaxon,setLuces,setEspejos,setSalpicaderas,setHerramienta,setJuego,setBateria,setCargador,setAditamentos,setManuales,setMotor,setAlarma,setSwitch,setReflactantes,setfirma1,setfirma2}
  return (
    <VentaContext.Provider value={data}>
        {children}
    </VentaContext.Provider>
  )
}

export default VentaContextProvider
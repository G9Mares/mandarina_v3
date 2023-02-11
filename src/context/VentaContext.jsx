import { createContext , useState } from "react"
import jsPDF from "jspdf";
import  autoTable  from 'jspdf-autotable';

export const VentaContext = createContext()

function VentaContextProvider({children}) {
    const [concepto,setconcepto] = useState('')
    const [sucursal,setsucursal] = useState('')

    const [fecha,setfecha] = useState('')
    const [folio,setfolio] = useState('')
    const [vendedor,setvendedor] = useState('')
    const [cliente,setcliente] = useState('')
    const [tipo,settipo] = useState('')
    const [niv,nivnte] = useState('')
    const [sku,setsku] = useState('')
    const [cargador ,setcargador] = useState('')
    const [motor ,setmotor] = useState('')
    const [bateria ,setbateria]= useState('')
    const [marca ,setmarca]= useState('')

    const [Marco,setMarco] =useState('')
    const [Display,setDisplay] =useState('')
    const [Asiento,setAsiento] =useState('')
    const [Sistema,setSistema] =useState('')
    const [Verificacion,setVerificacion] =useState('')
    const [Acelerador,setAcelerador] =useState('')
    const [Ruedas,setRuedas] =useState('')
    const [Claxon,setClaxon] =useState('')
    const [Luces,setLuces] =useState('')
    const [Espejos,setEspejos] =useState('')
    const [Salpicaderas,setSalpicaderas] =useState('')
    const [Herramienta,setHerramienta] =useState('')
    const [Juego,setJuego] =useState('')
    const [Batería,setBatería] =useState('')
    const [Cargador,setCargador] =useState('')
    const [Aditamentos,setAditamentos] =useState('')
    const [Manuales,setManuales] =useState('')
    const [Motor,setMotor] =useState('')
    const [Alarma,setAlarma] =useState('')
    const [Switch,setSwitch] =useState('')
    const [Reflactantes,setReflactantes] =useState('')
    const [firma1,setfirma1] =useState('')
    const [firma2,setfirma2] =useState('')
    


    

    function Crearpdf(){
        var imgData = 'data:image/png;base64,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'
        
        var pdf = new jsPDF();
        

        

        //Proceso para la imagen del encabezado
        var pageWidth = pdf.internal.pageSize.width;
        var x = (pageWidth/2)-35
        var pageHeihgt = pdf.internal.pageSize.height
        
        pdf.addImage(imgData,"PNG",x,1,70,48)
        
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
        pdf.text(mitad+30, 68, fecha);
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

        pdf.text(28,260,firma1)
        pdf.text(28,265,'Asesor Comercial \nIgnacio salgero')
        pdf.text(mitad+14,260,firma2)
        pdf.text(mitad+14,265,'Cliente \nJulio Brasas')
        //Aca va el check list
        autoTable(pdf,{
          margin:{top:36},
          headStyles:{fillColor:[254,144,21]},
          alternateRowStyles:{fillColor:[255,231,206]},
          head:[['Check list','Si','No','Observaciones']],
          body:[
            [Marco],
            [Display],
            [Asiento],
            [Sistema],
            [Verificacion],
            [Acelerador],
            [Ruedas],
            [Claxon],
            [Luces],
            [Espejos],
            [Salpicaderas],
            [Herramienta],
            [Juego],
            [Batería],
            [Cargador],
            [Aditamentos],
            [Manuales],
            [Motor],
            [Alarma],
            [Switch],
            [Reflactantes],
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

        pdf.text(firma2,mitad-35,170)
        pdf.text("Nombre completo y firma del cliente",mitad-30,175)


        

        
        pdf.save("Checklist.pdf")
            }
    const data = {Crearpdf,setconcepto,setsucursal,setfecha,setfolio,setvendedor,setcliente,settipo,nivnte,setsku,setcargador,setmotor,setbateria,setmarca,setMarco,setDisplay,setAsiento,setSistema,setVerificacion,setAcelerador,setRuedas,setClaxon,setLuces,setEspejos,setSalpicaderas,setHerramienta,setJuego,setBatería,setCargador,setAditamentos,setManuales,setMotor,setAlarma,setSwitch,setReflactantes,setfirma1,setfirma2}
  return (
    <VentaContext.Provider value={data}>
        {children}
    </VentaContext.Provider>
  )
}

export default VentaContextProvider
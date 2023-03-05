import React , {createContext , useState , useEffect,useContext} from 'react'
import { VentaContext } from './VentaContext'

export const IntegracionContext = createContext()

function IntegracionContextProvider({children}) {

    const [token,settoken] = useState('')
    const [numpedid,setnumpedid] = useState('')
    const [informaciongeneral,setinformaciongeneral] = useState('sin_asignar')
    const [lista_vehiculos,setlista_vehiculos] = useState()
    const {numtel,correo,concepto,sucursal,fechaActual,folio,vendedor,cliente,tipo,niv,sku,cargador,motor,bateria,marca,modelo,
      setnumtel,setcorreo,setconcepto,setsucursal,setfechaActual,setfolio,setvendedor,setcliente,settipo,setniv,setsku,setcargador,setmotor,setbateria,setmarca,setmodelo} = useContext(VentaContext)

    
      
    function logear(usuario,pasword,e) {
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "company":559,
        "user": usuario,
        "pass": pasword
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://emobility.saasmexico.net/api/v3/login", requestOptions)
        .then(response => response.json()) // Parsear la respuesta como un objeto JSON
        .then(result => {
            settoken(result.token)
        })
        .catch(error => console.log('error', error));
            
    }

    useEffect(()=>{
        if (token && numpedid) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+token);
            myHeaders.append("Cookie", "GCLB=CLzl_Mv6m7SloAE");
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
              };
              
              fetch("https://demostracion.saasmexico.net/api/v3/sales/sales_order/"+numpedid, requestOptions)
                .then(response => response.json())
                .then(result => {
                  setinformaciongeneral(result)
                })
                .catch(error => console.log('error', error));

            
        }
    }
    ,[token])


    useEffect(()=>{
      if (informaciongeneral !== 'sin_asignar') {
        console.log(informaciongeneral)
        setnumtel(informaciongeneral.contact_phone)
        setcorreo(informaciongeneral.contact_email)
        setconcepto('Venta')
        setsucursal(informaciongeneral.from_stk_loc)
        setfolio(informaciongeneral.order_no)
        setvendedor(informaciongeneral.user.real_name)
        setcliente(informaciongeneral.deliver_to)
        setlista_vehiculos(informaciongeneral.detalles)

       
        
      }
    },[informaciongeneral])

    const data = {logear,setnumpedid,numpedid,lista_vehiculos}


    useEffect(()=>{
      console.log(sucursal)

    },[lista_vehiculos,numtel])
  return (
    <IntegracionContext.Provider value={data}>
        {children}

    </IntegracionContext.Provider>
  )
}

export default IntegracionContextProvider
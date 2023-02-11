import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Checklist from "./componentes/checklist/Checklist";
import PdfDocument from "./componentes/pdfdocument/PdfDocument";
import VentaContextProvider from "./context/VentaContext";
function App() {
  return (
    <BrowserRouter>
    <VentaContextProvider>
      <Navbar/>
      <Routes>
        <Route element={<Checklist/>} path='CheckList' />
        <Route element={<PdfDocument/>} path='/Document' />
                  
      </Routes>
      </VentaContextProvider>
    </BrowserRouter>
  );
}

export default App;

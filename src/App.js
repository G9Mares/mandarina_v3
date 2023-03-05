import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./componentes/navbar/Navbar";
import Checklist from "./componentes/checklist/Checklist";
import VentaContextProvider from "./context/VentaContext";
import IntegracionContextProvider from "./context/IntegracionContext";

import CheckListSASS from "./componentes/checklistSASS/ChecklistSASS";

function App() {
  return (
    <BrowserRouter>

    <VentaContextProvider>
    <IntegracionContextProvider>
      <Navbar/>
      <Routes>
        <Route element={<Checklist/>} path='CheckList' />
        <Route element={<CheckListSASS/>} path='/CheckList_SASS' />
                  
      </Routes>
    </IntegracionContextProvider>
    </VentaContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { Navbar } from "./components/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Certificados } from "./pages/Certificados";
import { certificados } from "./types/Certificados";


export function App(){
  return(
    <main>
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/certificados" element={<Certificados certificado={certificados}/>} />
          </Routes>
        </div>

      </div>
     
    </BrowserRouter>  

    </main>
    
   
  )
}
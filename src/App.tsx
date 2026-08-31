import { Navbar } from "./components/Navbar";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


export function App(){
  return(
    <main>
      <BrowserRouter>
      <Navbar/>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>

      </div>
     
    </BrowserRouter>  

    </main>
    
   
  )
}
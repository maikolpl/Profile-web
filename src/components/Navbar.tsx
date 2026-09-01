import { NavLink } from 'react-router-dom'
import './Navbar.css'


export function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbarContainer">
                <NavLink to='/' className='navbarLink'>
                <h1 className="titleNavbar">Maikol Plazas</h1>
                </NavLink>
            <div className="navbarRight">
                <ul className="navbarList">
                    <li className="navbarListItem">Proyectos</li>
                    <NavLink to='/certificados' className='navbarLink'>
                    <li className="navbarListItem">Certificados</li>
                    </NavLink>
                    
                    <li className="navbarListItem">Descargar CV</li>
                </ul>
            </div>

            </div>
         

        </nav>
        
    )
}
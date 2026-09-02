import { NavLink } from 'react-router-dom'
import './Navbar.css'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


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

                        <li className="navbarListItem">
                            <a 
                            href='/Cv_Maikol_Plazas.pdf'
                            download='Cv_Maikol_Plazas.pdf'
                            className="btnDowloandCv">
                            <PictureAsPdfIcon/>Descargar Hoja de Vida
                            </a>
                        </li>
                    
                    
                </ul>
            </div>

            </div>
         

        </nav>
        
    )
}
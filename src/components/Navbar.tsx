import './Navbar.css'


export function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbarContainer">
            <h1 className="titleNavbar">Maikol Plazas</h1>
            <div className="navbarRight">
                <ul className="navbarList">
                    <li className="navbarListItem">Proyectos</li>
                    <li className="navbarListItem">Certificados</li>
                    <li className="navbarListItem">Descargar CV</li>
                </ul>
            </div>

            </div>
         

        </nav>
        
    )
}
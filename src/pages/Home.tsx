import './Home.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Home() {
    return (
        <main className="homeContainer">
            <section className="home">
                <div className="homeContent">
                    <h2 className="homeTitle">
                        HOLA, SOY <span className="highlight">MAIKOL PLAZAS</span>.<br />
                        DESARROLLADOR JUNIOR ESPECIALIZADO EN REACT Y TYPESCRIPT.
                    </h2>
                    
                    <p className="homeSubtitle">
                        Creando soluciones digitales eficientes y escalables. Apasionado por el desarrollo web y el aprendizaje continuo.
                    </p>
                    
                    <div className="homeButtons">
                        <a href="#proyectos" className="btn btnPrimary">Ver mi trabajo</a>
                        <a href="#contacto" className="btn btnSecondary">Contáctame</a>
                    </div>
                </div>
            </section>

            <section className="about">
                <span className="aboutTag">ABOUT ME</span>
                <h2 className="aboutTitle">CONSTRUYENDO EL FUTURO CON CÓDIGO LIMPIO.</h2>
                
                <div className="aboutText">
                    <p>
                        Desarrollador Front-End enfocado en la construcción de interfaces web modernas, reactivas e intuitivas. Me especializo en el ecosistema de React y TypeScript, aplicando buenas prácticas de arquitectura y código mantenible.
                    </p>
                    <p>
                        Mi enfoque principal está en el rendimiento, la experiencia de usuario y el constante aprendizaje de tecnologías clave para aportar valor en proyectos colaborativos y escalables.
                    </p>
                </div>
            </section>

            <footer id="contacto" className="footer">
                <div className="footerContainer">
                    
                    <div className="footerBrand">
                        <h3 className="footerLogo">Maikol Esteban Plazas Trujillo</h3>
                        <p className="footerDescription">
                            Desarrollador Front-End enfocado en crear experiencias web eficientes con React y TypeScript.
                        </p>
                    </div>

                    <div className="footerContact">
                        <h4 className="footerTitle">Contacto</h4>
                        <ul className="contactList">
                            <li>
                                <span> <WhatsAppIcon className='whatsAppIcon'/>     Teléfono / WhatsApp:</span> 
                                <a href="tel:+573000000000">+57 3157224846</a>
                            </li>
                            <li>
                                <span>📍 Dirección:</span> 
                                <p>Bogotá, Colombia</p>
                            </li>
                        </ul>
                    </div>

                    <div className="footerSocial">
                        <h4 className="footerTitle">Redes</h4>
                        <ul className="socialList">
                            <li>
                                <a href="https://github.com/maikolpl" target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon className='gitHubIcon'/>GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footerBottom">
                    <p>&copy; {new Date().getFullYear()} Maikol Plazas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </main>
    );
}
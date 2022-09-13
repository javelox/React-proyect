import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () =>{
    return(
        <header>
            <nav className="navegador">
                    <label className="titulo">Desarrollo ADSI <strong>Web</strong></label>
                <ul>
                    <div className="listado">
                        <Link to="/">INICIO</Link> 
                        <Link to="/Nosotros">NOSOTROS</Link>
                        <Link to="/Servicios">SERVICIOS</Link>
                        <Link to="/Contacto">CONTACTO</Link>
                    </div>
                </ul>
            </nav>
        </header>   
    )
}

export default Navbar
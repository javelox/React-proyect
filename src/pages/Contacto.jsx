import React from "react";
import Suscribete from "../components/Suscribete";

import '../style/contato.css'

const Contacto = () =>{
    return(
        <div className="contato">

            <Suscribete/>

            <div className="quehacemos">
              <h3>Qué hacemos</h3>
              <div className="parrafo_quehacemos">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error totam excepturi, temporibus sunt necessitatibus dolore quaerat aliquid eos amet commodi dolorem officiis inventore cupiditate maxime rerum, soluta ipsum? Consequatur!
                  Odit, nulla, vero ea non veniam maxime voluptate aut repellat est amet cupiditate unde facilis veritatis id explicabo nihil, corrupti voluptatibus quis exercitationem quasi! Quas, quaerat accusamus? Adipisci, beatae ex.</p>
              </div>
          </div>
          <div className="tituloservicios">
          <h2 className='Titulo_servicios'>Contacto</h2>
          </div>

          <div className="contacto">
              <h3>Nombre</h3>
              <div className="">
                <input type="text" placeholder="Ingresa tu nombre..." />
              </div>
          </div>
    
          <div className="contacto">
          <h3>Email</h3>
              <div className="">
                <input type="email" placeholder="Ingresa tu email..." />
              </div>
          </div>
    
          <div className="contacto">
          <h3>Telefono</h3>
              <div className="">
                <input type="number" placeholder="Ingresa tu telefono..." />
              </div>
          </div>

          <div className="contacto">
          <h3>Celular</h3>
              <div className="">
                <input type="number" placeholder="Ingresa tu celular..." />
              </div>
          </div>

          <div className="contacto">
          <h3>Mensaje :</h3>
              <div className="">
                <textarea placeholder="Ingresa tu mensaje" name="Mensaje" id="" cols="88" rows="8"></textarea>
              </div>
          </div>
          <div className="contacto">
            <button>Enviar</button>
          </div>

          <div className="mapa">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.0929941171112!2d-75.66852888356193!3d4.540896089015663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38f5aaa3ce06fb%3A0xc6110e95d9d69c9e!2sCl.%208%20%2318-79%20a%2018-1%2C%20Armenia%2C%20Quind%C3%ADo!5e0!3m2!1ses!2sco!4v1663101259297!5m2!1ses!2sco" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
    );

};
export default Contacto
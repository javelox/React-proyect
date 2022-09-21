import React from "react";
import Suscribete from "../components/Suscribete";
import "../style/Contacto.css";

const Contacto = () => {
  return (
    <div className="Contacto">
      <Suscribete />

      <div className="quehacemos">
        <h3>Qué hacemos</h3>
        <div className="parrafo_quehacemos">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            error totam excepturi, temporibus sunt necessitatibus dolore quaerat
            aliquid eos amet commodi dolorem officiis inventore cupiditate
            maxime rerum, soluta ipsum? Consequatur! Odit, nulla, vero ea non
            veniam maxime voluptate aut repellat est amet cupiditate unde
            facilis veritatis id explicabo nihil, corrupti voluptatibus quis
            exercitationem quasi! Quas, quaerat accusamus? Adipisci, beatae ex.
          </p>
        </div>
      </div>

      <div className="tituloservicios">
        <h2 className="Titulo_servicios">Contacto</h2>
      </div>

      <div className="formulario">
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
            <input type="text" placeholder="Ingresa tu telefono..." />
          </div>
        </div>

        <div className="contacto">
          <h3>Celular</h3>
          <div className="">
            <input type="text" placeholder="Ingresa tu celular..." />
          </div>
        </div>

        <div className="contacto">
          <h3>Mensaje :</h3>
          <div className="">
            <textarea
              name="mensaje"
              id=""
              rows="5"
              placeholder="Ingresa tu mensaje..."
            ></textarea>
          </div>
        </div>

        <div className="contacto">
          <button>Enviar</button>
        </div>
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3977.2931409960984!2d-75.67083553469256!3d4.541159194283394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d4.5416210999999995!2d-75.66856709999999!4m5!1s0x8e38f5aaa70689d1%3A0x46074d66ee20f3a2!2sSENA%20Centro%20de%20comercio%20y%20turismo%2C%20Carrera%2018%2C%20Armenia%2C%20Quind%C3%ADo!3m2!1d4.5410284!2d-75.6684646!5e0!3m2!1ses!2sco!4v1663101122938!5m2!1ses!2sco"
          width="350"
          height="250"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;

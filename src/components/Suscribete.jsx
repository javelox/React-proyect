import React from "react";

const suscribete = () => {
    return(

    <div className="suscribete">
        <div className="texto_suscribete">
          <h2>Suscríbete a nuestro boletín</h2>
        </div>
        <div className="input_suscribete">
          <input type="text" placeholder="Ingrese el Email..."/>
          <button type="submit">Suscribete</button>
        </div>
    </div>

    )
}

export default suscribete
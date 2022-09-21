import React from 'react'

const Servicio = (props) => {
  return (

    <div className="sevicio">
      <div className="servicio desarrolloweb">
        <h3>{props.titulo}</h3>
        <div className="parrafo_desarrolloweb">
          <p>{props.texto}</p>
          <div className="precio">
            <p>Precio: ${props.precio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicio
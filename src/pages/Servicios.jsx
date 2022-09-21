import React from 'react';
import Suscribete from '../components/Suscribete'
import Servicio from '../components/Servicio';

import '../style/Servicioss.css'

const Servicios = () => {
  return (
    <div className="Nosotros">

      <Suscribete />

      <div className="quehacemos">
        <h3>Qué hacemos</h3>
        <div className="parrafo_quehacemos">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error totam excepturi, temporibus sunt necessitatibus dolore quaerat aliquid eos amet commodi dolorem officiis inventore cupiditate maxime rerum, soluta ipsum? Consequatur!
            Odit, nulla, vero ea non veniam maxime voluptate aut repellat est amet cupiditate unde facilis veritatis id explicabo nihil, corrupti voluptatibus quis exercitationem quasi! Quas, quaerat accusamus? Adipisci, beatae ex.</p>
        </div>
      </div>

      <div className="tituloservicios">
        <h2 className='Titulo_servicios'>Servicios</h2>
      </div>

      <Servicio
        titulo='Diseño Web'
        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt atque ducimus corporis nesciunt suscipit, quis architecto, libero sequi, fugiat ad debitis provident culpa numquam pariatur aperiam nulla velit eaque!
              Ut minus libero doloremque veniam consequuntur tempore cumque quod sint deserunt assumenda blanditiis culpa tempora excepturi quis praesentium recusandae asperiores, reiciendis natus enim temporibus voluptates aliquid in nihil! Omnis, labore!
              Labore dolores quam dignissimos iure. A, expedita ipsa. Excepturi sint delectus cumque iusto, illo recusandae nihil incidunt! A provident quis, quia iusto id perferendis, dicta, impedit odio quo adipisci eius.'
        precio='3000000 - 1000000' />

      <Servicio
        titulo='Desarrollo Web'
        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt atque ducimus corporis nesciunt suscipit, quis architecto, libero sequi, fugiat ad debitis provident culpa numquam pariatur aperiam nulla velit eaque!
            Ut minus libero doloremque veniam consequuntur tempore cumque quod sint deserunt assumenda blanditiis culpa tempora excepturi quis praesentium recusandae asperiores, reiciendis natus enim temporibus voluptates aliquid in nihil! Omnis, labore!
            Labore dolores quam dignissimos iure. A, expedita ipsa. Excepturi sint delectus cumque iusto, illo recusandae nihil incidunt! A provident quis, quia iusto id perferendis, dicta, impedit odio quo adipisci eius.'
        precio='1000000' />

      <div className="hostingweb">
        <Servicio
          titulo='Hosting Web'
          texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi incidunt atque ducimus corporis nesciunt suscipit, quis architecto, libero sequi, fugiat ad debitis provident culpa numquam pariatur aperiam nulla velit eaque!
              Ut minus libero doloremque veniam consequuntur tempore cumque quod sint deserunt assumenda blanditiis culpa tempora excepturi quis praesentium recusandae asperiores, reiciendis natus enim temporibus voluptates aliquid in nihil! Omnis, labore!
              Labore dolores quam dignissimos iure. A, expedita ipsa. Excepturi sint delectus cumque iusto, illo recusandae nihil incidunt! A provident quis, quia iusto id perferendis, dicta, impedit odio quo adipisci eius.'
          precio='3000000' />
      </div>

    </div>

  );
}




export default Servicios
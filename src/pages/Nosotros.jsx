import React from 'react';
import Imagen from '../img/teclado.jpeg'
import Suscribete from '../components/Suscribete'
import '../style/Nosotross.css'

const Nosotros = () =>{
    return(
      <div className="Nosotros">

        <Suscribete/>

        <div className="nosotros_derecha">
              <h3>Qué hacemos</h3>
              <div className="parrafo_nosotros_derecha">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error totam excepturi, temporibus sunt necessitatibus dolore quaerat aliquid eos amet commodi dolorem officiis inventore cupiditate maxime rerum, soluta ipsum? Consequatur!
                  Odit, nulla, vero ea non veniam maxime voluptate aut repellat est amet cupiditate unde facilis veritatis id explicabo nihil, corrupti voluptatibus quis exercitationem quasi! Quas, quaerat accusamus? Adipisci, beatae ex.</p>
              </div>
          </div>

          <div className="nosotros">
              <h3>Nosotros</h3>
              <div className="parrafo_nosotros">
                  <p>LLorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt quibusdam itaque ad nisi, quas repellat, iste odio aliquid ex maiores! Minus ratione veniam dolorem. Rem asperiores corrupti fugit quaerat.
                  Optio placeat eum a quam rem ducimus tempora ea quo temporibus accusantium, quidem modi dolores at veritatis voluptates, quasi beatae error ab necessitatibus deseruntex fuga perferendis porro maxime? Voluptate.
                  Nesciunt cupiditate repellendus soluta amet aut, iusto unde, fugit obcaecati sapiente nulla quaerat temporibus maiores. Obcaecati impedit sunt tenetur consequatur cum,deleniti blanditiis, quibusdam dolorem sapiente officiis iste nulla sit.</p>
              </div>
          </div>
    
          <div className="nosotros_abajo">
              <div className="parrafo_nosotros_abajo">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam quam, aut inventore nostrum necessitatibus vel, accusamus laudantium praesentium et labore mollitia illum dolorem dicta. Ab unde reiciendis accusantium aliquid.
                  Porro iure aspernatur architecto dolor maxime beatae, officia, error ad iusto vero perferendis minima necessitatibus aliquid laborum dicta. Vero veritatis quam laborum provident autem vel modi id ipsam architecto minus!
                  Asperiores omnis deleniti rerum ullam sint nostrum laborum tempora atque inventore temporibus, eligendi autem et explicabo cum animi cupiditate esse. Aperiam dolores, cumque voluptate ullam doloremque illum numquam voluptatum maxime.
                  Suscipit, illum placeat expedita facere atque facilis voluptatem voluptatum nemo. Esse, culpa quasi! Consequuntur natus in hic, nemo ex dolore iure ratione quibusdam repellat eos! Excepturi voluptatibus eius impedit obcaecati.
                  Quibusdam minima quaerat quas delectus facilis! Soluta modi, libero iste odio architecto nam sapiente ut perferendis exercitationem delectus sunt, corporis ipsa eum ex labore earum enim. Doloremque itaque eum incidunt.</p>
              </div>
          </div>
    
          <div className="imagen">
              <img src={Imagen} alt=""/>
          </div>

    
      </div>
    
    );
}

export default Nosotros
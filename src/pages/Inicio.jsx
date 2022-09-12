import React from "react";
import Logo_css from '../img/logo_css.jpeg'
import Logo_html from '../img/logo_html.jpeg'
import Logopc from '../img/logopc.jpeg'
import '../style/inicio.css'

const Inicio = () =>{
    return(
        <div className="Inicio">
            <section class="inicio">
                <div class="texto_inicio">
                   <h1 class="titulo">Expertos en desarrollo web</h1>
                   <p class="titulo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. In placeat officiis iure consequatur? Culpa numquam reprehenderit facilis ea delectus quisquam sint perspiciatis, ipsum laudantium maiores. Quam voluptate aliquam est quis?</p>
                </div>
            </section>
            <div className="suscribeteinicio">
                <div class="texto_suscribete">
                    <p>Suscríbete a nuestro boletín</p>
                </div>
                <div className="input_suscribete">
                    <input type="text" placeholder="Ingrese el Email..."/>
                    <button type="submit">Suscribete</button>
                </div>
            </div>
            <div className="lenguajes">
               <div class="html">
                    <img src={Logo_html} alt="HTML"/>
                    <h2>HTML</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui quam animi aut unde, perspiciatis itaque tempora aspernatur asperiores illum velit sint! Deserunt accusamus reiciendis quisquam perferendis temporibus cumque iure.</p>
                </div>
                <div className="css">
                    <img src={Logo_css} alt="CSS"/>
                    <h2>CSS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nulla suscipit perspiciatis dolor iusto natus accusamus fugit sunt, corporis, reiciendis dignissimos adipisci mollitia illum possimus tempora ex, quisquam vero velit.</p>
                </div>
                <div className="diseño_grafico">
                    <img src={Logopc} alt=""/>
                    <h2>diseño_grafico</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corrupti consequuntur voluptate repudiandae illo aliquid quam numquam iusto suscipit, accusamus odit nesciunt, officia veniam pariatur quidem architecto non doloremque voluptatem.</p>
                </div>
            </div>

        </div>
    )
}

export default Inicio
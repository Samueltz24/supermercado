import { useState } from "react";
import es from '../projetos/seta/seta-es.png'
import di from '../projetos/seta/seta-di.png'
function Cardsp({img,texto,valor}){
    const [quatidade, setQuantidade] = useState(0)
    function menos(){
    if(quatidade > 0) setQuantidade(quatidade -1)
   }

   function mais(){
    setQuantidade(quatidade +1)
    if(quatidade === 20){
        setQuantidade(20)
    }
   }

   function resultado(){
    let compra = valor*quatidade
    alert(`${texto} ${compra}`)
   }
    return(
        <>
        <div className="ca">
            <div className="nome">
                <p>{texto}</p>
            </div>
            <div className="img">
                <img className="ima" src={img} alt="nada"/>
            </div>
            <div className="valor">
                <p>valor ${valor}</p>
            </div>
            <div className="pai">
                <div id="menos">
                    <button onClick={menos} className='ima2'><img  src={es} alt="" /></button>
                </div>
                <div id="res">
                    {quatidade}
                </div>
                <div id="mais">
                    <button onClick={mais} className='ima2'><img  src={di} alt="" /></button>
                </div>
            </div>
            <div className="compra" onClick={resultado}>
                <p>compra</p>
            </div>
        </div>
        </>
    )
}
export default Cardsp
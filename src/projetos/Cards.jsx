import '../App.css'
import Cardsp from './Cardsp'
import img0 from '../projetos/imgfrudas/morango.png'
import img1 from '../projetos/imgfrudas/banana.png'
import img2 from '../projetos/imgfrudas/laranja.png'
import img3 from '../projetos/imgfrudas/melancia.png'
import img4 from '../projetos/imgfrudas/maca.png'
import img5 from '../projetos/imgfrudas/pera.png'
import img6 from '../projetos/imgfrudas/limao.png'
import img7 from '../projetos/imgfrudas/abacaxi.png'
import img8 from '../projetos/imgfrudas/abacate.png'
import img9 from '../projetos/imgfrudas/caju.png'
import img10 from '../projetos/imgfrudas/cerejas.png'
import img11 from '../projetos/imgfrudas/goiabas-vermelhas.png'
import img12 from '../projetos/imgfrudas/maracuja.png'
import img13 from '../projetos/imgfrudas/mamao.png'
import img14 from '../projetos/imgfrudas/manga.png'
import img15 from '../projetos/imgfrudas/graviola.png'
function Cards(){
    return(
        <>
        <div className='bancada'>
            <p>sua fruta preferidas</p>
        </div>
        <div className="card">
         <Cardsp img={img0} texto='morango' valor={5}/>
         <Cardsp img={img1} texto='banana' valor={3}/>
         <Cardsp img={img2} texto='laranja' valor={3}/>
         <Cardsp img={img3} texto='melancia' valor={4}/>
         <Cardsp img={img4} texto='maça' valor={3}/>
         <Cardsp img={img5} texto='pera' valor={4}/>
         <Cardsp img={img6} texto='limao' valor={2}/>
         <Cardsp img={img7} texto='abacaxi' valor={4}/>
         <Cardsp img={img8} texto='abacate' valor={5}/>
         <Cardsp img={img9} texto='caju' valor={4}/>
         <Cardsp img={img10} texto='acerola' valor={3}/>
         <Cardsp img={img11} texto='goiaba' valor={3}/>
         <Cardsp img={img12} texto='maracuja' valor={3}/>
         <Cardsp img={img13} texto='mamão' valor={2}/>
         <Cardsp img={img14} texto='manga' valor={3}/>
         <Cardsp img={img15} texto='graviola' valor={5}/>
        </div>
        </>
    )
}
export default Cards
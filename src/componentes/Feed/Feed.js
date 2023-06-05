import './Feed.css';

import Post from './componentes/Post/Post';

import imgPerfil1 from './imagens/haleyPerfil.jpg';
import imgPerfil2 from './imagens/pmanny.png';
import imgPerfil3 from './imagens/pclaire.jpg';
import imgPerfil4 from './imagens/pgloria.jpg';
import imgPerfil5 from './imagens/pmi.png';
import imgPerfil6 from './imagens/palex.png';

import img1 from './imagens/Andy.jpg';
import img2 from './imagens/Fmanny.jpg'
import img3 from './imagens/FotoF (1).jpeg';
import img4 from './imagens/gloraFamilia.png'
import img5 from './imagens/familiaMeC.jpg'
import img6 from './imagens/material.jpg'
import tudoCerto from './imagens/tudoCerto.png'


export default function Feed() {
    return (
        <div className="Feed">
            
            <Post nomePerfil="Haley" imagemPost={img1} imagemPerfil={imgPerfil1}
            curtidas='Phill' 
            nomeAutor='Gloria'
            legenda=' Se divirtam!'
            hashtag=''
            comentarios='52'
            tempo='2'
            />

            <Post nomePerfil="Manny" imagemPost={img2} imagemPerfil={imgPerfil2}
             curtidas='Haley' 
             nomeAutor='Clarie'
             legenda=' Meus amores!'
             hashtag=''
             comentarios='30'
             tempo='2'
            />

            <Post nomePerfil="Claire" imagemPost={img3} imagemPerfil={imgPerfil3}
             curtidas='Freack' 
             nomeAutor='Michell'
             legenda=' Essa é a melhor que tiramos'
             hashtag=''
             comentarios='43'
             tempo='2'
            />

            <Post nomePerfil="Gloria" imagemPost={img4} imagemPerfil= {imgPerfil4}
             curtidas='Manny' 
             nomeAutor='Jay'
             legenda=' Lembro desse dia como se fosse hoje'
             hashtag=''
             comentarios='78'
             tempo='2'
             />

            <Post nomePerfil="Michell" imagemPost={img5} imagemPerfil={imgPerfil5}
             curtidas='Alex' 
             nomeAutor='Cam'
             legenda=' Os maiores presentes da minha vida!'
             hashtag=''
             comentarios='36'
             tempo='2'
            />

            <Post nomePerfil="Alex" imagemPost={img6} imagemPerfil= {imgPerfil6}
             curtidas='Manny' 
             nomeAutor='Phill'
             legenda=' Bons estudos minha filha!'
             hashtag=''
             comentarios='25'
             tempo='2'
            /> 



        <div className='TudoCerto'>
                <img alt='Você já viu todos os posts do último mês' src={tudoCerto}/>
                <p className='TudoCertoH1'>Isso é tudo</p>
                <p className='TudoCertoH2'>Você viu todas as novas publicações dos últimos 3 dias</p>
                <p className='TudoCertoH3'>Ver publicações mais antigos</p>
            </div>
        </div>
    )
}
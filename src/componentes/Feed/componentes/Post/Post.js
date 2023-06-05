import './Post.css';

import { FiMoreHorizontal } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";



export default function Post(props) {
    return (

        <div className='Post'>
            <div className="BarraSuperior">

                <div className='InformacaoPost'>
                    <div className="ImagemPerfilAutor">
                        <img alt="Foto perfil do autor" src={props.imagemPerfil}></img>
                    </div>

                    <div className="NomePerfilAutor">
                        {props.nomePerfil}
                    </div>
                </div>
                <div className="iconePontinhos">
                    {<FiMoreHorizontal />}
                </div>

            </div>

            <div className="ConteudoPost">
                <img alt="Imagem do post" src={props.imagemPost}></img>
            </div>

            <div className='ContainerReacoes'>
                <div className='ladoDireito'>
                    <div className='iconeCoracao'><FiHeart /></div>
                    <div className='iconeReacao'><FaRegComment /></div>
                    <div className='iconeReacao'><FiSend /></div>
                </div>
                <div className='ladoEsquerdo'>
                    <div className='iconeReacao'><FiBookmark /></div>
                </div>

            </div>

            <div className='Curtidas'>
                <span>Curtido por {props.curtidas} e outras pessoas</span>
            </div>

            <div className='DescricaoPost'>
                <p><span className='NomeAutor'>{props.nomeAutor}</span>{props.legenda}<span className='Hashtag'>{props.hashtag}</span></p>
                <p className='Comentarios'>Ver todos os {props.comentarios} comentários</p>
            </div>

            

        </div>
        
    )
}
import './LadoEsquerdo.css';

import Logo2 from './imagens/logo_insta.png';
import ItemMenu from './componentes/ItemMenu';
import ItemPerfil from './componentes/ItemPerfil';

import { MdHomeFilled } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FiCompass } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";

export default function LadoEsquerdo() {
    return(
        <div className="LadoEsquerdo">
            <div className="logo">
                <img src={Logo2} alt=''/>
            </div>
            <div className='menu-principal'>
                <div className='menu'>
                <ItemMenu icone={<MdHomeFilled/>} texto='Home'/>
                </div>
                <ItemMenu icone={<FiSearch/>} texto='Search'/>
                <ItemMenu icone={<FiCompass/>} texto='Explore'/>
                <ItemMenu icone={<FiFilm/>} texto='Reels'/>
                <ItemMenu icone={<FiMessageCircle/>} texto='Messages'/>
                <ItemMenu icone={<FiHeart/>} texto='Notifications'/>
                <ItemMenu icone={<FiPlusCircle/>} texto='Create'/>
                <ItemMenu icone={<FiMenu/>} texto='More'/>
            </div>
        </div>
    )
}
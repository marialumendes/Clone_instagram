import './Stories.css'

import Story from './componentes/Story'
 
import pgloria from './componentes/imagens/pgloria.jpg';
import pmi from './componentes/imagens/pmi.png';
import pcam from './componentes/imagens/pcam.png';
import pphill from './componentes/imagens/pphill.png';
import pluke from './componentes/imagens/pluke.png';
import haleyPerfil from './componentes/imagens/haleyPerfil.jpg';


function Stories () {
    return(
        <div className="Stories">
            <div className="user-elements">
            <Story imgPerfil= {pgloria} nomeDaConta="Gloria"/>
            </div>
            <Story imgPerfil= {pmi} nomeDaConta="Michael"/>
            <Story imgPerfil= {pcam} nomeDaConta="Cam"/>
            <Story imgPerfil= {pphill} nomeDaConta="Phill"/>
            <Story imgPerfil= {pluke} nomeDaConta="Luke"/>
            <Story imgPerfil= {haleyPerfil} nomeDaConta="Haley"/>

        </div>

    )
}

export default Stories;
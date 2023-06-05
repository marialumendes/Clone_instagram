import './LadoDireito.css';
import Sugestao from './componentes/Sugestao';
import MeuPerfil from './componentes/MeuPerfil';

import fotoPerfil from './sugesImagens/fotoPerfil.jpg';
import sdede from './sugesImagens/sdede.png';
import sdylan from './sugesImagens/sdylan.png';
import sfreak from './sugesImagens/sfreak.png';
import sjay from './sugesImagens/sjay.png';
import sstella from './sugesImagens/sstella.png';

export default function LadoDireito(){
    return (
        <div className="LadoDireito">
            <MeuPerfil
                fotoPerfil={fotoPerfil}
                NickName='mluisa0906'
                meuNome='Maria Luisa'
            />

            <div className='Sugeridos'>
                <span className='SugestaoPessoal'>Sugestões para você</span>
                <span className='VerTudo'>Ver tudo</span>
            </div>
            <Sugestao
                FotoPerfilSugestao={sdede}
                NickSugerido='DeDe'
                NomeSugerido='Seguido(a) por Clarie e outras 4 pessoas'

            />
            <Sugestao
                FotoPerfilSugestao={sdylan}
                NickSugerido='Dylan'
                NomeSugerido='Seguindo(a) por Haley e outras 2 pessoas'
            />
             <Sugestao
                FotoPerfilSugestao={sfreak}
                NickSugerido='Freak'
                NomeSugerido='Seguido(a) por Haley e outras 5 pessoas'
            />
             <Sugestao
                FotoPerfilSugestao={sjay}
                NickSugerido='Jay'
                NomeSugerido='Seguido(a) por Alex e outras 7 pessoas'
            />
             <Sugestao
                FotoPerfilSugestao={sstella}
                NickSugerido='Stella'
                NomeSugerido='Seguido(a) por Jay e outra 2 pessoas'
            />




        </div>
    )

}
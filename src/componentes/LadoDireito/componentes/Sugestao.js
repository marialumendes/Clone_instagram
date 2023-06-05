import './Sugestao.css'

export default function LadoDireito(props) {
    return (
        <div className='SugestaoPerfil'>
            <div className='FotoPerfilSugestao'>
                <img alt='Perfil sugerido' src={props.FotoPerfilSugestao}></img>
            </div>
            <div className='NickSugerido'>
                <span className='NickSugerido'>{props.NickSugerido}</span>
                <p className='NomeSugerido'>{props.NomeSugerido}</p>
            </div>
            <p className='Seguir'>Seguir</p>
        </div>
    )
}
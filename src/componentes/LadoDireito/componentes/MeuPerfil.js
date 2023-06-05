import './MeuPerfil.css'

export default function MeuPerfil(props) {
    return (
        <div className='MeuPerfil'>
            <div className='fotoPerfil'>
                <img alt='Imagem perfil' src={props.fotoPerfil}/>
            </div>
            <div className='MinhaInfo'>
                <span className='NickName'>{props.NickName}</span>
                <p className='MeuNome'>{props.meuNome}</p>
            </div>
            <p className='Mudar'>Mudar</p>
        </div>
    )
}
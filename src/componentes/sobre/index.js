import './sobre.css'

const Sobre = (props) => {
    return (
        <section className='sobre'>
                <img src={props.imagem} alt=''/>
                <p className='nome'>{props.nome}</p>
                <p className='subtitulo'>Idade</p>
                <p>{props.idade}</p>
                <p className='subtitulo'>CEP</p>
                <p>{props.cep}</p>
                <button>Endereço</button>
                <button>Meu resumo</button>
        </section>
    )
}

export default Sobre
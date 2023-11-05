import './experiencia.css'

const Experiencia = (props) => {
    return(
        <section className='experiencia'>
            <p className='nome'>{props.nome}</p>
            <p>{props.resumo}</p>
        </section>
    )
}

export default Experiencia
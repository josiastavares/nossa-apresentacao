import './titulo.css'

const Titulo = (props) => {
    return(
        <section className='titulo'>
            <h2>{props.titulo}</h2>
            <p>{props.titulo}</p>
        </section>
    )
}

export default Titulo
import './formacao.css'

const Formacao = (props) => {
    return(
        <section className='formacao'>
            <i class="fa-solid fa-code"></i>
            <p className='nome'>{props.nome}</p>
            <p>{props.formacao}</p>
        </section>
    )
}

export default Formacao
import './sobre.css'

const Sobre = (props) => {
    return (
        <section className='sobre'>
            <img src={props.imagem} alt='' />
            <p className='nome'>{props.nome}</p>
            <p className='subtitulo'>Idade</p>
            <p>{props.idade}</p>
            <p className='subtitulo'>CEP</p>
            <p>{props.cep}</p>
            <button onClick={pegaId} id={props.cep}>Endereço</button>
        </section>
    )
}

function pegaId(botao) {
    const cep = botao.target.id
    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data)
            salvandoCep(data)
        })
    });
}

function salvandoCep(dados) {
    var logradouro = dados.logradouro
    alert(logradouro)
}

export default Sobre
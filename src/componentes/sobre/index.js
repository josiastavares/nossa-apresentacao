import './sobre.css'

const Sobre = (props) => {
    return (
        <section>
            <section className='sobre'>
                <img src={props.imagem} alt='' />
                <p className='nome'>{props.nome}</p>
                <p className='subtitulo'>Idade</p>
                <p>{props.idade}</p>
                <p className='subtitulo'>CEP</p>
                <p>{props.cep}</p>
                <button onClick={pegaId} id={props.cep}>Endereço</button>
            </section>
        </section>
    )
}


function pegaId(botao) {
    const cep = botao.target.id
    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then((response) => {
        response.json().then((data) => {
            var endereco = data;
            console.log(endereco)
            var popup = document.getElementById('popup')
            var popuptxt = document.getElementById('popuptxt')
            popup.style.display = 'block';
            popuptxt.innerHTML = `
    <p>Bairro: ${endereco.bairro}</p>
    <p>CEP: ${endereco.cep}</p>
    <p>Complemento: ${endereco.complemento}</p>
    <p>Localidade: ${endereco.localidade}</p>
    <p>Logradouro: ${endereco.logradouro}</p>
    <p>UF:${endereco.uf}</p>
    `
        })
    });

}

export default Sobre
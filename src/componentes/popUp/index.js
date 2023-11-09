import './popup.css'

const Fechar = () =>{
    document.getElementById('popup').style.display =  'none';
}

const PopUp = () => {
    return (
        <section id='popup' className='popup'>
            <p onClick={Fechar} className='botao-popup'>x</p>
            <div id='popuptxt' className='popuptxt'></div>
        </section>
    )
}

export default PopUp;
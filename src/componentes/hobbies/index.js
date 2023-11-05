import './hobbies.css'

const Hobbies = (props) => {
    return (
        <section className='hobbies'>
            <i class="fa-solid fa-code"></i>
            <p>{props.hobbie}</p>
        </section>
    )
}

export default Hobbies
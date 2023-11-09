import { Link } from 'react-router-dom'
import './menu.css'

const Menu = () => {
    return (
        <header className='menu'>
            <ul>
                <li><Link to='/'>SOBRE NÓS</Link></li>
                <li><Link to='/formacao'>FORMAÇÃO</Link></li>
                <li><Link to='/experiencia'>EXPERIÊNCIA</Link></li>
                <li><Link to='/hobbies'>HOBBIES</Link></li>
            </ul>
        </header>
    )
}

export default Menu
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'

export default function Sidebar() {
    return (
        <>
            <div className="nav-bar">
                <Link to={'/'} className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav>
                    <NavLink exact={true} activeclassname='active' to={'/'}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact={true} activeclassname='active' className={`about-link`} to={'/about'}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink exact={true} activeclassname='active' className={`contact-link`} to={'/contact'}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
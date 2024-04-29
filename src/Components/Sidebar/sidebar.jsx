import { Link, NavLink } from 'react-router-dom'
import './sidebar.scss'
import Logo from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faGears, faHome } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { useState } from 'react'

export default function Sidebar() {

    const [show, setShow] = useState(false)

    const toggle = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={`nav-bar ${!show && 'hide-nav'}`}>
                <Link className='logo' onClick={toggle}>
                    <img src={Logo} alt="Logo" />
                </Link>
                <nav>
                    <NavLink onClick={toggle} activeclassname='active' to={'/'}>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={toggle} activeclassname='active' className={`about-link`} to={'/about'}>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={toggle} activeclassname='active' className={`skill-link`} to={'/skills'}>
                        <FontAwesomeIcon icon={faGears} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={toggle} activeclassname='active' className={`project-link`} to={'/projects'}>
                        <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                    </NavLink>
                    <NavLink onClick={toggle} activeclassname='active' className={`contact-link`} to={'/contact'}>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                    </NavLink>
                </nav>

                <ul>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href="/" rel='noreferrer'>
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
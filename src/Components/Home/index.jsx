import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../Animated Letters'

export default function Home() {
    const [animate, setAnimate] = useState('text-animate')

    const nameArray = ['a', 'p', 't', 'a', 'r', 's', 'h', 'i']
    const jobArray = ['w', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const addClass = setTimeout(() => {
            setAnimate('text-animate-hover')
        }, 5000);
        return () => clearTimeout(addClass);
    }, []);

    return (
        <>
            <div className="container homepage">
                <div className="text-zone">
                    <h1>
                        <span className={animate}>H</span>
                        <span className={`${animate} _12`}>i,</span>
                        <br />
                        <span className={`${animate} _13`}>I</span>
                        <span className={`${animate} _14`}>'m</span>
                        <img src={Logo} alt="developer" />
                        <AnimatedLetters letterClass={animate} array={nameArray} index={20} /> <br />
                        <AnimatedLetters letterClass={animate} array={jobArray} index={30} />
                    </h1>

                    <h2>Frontend Developer / QA Engineer </h2>

                    <Link to={'/contact'} className='flatBtn'>CONTACT ME</Link>
                </div>
            </div>
        </>
    )
}
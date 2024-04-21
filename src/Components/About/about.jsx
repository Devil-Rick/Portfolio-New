import { useState } from 'react';
import AnimatedLetters from '../Animated Letters/aniLet'
import './about.scss'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


export default function About() {

    const [animate, setAnimate] = useState('text-animate')

    useEffect(() => {
        const addClass = setTimeout(() => {
            setAnimate('text-animate-hover')
        }, 3000);
        return () => clearTimeout(addClass);
    }, []);


    return (
        <>
            <div className='container about-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={animate}
                            array={['A', 'b', 'o', 'u', 't', '  ', 'M', 'e']}
                            index={15}
                        />
                    </h1>

                    <p>
                        I'm a front-end developer with industry experience as a QA Automation Engineer looking for a role in an
                        established IT company with the opportunity to work with the latest
                        technologies on diverse projects.
                    </p>
                    <p>
                        I'm quiet confident, naturally curious, and perpetually working on
                        improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a family
                        person, a sports fanatic, photography enthusiast, and tech-obsessed!!!
                    </p>
                </div>

                <div className='stage-cube-container'>
                    <div className="cubespinner">
                        <div className="face3">
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faCss3} />
                        </div>
                        <div className="face1">
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
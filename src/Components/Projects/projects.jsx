import { useState } from 'react';
import AnimatedLetters from '../Animated Letters/aniLet'
import './projects.scss'
import { useEffect } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { projects } from '../../data/project-data';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Project() {
    const [animate, setAnimate] = useState('text-animate')

    useEffect(() => {
        const addClass = setTimeout(() => {
            setAnimate('text-animate-hover')
        }, 3000);
        return () => clearTimeout(addClass);
    }, []);


    return (
        <>
            <div className='container project-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={animate}
                            array={['S', 'e', 'e', '  ', 'M', 'y', '  ', 'W', 'o', 'r', 'k', 's']}
                            index={15}
                        />
                    </h1>
                </div>

                <div className='caro-container'>
                    <Carousel>
                        {projects.map((project, index) => (
                            <Carousel.Item key={index}>
                                <a href={project.git} className='repoBtn' target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <img src={project.image} alt={project.name} />
                                <Carousel.Caption>
                                    <h1>{project.name}</h1>
                                    <Button className='demoBtn'>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">See Demo</a>
                                    </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
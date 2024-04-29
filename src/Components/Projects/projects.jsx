import { useState } from 'react';
import AnimatedLetters from '../Animated Letters/aniLet'
import './projects.scss'
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { projects } from '../../data/project-data';

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
            <div className='container skills-page'>
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
                                {/* <ExampleCarouselImage text="First slide" /> */}
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    )
}
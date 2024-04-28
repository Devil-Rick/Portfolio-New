import { useState } from 'react';
import AnimatedLetters from '../Animated Letters/aniLet'
import './skills.scss'
import { useEffect } from 'react';
import SkillCard from '../skillCards/skillCard';
import MarqueeCards from '../MarqueeCard/marqueeCard';

export default function Skills() {

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
                            array={['M', 'y', '  ', 'S', 'k', 'i', 'l', 'l', 's']}
                            index={15}
                        />
                    </h1>
                </div>
                <div className="cards-container">
                    <div className="left">
                        <MarqueeCards direction="left">
                            <SkillCard />
                        </MarqueeCards>
                    </div>

                    <div className="right">
                        <MarqueeCards direction="right">
                            <SkillCard />
                        </MarqueeCards>
                    </div>
                </div>
            </div>
        </>
    )
}
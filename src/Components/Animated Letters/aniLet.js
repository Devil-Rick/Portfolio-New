import './aniLet.scss'

const AnimatedLetters = ({letterClass, array, index }) => { // {ClassName, Letters Array, index Number}
    return(
        <span>
            {
                array.map((char, i) => (
                    <span key={char+i} className={`${letterClass} _${i+index}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters
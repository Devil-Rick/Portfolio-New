import { Card } from 'react-bootstrap'
import './skillCard.scss'
import { skills } from '../../data/skill-data'

export default function SkillCard() {

    return (
        <>
            <div className="card-list">
                {skills.map((skill, index) => (
                    <Card border="info" key={index} style={{ width: '18rem' }}>
                        <Card.Header className={skill.id}>{skill.title}</Card.Header>
                        <Card.Body>
                            <Card.Title>{skill.title}</Card.Title>
                            <Card.Text>
                                {skill.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}
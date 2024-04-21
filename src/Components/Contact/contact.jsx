import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../Animated Letters/aniLet'
import './contact.scss'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Contact() {

    const [animate, setAnimate] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        const addClass = setTimeout(() => {
            setAnimate('text-animate-hover')
        }, 3000);
        return () => clearTimeout(addClass);
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'sap_serviceId',
                'template_gncgrir',
                refForm.current,
                { publicKey: '4joy9Z6N0Q_KAxXUZ' }
            )
            .then(() => {
                alert('message sent sucessfully')
                window.location.reload(false)
            },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={animate}
                            array={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            index={10}
                        />
                    </h1>

                    <p>
                        I am interested in openings for frontend Developer and QA Python Automation Engineer - especially on ambitious
                        or large projects. If you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail} action="">
                            <ul>
                                <li className="half">
                                    <input type="text" placeholder='name' name="user_name" required />
                                </li>

                                <li className="half">
                                    <input type="email" placeholder='Email Id...' name="user_email" required />
                                </li>

                                <li>
                                    <input type="text" placeholder='Subject' name='subject' required />
                                </li>

                                <li>
                                    <textarea
                                        placeholder="Message..."
                                        name="message"
                                        required
                                    ></textarea>
                                </li>

                                <li>
                                    <input type="submit" className='flat-btn' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="info-map">
                    <span> Saptarshi Dhibar, </span>
                    <br />
                    <span> India </span>
                    <br />
                    <span>Hinjewadi Phase 1,</span> <br />
                    <span> Pune, Maharastra </span> <br />
                    <br />
                    <span>saptarshidhibar422@gmail.com</span>
                </div>

                <div className="map-wrap">
                    <MapContainer center={[18.608520, 73.735161]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[18.608520, 73.735161]}>
                            <Popup>Saptarshi lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}
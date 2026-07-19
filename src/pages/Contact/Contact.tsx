import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';


interface ContactEntry {
    label: string;
    email: string;
}

const contacts: ContactEntry[] = [
    { label: "General", email: "ubc.subbots@gmail.com" },
    { label: "Administration", email: "admin@subbots.ca" },
    { label: "Events", email: "events@subbots.ca" },
];


function Contact() {

    return (
        <section className="Contact">

            <div className="title-card">

                <div className="content">
                    <img src="/images/printing_tags.jpg" alt="Close-up of a technician labelling wires in the workshop" />
                    <div className="img-mask" />
                    <h2>Reach <strong>Out</strong></h2>
                    <p className="content-text-large">
                        Have a question, a partnership idea, or just want to complement our robot?
                    </p>
                </div>

            </div>

            <section className="contact-info">
                <div className="contact-info-inner">

                    <div className="info-block">
                        <h3>Contact Us</h3>
                        <div className="email-list">
                            {contacts.map(({ label, email }) => (
                                <a key={label} href={`mailto:${email}`}>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span>{label}</span>
                                    {email}
                                </a>
                            ))}
                        </div>
                        <p className="subteam-note">
                             We also maintain a dedicated email for each individual subteam (e.g. software@subbots.ca).
                        </p>
                    </div>

                    <div className="info-block map-block">
                        <h3>Visit Us</h3>
                        <div className="map-wrapper">
                            <iframe
                                className="embedded-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547.3695800281448!2d-123.24867639151663!3d49.262313191417896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672c98486aabb%3A0xdb34b1b740a5c5c2!2sWayne%20and%20William%20White%20Engineering%20Design%20Centre!5e0!3m2!1sen!2sca!4v1767372310015!5m2!1sen!2sca"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        <p className="address">
                            <FontAwesomeIcon icon={faLocationDot} />
                            Wayne and William White Engineering Design Centre, UBC
                        </p>
                    </div>

                </div>
            </section>

        </section>
    );
}

export default Contact;

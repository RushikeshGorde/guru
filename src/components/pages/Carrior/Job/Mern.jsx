import React, { useState } from 'react';
import ApplyForm from './ApplyForm'; // Adjust the import path as per your project structure
import { useNavigate } from 'react-router-dom'; // Updated import for react-router-dom v6
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../../../CSS/Style.css';

const Mern = () => {
    const [showForm, setShowForm] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleApplyNowClick = () => {
        setShowForm(true);
    };

    const handleCloseFormClick = () => {
        setShowForm(false);
    };

    const navigateToCareerPage = () => {
        navigate('/carrier'); // Adjust the path as necessary
    };

    return (
        <div className='mt-5 container'>
            {/* <h5>We are looking for a MERN Stack Developer Intern (Fresher) to join our team. As an intern, you will work closely with our experienced developers to build and improve our web applications. This is an excellent opportunity for someone looking to gain hands-on experience in full stack development and learn from industry professionals.</h5> */}

            <h6>PHD COURSES</h6>
            <ul>
                <li>Ph.D in Astrology</li>
                <li>Ph.D in Vedic Vastu</li>
                <li>Ph.D in Palmistry</li>
                <li>Ph.D in Nemurology</li>
                <li>Ph.D in Tarot</li>
                <li>Ph.D in Fang Shui</li>
                <li>Ph.D in Gemstone and Crystal</li>
            </ul>

            {/* <h6>Job Responsibilities:</h6>
            <ul>
                <li>Assist in the development of web applications using MongoDB, Express.js, ReactJS, and Node.js.</li>
                <li>Work with the design team to implement user-friendly interfaces and designs.</li>
                <li>Collaborate with frontend developers to integrate APIs and ensure seamless functionality.</li>
                <li>Participate in code reviews and provide constructive feedback to peers.</li>
                <li>Continuously learn and apply best practices in full stack development.</li>
                <li>Troubleshoot and debug issues to ensure optimal performance.</li>
            </ul>

            <h6>Required Qualifications, Capabilities, and Skills:</h6>
            <ul>
                <li>Basic knowledge of MongoDB, Express.js, ReactJS, and Node.js.</li>
                <li>Understanding of RESTful APIs and web services.</li>
                <li>Familiarity with version control systems like Git.</li>
                <li>Good communication and teamwork skills.</li>
                <li>Strong willingness to learn and adapt to new technologies.</li>
                <li>Attention to detail and a passion for creating great user experiences.</li>
            </ul> */}

            {showForm ? (
                <button className="btn btn-secondary mt-3" onClick={handleCloseFormClick}>
                    <FaTimes style={{ marginRight: '8px' }} />
                    Close Form
                </button>
            ) : (
                !formSubmitted && (
                    <button className="btn btn-primary mt-3" onClick={handleApplyNowClick}>
                        <FaPaperPlane style={{ marginRight: '8px' }} />
                        Apply Now
                    </button>
                )
            )}

            {showForm && <ApplyForm onSubmit={() => setFormSubmitted(true)} />}
            <br />
            <button className='allbtn mt-5'> <a href="/carrier" target="_self"> Course </a></button>
        </div>
    );
}

export default Mern;

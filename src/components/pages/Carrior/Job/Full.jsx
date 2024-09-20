import React, { useState } from 'react';
import ApplyForm from './ApplyForm'; // Adjust the import path as per your project structure
import { useNavigate } from 'react-router-dom'; // Updated import for react-router-dom v6
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../../../CSS/Style.css';

const Full = () => {
    const [showForm, setShowForm] = useState(false);
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
            {/* <h5>We are looking for a Full Stack Developer Intern (Fresher) to join our team. As an intern, you will work closely with our experienced developers to build and improve our web applications. This is an excellent opportunity for someone looking to gain hands-on experience in both frontend and backend development and learn from industry professionals.</h5> */}

            <h6>MASTER'S DEGREE</h6>
            <ul>
                <li>Master in Astrology (MIA)</li>
                <li>Master in Vedic Vastu (MIV)</li>
            </ul>

            {/* <h6>Job Responsibilities:</h6>
            <ul>
                <li>Assist in the development of web applications using HTML, CSS, JavaScript, ReactJS, Node.js, and Express.js.</li>
                <li>Work with the design team to implement user-friendly interfaces and designs.</li>
                <li>Collaborate with backend developers to integrate APIs and ensure seamless functionality.</li>
                <li>Participate in code reviews and provide constructive feedback to peers.</li>
                <li>Continuously learn and apply best practices in both frontend and backend development.</li>
                <li>Troubleshoot and debug issues to ensure optimal performance.</li>
                <li>Contribute to database design and management using MongoDB.</li>
            </ul>

            <h6>Required Qualifications, Capabilities, and Skills:</h6>
            <ul>
                <li>Basic knowledge of HTML, CSS, and JavaScript.</li>
                <li>Familiarity with ReactJS or any other JavaScript framework/library.</li>
                <li>Understanding of responsive web design principles.</li>
                <li>Good communication and teamwork skills.</li>
                <li>Strong willingness to learn and adapt to new technologies.</li>
                <li>Attention to detail and a passion for creating great user experiences.</li>
                <li>Any prior experience with version control systems like Git is a plus.</li>
                <li>Basic understanding of backend technologies like Node.js and Express.js.</li>
                <li>Knowledge of database systems like MongoDB.</li>
            </ul> */}

            {showForm ? (
                <button className="btn btn-secondary mt-3" onClick={handleCloseFormClick}>
                    <FaTimes style={{ marginRight: '8px' }} />
                    Close Form
                </button>
            ) : (
                <button className="btn btn-primary mt-3" onClick={handleApplyNowClick}>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Apply Now
                </button>
            )}

            {showForm && <ApplyForm />}
            <br />
            <button className='allbtn mt-5'> <a href="/carrier" target="_self"> Course </a></button>
        </div>
    );
};

export default Full;

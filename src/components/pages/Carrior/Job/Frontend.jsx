import React, { useState } from 'react';
import ApplyForm from './ApplyForm'; // Adjust the import path as per your project structure
import { useNavigate } from 'react-router-dom'; // Updated import for react-router-dom v6
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../../../CSS/Style.css'

const Frontend = () => {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleApplyNowClick = () => {
        setShowForm(true);
    };

    const handleCloseFormClick = () => {
        setShowForm(false);
    };

    const navigateToCareerPage = () => {
        navigate('/carrior'); // Adjust the path as necessary
    };

    return (
        <div className='mt-5 container'>
            <h5>Course Duration: 1 Year Each , Eligibility: Bachelor degree for each of above courses , Medium of Instruction: Hindi or English or Marathi</h5>

            <h6>PG DIPLOMA COURSES</h6>
            <ul>
                <li>PG Diploma in Astrology (PGDIA)</li>
                <li>PG Diploma in Palmistry and Face Reading (PGDIP)</li>
                <li>PG Diploma in Vedic Vastu (PGDIV)</li>
                <li>PG Diploma in Feng Shui & Chinese Astrology (PGDIF)</li>
                <li>PG in Tarot Reading and Divination (PGDIT)</li>
            </ul>

            {/* <h4>Job Responsibilities:</h4>
            <ul>
                <li>Assist in the development of web applications using HTML, CSS, and JavaScript.</li>
                <li>Work with the design team to implement user-friendly interfaces and designs.</li>
                <li>Collaborate with backend developers to integrate APIs and ensure seamless functionality.</li>
                <li>Participate in code reviews and provide constructive feedback to peers.</li>
                <li>Continuously learn and apply best practices in frontend development.</li>
                <li>Troubleshoot and debug issues to ensure optimal performance.</li>
            </ul>

            <h4>Required Qualifications, Capabilities, and Skills:</h4>
            <ul>
                <li>Basic knowledge of HTML, CSS, and JavaScript.</li>
                <li>Familiarity with ReactJS or any other JavaScript framework/library.</li>
                <li>Understanding of responsive web design principles.</li>
                <li>Good communication and teamwork skills.</li>
                <li>Strong willingness to learn and adapt to new technologies.</li>
                <li>Attention to detail and a passion for creating great user experiences.</li>
                <li>Any prior experience with version control systems like Git is a plus.</li>
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
            <button className='allbtn mt-5'> <a href="/carrier" target="_self"> Carrer </a></button>
        </div>
    );
}

export default Frontend;

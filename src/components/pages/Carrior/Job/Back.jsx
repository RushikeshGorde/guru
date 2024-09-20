import React, { useState } from 'react';
import ApplyForm from './ApplyForm'; // Adjust the import path as per your project structure
import { useNavigate } from 'react-router-dom'; // Updated import for react-router-dom v6
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import '../../../CSS/Style.css';

const Frontend = () => {
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
            <h5>Course Duration: Six Month Each , Eligibility: 10 + 2 for each of above courses , Medium of Instruction: Hindi or English or Marathi </h5>

            <h6>DIPLOMA COURSES</h6>
            <ul>
                <li>Diploma In Astrology (DIA)</li>
                <li>Diploma In Palmistry (DIP)</li>
                <li>Diploma In Vedic Vastu Shatra (DIV)</li>
                <li>Diploma In Feng Shui Chinese Astrology (DIF)</li>
                <li>Diploma In Gems & Crystals (DIG)</li>
                <li>Diploma In Numarolagy (DIN)</li>
                <li>Diploma In Tarot Reading (DIT)</li>
            </ul>

            {/* <h6>Job Responsibilities:</h6>
            <ul>
                <li>Assist in the development of web applications using HTML, CSS, and JavaScript.</li>
                <li>Work with the design team to implement user-friendly interfaces and designs.</li>
                <li>Collaborate with backend developers to integrate APIs and ensure seamless functionality.</li>
                <li>Participate in code reviews and provide constructive feedback to peers.</li>
                <li>Continuously learn and apply best practices in frontend development.</li>
                <li>Troubleshoot and debug issues to ensure optimal performance.</li>
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

export default Frontend;

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com';

const ApplyForm = () => {
    const [isOpen, setIsOpen] = useState(true); // Track if form is open or closed
    const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Replace with your service ID, template ID, and user ID from EmailJS dashboard
        const serviceID = 'service_9q3k5jd'; // Replace with your EmailJS service ID
        const templateID = 'template_njdoalj'; // Replace with your EmailJS template ID
        const userID = 'pp21j3eVMOia8ikEV'; // Replace with your EmailJS user ID

        // Gather form data
        const formData = {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            subject: 'Application for Position', // You can customize this subject as needed
            contact_number: phoneNumber,
            message: coverLetter,
            to_email: 'soulmateinfotech5@gmail.com'
        };

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Form submitted successfully!');
                setFormSubmitted(true); // Set formSubmitted to true after successful submission

                // Optionally reset the form fields after successful submission
                setFirstName('');
                setLastName('');
                setEmail('');
                setPhoneNumber('');
                setCoverLetter('');
            }, (error) => {
                console.error('Email could not be sent:', error);
                alert('There was an error submitting the form. Please try again later.');
            });
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" gutterBottom>
                Apply Now
            </Typography>
            {!formSubmitted && (
                <>
                    {isOpen && (
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="firstName"
                                        name="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        name="lastName"
                                        label="Last Name"
                                        variant="outlined"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        variant="outlined"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={4}
                                        id="coverLetter"
                                        name="coverLetter"
                                        label="Cover Letter"
                                        variant="outlined"
                                        value={coverLetter}
                                        onChange={(e) => setCoverLetter(e.target.value)}
                                    />
                                </Grid>
                                <input type="hidden" id="position" name="position" value="frontend" />
                            </Grid>
                            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                                Submit Application
                            </Button>
                        </form>
                    )}
                </>
            )}
        </Container>
    );
}

export default ApplyForm;

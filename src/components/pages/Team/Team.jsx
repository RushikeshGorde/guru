import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../CSS/Style.css';

export default function Team() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        });
    }, []);

    // const teamMembers = [
    //     {
    //         name: 'Rushikesh Gorde',
    //         title: 'MERN Developer, Full Stack Developer',
    //         description: 'numetry technologies \nExperience: 2 years+',
    //         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1Fc5-YP8s_xZqAIXLgtAJLw31aahgJ6JIDNLyvqNfWlrcNGpWwGh6fr4wuJpmUL-Y2A&usqp=CAU',
    //         socialLinks: {
    //             facebook: 'https://www.facebook.com/rushikesh.gorde.9883?mibextid=ZbWKwL',
    //             instagram: 'https://www.instagram.com/rushikesh_gorde_1145?igsh=YTI1aDg2M244djlx',
    //             twitter: 'https://wa.me/message/GWUKQ7SFQQARE1',
    //             linkedin: 'https://www.linkedin.com/in/rushikesh-gorde-a8a39a259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZA%2FeQKs3QGmNFPfXeoNjPQ%3D%3D'
    //         }
    //     },
    //     {
    //         name: 'Sagar Kolhe',
    //         title: 'Full Stack Developer',
    //         description: 'VeriTech , (Pune)\nExperience: 1 years+',
    //         imgSrc: 'data:image/jpeg;base64,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',
    //         socialLinks: {
    //             facebook: '#',
    //             instagram: 'https://instagram.com/sagarkolhe__08?igshid=MzNlNGNkZWQ4Mg==',
    //             twitter: 'https://api.whatsapp.com/send?phone=918275296799',
    //             linkedin: 'https://www.linkedin.com/in/sagar-kolhe-aa5246226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    //         }
    //     },
      
       
        // Add more team members here
    // ];
    const teamMembers1 = [
        {
            name: 'Dr. Amit Bhosale',
            title: 'Founder',
            description: '\n \n Experience: 20 years+',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TJzMty7nuJSre7vQow-ZKkrsD65uqbR_zrSJS7Akf9M7NklNiOb_kTwLM7oF5JYKoMg&usqp=CAU',
            socialLinks: {
                facebook: 'https://www.facebook.com/onkar.dighe.1',
                instagram: 'https://www.instagram.com/mr_onkar_dighe_patil?igsh=bG4ydzFrd3N5NmE2',
                twitter: 'https://wa.me/qr/BEKTHN4FDLCPF1',
                linkedin: 'https://www.linkedin.com/in/onkar-dighe-848561226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
            }
        },
        
       
        // Add more team members here
    ];
    // const teamMembers2 = [
    //     {
    //         name: 'Arun Kanawade',
    //         title: 'Full Stack Developer',
    //         description: 'Aadi Technology, (Pune)\nExperience: 1 years+',
    //         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Q76RTmOptJZTzS_15QVeypiXv_dbXK1iJv1MNapHM5K3lBJJyFNOtztDgX2T1d5xnlw&usqp=CAU',
    //         socialLinks: {
    //             facebook: 'https://www.facebook.com/arun.kanawade.9?mibextid=ZbWKwL',
    //             instagram: 'https://www.instagram.com/_itz_arun_kanawade?igsh=MXhwaXl2bDR6N3FvaA==',
    //             twitter: 'https://wa.me/qr/X2Y2FQHSS3YXH1',
    //             linkedin: 'https://www.linkedin.com/in/arun-kanawade-4b443222b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    //         }
    //     },
    //     {
    //         name: 'Saurabh Dighe',
    //         title: 'CEO, UI/UX Desiner',
    //         description: '\n \nExperience: 1 years+',
    //         imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmVm7GM08LYv4AyeKgqQMY-XWMHXQvFEakA&s',
    //         socialLinks: {
    //             facebook: 'https://www.facebook.com/saurabh.dighe.56?mibextid=ZbWKwL',
    //             instagram: 'https://www.instagram.com/dighesaurabh?utm_source=qr&igsh=MWN2MmlubzI1bnd3dQ==',
    //             twitter: 'https://wa.link/9zynus',
    //             linkedin: 'https://www.linkedin.com/in/saurabh-dighe-537148284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    //         }
    //     },
       
        // Add more team members here
    // ];

    return (
        <div className="container team shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <h2 className='text-center head-all '>
               About Our Founder
            </h2>
            {/* <div className="row team-2">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-8 col-lg-3 mx-auto">
                        <div className="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded" data-aos="fade-up">
                            <div className="picture">
                                <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{member.name}</h3>
                                <h4 className="title">{member.title}<br />{member.description}</h4>
                            </div>
                            <ul className="social">
                                <li><a href={member.socialLinks.facebook}><i className="fab fa-facebook"></i></a></li>
                                <li><a href={member.socialLinks.instagram}><i className="fab fa-instagram"></i></a></li>
                                <li><a href={member.socialLinks.twitter}><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href={member.socialLinks.linkedin}><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="row team-2">
                {teamMembers1.map((member, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
                        <div className="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded" data-aos="fade-up">
                            <div className="picture">
                                <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{member.name}</h3>
                                <h4 className="title">{member.title}<br />{member.description}</h4>
                            </div>
                            <ul className="social">
                                <li><a href={member.socialLinks.facebook}><i className="fab fa-facebook"></i></a></li>
                                <li><a href={member.socialLinks.instagram}><i className="fab fa-instagram"></i></a></li>
                                <li><a href={member.socialLinks.twitter}><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href={member.socialLinks.linkedin}><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="row team-2">
                {teamMembers2.map((member, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto">
                        <div className="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded" data-aos="fade-up">
                            <div className="picture">
                                <img className="img-fluid" src={member.imgSrc} alt={member.name} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">{member.name}</h3>
                                <h4 className="title">{member.title}<br />{member.description}</h4>
                            </div>
                            <ul className="social">
                                <li><a href={member.socialLinks.facebook}><i className="fab fa-facebook"></i></a></li>
                                <li><a href={member.socialLinks.instagram}><i className="fab fa-instagram"></i></a></li>
                                <li><a href={member.socialLinks.twitter}><i className="fab fa-whatsapp"></i></a></li>
                                <li><a href={member.socialLinks.linkedin}><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

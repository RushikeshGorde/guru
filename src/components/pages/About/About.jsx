import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../CSS/Style.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="main-title typewriter">Welcome to Dr Amit Bhosle Institute & Research Centre of Astrology</h1>
      <p className="mission-statement">We are working to reduce problems in people's lives through astrology.</p>
      
      <div className="cards-container">
        <div className="card">
          <h2>ASTROLOGY</h2>
          <p className='about-font'>
          Renowned practicing Astrologers have guided the sequence, style and content of the study material. They have also given invaluable inputs on practical and real life examples.
          </p>
        </div>

        <div className="card">
          <h2>PALMISTRY AND FACE READING EXPERTS</h2>
          <p className='about-font'>
          Professional Palmistry and Face Reading Experts have contributed their time and effort in the making of courses on palmistry and face reading. Their invaluable inputs will definitely prove to be a boon for the learners field.
          </p>
        </div>

        <div className="card">
          <h2>VASTU EXPERTS</h2>
          <p className='about-font'>
          Vastu experts and Sthapati have contributed in the making of the material for Vedic- Vastu. Vedic-Vastu is infect a joint effort of Astrologers and Vastu experts. This combination shall provide great insight and knowledge into this art.
          </p>
        </div>

        <div className="card">
          <h2>EDUCATIONALIST</h2>
          <p className='about-font'>
          Technical staff including B.Ed, MEd and Ph.D.’s has helped the college to mold the style of teaching and presenting the course in a student friendly manner. They have particularly helped in the language and contest to be used.
          </p>
        </div>

        {/* <div className="card hov">
          <h2>What We Do</h2>
          <ul className="service-list about-font">
            <li>UX Research</li>
            <li>UX Design</li>
            <li>Freelancing</li>
            <li>Front End Development</li>
            <li>Mobile Apps Design</li>
            <li>Responsive Web Design</li>
          </ul>
        </div> */}

        <div className="card">
          <h2>WRITERS AND TRANSLATORS</h2>
          <p className='about-font'>
          Experienced writers have made the curriculum and study material that is easy to understand and comprehend. Translators have done an excellent job by translating the content to another language without any loss of meaning.
          </p>
        </div>

        <div className="card">
          <h2>RESEARCH AND DEVELOPMENT TEAM</h2>
          <p className='about-font'>
          Research and Development team have done intensive study and research for collecting, analyzing, storing and presenting the real life examples.
          </p>
        </div>


        <div className="card">
          <h2>EDITORS AND PROOF READERS</h2>
          <p className='about-font'>
          Editors have edited the study material so that the flow and consistency of the study material is maintained throughout the course. Proof Readers have assisted in making the courseware language wise and grammatically correct.
          </p>
        </div>

        <div className="card">
          <h2>GRAPHIC DESIGNERS ARTIST</h2>
          <p className='about-font'>
          Professional Artist and experts Graphic Designers have contributed by preparing artistic diagrams, charts, figures and presentations for the course to aid in the learning of subject easily. They have contributed more than 1000 diagram in palmistry itself. Astrology and Astro-Vastu are also well supported by excellent presentations and figures.
          </p>
        </div>

        <div className="card">
          <h2>MANAGEMENT PROFESSIONALS</h2>
          <p className='about-font'>
          M.B.A’S and Management savvy professionals manage the Maharshi College of Vedic Astrology professionally. The delivery of books, student’s doubts clarification, promptness in reply and other such administrations are controlled and managed under supervision of this team.
          </p>
        </div>


        {/* <div className="card hov">
          <h2>Our Team</h2>
          <ul className="team-list about-font">
            <li>Sagar Kolhe, Fullstack Developer</li>
            <li>Rushikesh Gorde, MERN Developer, Full Stack Developer</li>
            <li>Onkar Dighe, FOUNDER</li>
            <li>Saurabh Dighe, CEO and UI/UX Designer</li>
            <li>Arun Kanwade, Full Stack Developer</li>
          </ul>
        </div>

        <div className="card stories-card">
          <h2>Client Success Stories</h2>
          <Carousel 
            showArrows={true}
            showStatus={false}
            showThumbs={false} 
            infiniteLoop 
            autoPlay 
            interval={5000}
            className="custom-carousel"
          >
            <div className="carousel-slide">
              <p className='about-font'>
                <strong>Marriage Hall Website:</strong> We created a comprehensive website for a local marriage hall, featuring a user-friendly interface, real-time booking system, and interactive gallery.
              </p>
            </div>
            <div className="carousel-slide">
              <p className='about-font'>
                <strong>Travel Website:</strong> Our team developed a dynamic travel portal for a regional tourism company, integrating seamless booking functionalities, destination guides, and personalized travel recommendations. 
              </p>
            </div>
            <div className="carousel-slide">
              <p className='about-font'>
                <strong>Computer Center Website:</strong> We designed an informative website for a computer training center, showcasing courses, schedules, and student testimonials.
              </p>
            </div>
            <div className="carousel-slide">
              <p className='about-font'>
                <strong>Hotel Website:</strong> Developed an elegant website for a boutique hotel, with features like online room booking, amenities showcase, and guest reviews.
              </p>
            </div>
            <div className="carousel-slide">
              <p className='about-font'>
                <strong>Plant Nursery Website:</strong> Built an engaging site for a plant nursery, offering product catalogs, care tips, and an online shopping cart for easy purchases.
              </p>
            </div>
          </Carousel>
        </div>

        <div className="card">
          <h2>Our Culture</h2>
          <p className='about-font'>
            At TechLogicWave , we believe in fostering a collaborative and inclusive work environment. Our team is passionate about making a positive impact through our work and community involvement. We offer a free and open environment that encourages creativity and innovation.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;

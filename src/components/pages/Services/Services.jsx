import React from 'react';
import '../../CSS/Style.css';

const Services = () => {
  return (
    <section className="c-section">
      <h2 className="c-section__title">
        <span>Our Services</span>
      </h2>
      <ul className="c-services">
        <li className="c-services__item">
          <h3>Achievement - 6</h3>
          <p>
            We focus on designing experiences that work seamlessly across different screen sizes.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Achievement - 5</h3>
          <p>
            Our detailed UX audit highlights issues in your product. We can then address and resolve all identified problems.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Achievement - 4</h3>
          <p>
            The result of our work is a responsive, accessible, and high-performance website. Whether you have a design ready or need us to create both the design and code, we’re here to help.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Achievement - 3</h3>
          <p>
            Enhance your project's capabilities with our bespoke freelancing services. From web development to creative design, our skilled freelancers provide tailored solutions that meet your unique business needs.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Achievement - 2</h3>
          <p>
            To reach more customers and achieve your business goals, a mobile application is essential. We will work on app design from concept to a fully tested prototype.
          </p>
        </li>
        <li className="c-services__item">
          <h3>Achievement - 1</h3>
          <p>
            We help define your target audience, create user stories, conduct competitive analysis, and much more.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Services;

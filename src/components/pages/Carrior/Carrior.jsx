import React from 'react';
import '../../CSS/Style.css';
import { Link } from 'react-router-dom';


const Carrior = () => {
    return (
        <div>
            <div className="container-fluid p-0">
                <div className="carror-heading position-relative">
                    <img src="https://shantiinfosoft.com/images/careere-bnr-image.png" className="carror-img img-fluid " alt="..." />
                    <div className="carr-head text-center position-absolute ">
                        <h1 className='display-1 fw-bolder text-light head-all'>Course</h1>
                        <p className='text-light'>We’re fearless collaborators, and we’re looking for people with the skills and ambition to make us even better.</p>
                    </div>
                </div>

                {/* card-carrors Section */}
                <section id="card-carrors-container">
                    <div class="container">

                        <div class="row">
                            <div class="col-sm">
                                <div className="card-carror-wrapper">
                                    <div className="card-carror">
                                        <div className="card-carror-top gradient-red">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                        </div>
                                        <div className="card-carror-content">
                                            <h4 className="card-carror-title mt-5">Diploma Course</h4>
                                        </div>
                                        <div className="overlay slider">
                                            <button className='allbtn'> <a href="/front" target="_self"> Apply Now </a></button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm"> <div className="card-carror-wrapper">
                                <div className="card-carror">
                                    <div className="card-carror-top gradient-red">
                                        <div className="icon">
                                            <i className="fa fa-code"></i>
                                        </div>
                                    </div>
                                    <div className="card-carror-content">
                                        <h4 className="card-carror-title mt-5">PG Diploma Course</h4>
                                    </div>
                                    <div className="overlay slider">
                                        <button className='allbtn'> <a href="/back" target="_self"> Apply Now </a></button>
                                    </div>
                                </div>
                            </div></div>

                        </div>
                    </div>
                    <div class="container">

                        <div class="row">
                            <div class="col-sm">
                                <div className="card-carror-wrapper">
                                    <div className="card-carror">
                                        <div className="card-carror-top gradient-red">
                                            <div className="icon">
                                                <i className="fa fa-code"></i>
                                            </div>
                                        </div>
                                        <div className="card-carror-content">
                                            <h4 className="card-carror-title mt-5">Master's Degree</h4>
                                        </div>
                                        <div className="overlay slider">
                                            <button className='allbtn'> <a href="/mern" target="_self"> Apply Now </a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm">  <div className="card-carror-wrapper">
                                <div className="card-carror">
                                    <div className="card-carror-top gradient-red">
                                        <div className="icon">
                                            <i className="fa fa-code"></i>
                                        </div>
                                    </div>
                                    <div className="card-carror-content">
                                        <h4 className="card-carror-title mt-5">PHD(Vidya Vachspati)Courses </h4>
                                    </div>
                                    <div className="overlay slider">

                                        <button className='allbtn'> <a href="/fullstack" target="_self"> Apply Now </a></button>                            </div>
                                </div>
                            </div></div>

                        </div>
                    </div>






                </section>
                {/* End of card-carrors Section */}
            </div>
        </div>
    );
};

export default Carrior;

import React from 'react';
import '../../CSS/Style.css'; // Assuming this is the correct path for your CSS file

const Testimonial = () => {
  return (
    <div className="container testimonial-section">
      <div className="col-lg-10 offset-lg-1 pt-5 pb-5">
        <div id="client-testimonial-carousel" className="carousel slide" data-ride="carousel" style={{ height: '200px' }}>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0"><i className="fa fa-quote-left"></i> Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.</p>
                <footer className="blockquote-footer mt-3">Albert Einstein <cite title="Source Title">genius</cite></footer>
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0"><i className="fa fa-quote-left"></i> Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.</p>
                <footer className="blockquote-footer mt-3">Albert Einstein <cite title="Source Title">genius</cite></footer>
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </blockquote>
            </div>
            <div className="carousel-item text-center p-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0"><i className="fa fa-quote-left"></i> A person who never made a mistake never tried anything new.</p>
                <footer className="blockquote-footer mt-3">Albert Einstein <cite title="Source Title">genius</cite></footer>
                <p className="client-review-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </p>
              </blockquote>
            </div>
          </div>
          <ol className="testimonial-indicators">
            <li data-target="#client-testimonial-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#client-testimonial-carousel" data-slide-to="1"></li>
            <li data-target="#client-testimonial-carousel" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

import React from 'react';
import './App.css';
import JSConfetti from 'js-confetti'
import { Link } from "react-router-dom";
var jsConfetti = new JSConfetti()

class About extends React.Component {
    Confetti() {
        jsConfetti.addConfetti();
      }

  render() {
  return (
    <div>
        <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>NewsUp</title>
          <nav className="navbar navbar-light navbar-expand-md sticky-top navbar-shrink py-3" id="mainNav" style={{background: 'var(--bs-gray-200)'}}>
            <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-1" />
              <button className="btn shadow customBttn customFont">
                <Link to="/news">Feed</Link>
              </button>
            </div>
          </nav>
          <section style={{background: 'var(--bs-white)'}}>
            <div className="container bg-primary-gradient py-5" style={{background: 'var(--bs-white)'}}>
              <img src="assets/img/logo.png" button onClick={this.Confetti} className="center"/>
              <h1 className="fw-bold card-title ttle customFont" style={{textAlign: 'center'}}>Your favorite news stories, all in one place.</h1>
              <div className="py-5 p-lg-5" />
              <a className="btn shadow center customBttn customFont" style={{width: '6vw'}} role="button">^</a>
              <div className="py-5 p-lg-5">
                <div className="py-5 p-lg-5" />
                <div className="row row-cols-1 row-cols-md-2 mx-auto" style={{maxWidth: '900px'}}>
                  <div className="col mb-5">
                    <div className="card shadow-sm">
                      <div className="card-body px-4 py-5 px-md-5" style={{background: 'var(--bs-gray-200)'}}>
                        <h5 className="fw-bold card-title customFont">How it Works</h5>
                        <p className="text-muted card-text mb-4 customFont">NewsUp utilizes NewsAPI and sentiment analysis to bring uplifting news stories to you. The Web application is developed on React.js, Express.js, and MongoDB.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col mb-5">
                    <div className="card shadow-sm">
                      <div className="card-body px-4 py-5 px-md-5" style={{background: 'var(--bs-gray-200)'}}>
                        <h5 className="fw-bold card-title customFont">Why NewsUp?</h5>
                        <p className="text-muted card-text mb-4 customFont"> Feeling overwhelmed due to the constant stream of negative news? Upifting news stories can bring users more positivity in their lives.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 mb-4">
                    <div className="card shadow-sm">
                      <div className="card-body px-4 py-5 px-md-5" style={{background: 'var(--bs-gray-200)'}}>
                        <h5 className="fw-bold card-title customFont">How to Use NewsUp</h5>
                        <p className="text-muted card-text mb-4 customFont">
                          NewsUp provides you positive headlines in your feed. You can look for artices relating to certain topics, or browse articles beyond the headlines.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section />
          <section className="py-5">
            <div className="py-5 p-lg-5">
              <h1 className="fw-bold card-title customFont" style={{textAlign: 'center'}}>Ready to see brighter news stories?</h1>
            </div>
            <a className="btn shadow center customBttn customFont" style={{width: '10vw'}} role="button">
              <Link to="/news">Go to Feed</Link>
            </a>
          </section>
          <footer className="bg-primary-gradient">
            <div className="container py-4 py-lg-5">
              <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                  <h3 className="fs-6 fw-bold customFont">Sources</h3>
                  <ul className="list-unstyled">
                    <li><a href="https://github.com/acm-projects/NewsUp" className="customFont">Source Code</a></li>
                    <li />
                  </ul>
                </div>
                <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column item">
                  <ul className="list-unstyled" />
                </div>
                <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last item social">
                  <div className="fw-bold d-flex align-items-center mb-2" />
                  <h3 className="fs-6 fw-bold customFont">From your friends at</h3>
                  <h1 className="customFont" style={{fontSize: '30px'}}>The Association of Computing Machinery, The University of Texas at Dallas</h1>
                </div>
              </div>
              <hr />
            </div>
          </footer>
    </div>
  );
}
}

export default About;
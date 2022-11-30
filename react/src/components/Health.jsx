import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Health extends React.Component {
    render() {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <title>Newsfeed_V3</title>
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/style.css" />
          <div className="container-scroller">
            <div className="main-panel">
              <header id="header">
                <div className="container">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="align-items-center navbar-top" align="center">
                      <ul className="navbar-left ">
                      </ul>
                      <div>
                        <a className="navbar-brand" href="#"> <img src="assets/img/health/heart.png" width={225} height={150} align="center" /> </a>
                      </div>
                      <div className="d-flex">
                        <ul className="navbar-right">
                        </ul>
                      </div>
                    </div>
                    <div className="navbar-bottom-menu">
                      <button className="navbar-toggler" type="button" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div className="navbar-collapse justify-content-center collapse font-weight-600 mt-3" id="navbarSupportedContent">
                                            <ul className="navbar-nav d-lg-flex justify-content-between align-items-center font-weight-600 mt-3">
                                                <li className="nav-item active" style={{fontSize: 28}}>
                                                    <Link to="/news">News</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/world">Sports</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <button className="btn shadow customBttn" style={{fontSize: 28, fontWeight: 'normal'}}>
                                                        <Link to="/health">Health</Link>
                                                    </button>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/kindness" >Kindness</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/technology" >Technology</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/animals">Animals</Link>
                                                </li>
                                            </ul>
                                        </div>
                    </div>
                  </nav>
                </div>
              </header>
              <div className="container">
                <div className="banner-top-thumb-wrap">
                  <div className="d-lg-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between  mb-3 mb-lg-0">
                      <div className="world-news">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="d-flex position-relative float-left">
                              <h3 className="section-title">Featuring</h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="position-relative image-hover">
                              <a href="https://www.forbes.com/sites/lisakim/2022/01/20/billionaire-mark-cuban-opens-online-pharmacy-to-provide-affordable-generic-drugs/?sh=67ab847e3e4a"> <img src="assets/img/health/meds.jpg" className="img-fluid" /> </a>
                            </div>
                            <h1 className="font-weight-600 mt-3">
                              <a href="https://www.forbes.com/sites/lisakim/2022/01/20/billionaire-mark-cuban-opens-online-pharmacy-to-provide-affordable-generic-drugs/?sh=67ab847e3e4a"> Affordable Online Pharmacy </a>
                            </h1>
                            <p className="fs-15 font-weight-normal">
                              Billionaire investor Mark Cuban launched an online pharmacy Thursday that offers more than 100 generic drugs at an affordable price...
                            </p>
                          </div>
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="row">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/health/headingImg7.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Insulin Prices Dropping Globally
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Due to protests from multiple parties, there has been mounting call...
                                </p>
                              </div>
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/health/headingImg5.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Yes, We Are Living Longer
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  While not all improvements are seen, the global standard of living is increasing...
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/health/headingImg8.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Covid Hospitalization Declines Drastically
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  The hospitalization curve due to Covid-19 has flattened dramatically...
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/health/headingImg9.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Six Year Old Jillian Beats Cancer
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Jillian Morris, who was diagnosed with a stage 4 carcinoma, has done the unthinkable...
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div></div></div>
      );
    }
  }

export default Health;
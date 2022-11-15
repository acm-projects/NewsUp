import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Technology extends React.Component {
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
                      <a className="navbar-brand" href="#"> <img src="assets/img/technology/theart.png" width={210} height={180} align="center" /> </a>
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
                      <div className="navbar-collapse justify-content-center collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-lg-flex justify-content-between align-items-center">
                        <li className="nav-item active">
                            <Link to="/news">News</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/world">Sports</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/health" >Health</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/kindness" >Kindness</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/technology" >Technology</Link>
                          </li>
                          <li className="nav-item">
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
                              <a href="https://www.cnn.com/2022/11/01/business/spacex-falcon-heavy-launch-ussf-44-scn/index.html"> <img src="assets/img/technology/rocket.jpg" className="img-fluid" /> </a>
                            </div>
                            <h1 className="font-weight-600 mt-3">
                              <a href="https://www.cnn.com/2022/11/01/business/spacex-falcon-heavy-launch-ussf-44-scn/index.html"> SpaceX's Latest Rocket Launch </a>
                            </h1>
                            <p className="fs-15 font-weight-normal">
                              SpaceX's Falcon Heavy rocket, world's most powerful rocket, launches after three-year hiatus...
                            </p>
                          </div>
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="row">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg7.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Title
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Synopsis
                                </p>
                              </div>
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg5.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Title
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Synopsis
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg8.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Title
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Synopsis
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg9.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Title
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  Synopsis
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

  export default Technology;
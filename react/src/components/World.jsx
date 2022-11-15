import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class World extends React.Component {
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
                        <a className="navbar-brand" href="#"> <img src="assets/img/world/SportsLogo.png" width={225} height={180} align="center" /> </a>
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
                            <Link to="/news">Home</Link>
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
                              <a href="https://www.cnn.com/world/live-news/nobel-peace-prize-2022-updates-intl"> <img src="assets/img/world/nobel.webp" className="img-fluid" /> </a>
                            </div>
                            <h1 className="font-weight-600 mt-3">
                              <a href="https://www.cnn.com/world/live-news/nobel-peace-prize-2022-updates-intl"> Activists Win Nobel Peace Prize </a>
                            </h1>
                            <p className="fs-15 font-weight-normal">
                              World leaders are applauding the Nobel Prize winning "artisans of peace"...
                            </p>
                          </div>
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="row">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/world/headingImg7.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                   New Women's Marathon Record
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                   Record paces were set at the Boston Marathon this...
                                </p>
                              </div>
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/world/headingImg5.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                    Hearts for the Homeless
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                    Charities have reported increased donations for the holidays...
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/world/headingImg8.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                     Sanitation Standards on the Rise
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                     Developing countries are increasing spending on sanitation...
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/world/headingImg9.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                    Volunteers Against Pollution
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                    Groups of volunteers are gathering and cleaning up local...
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

export default World;
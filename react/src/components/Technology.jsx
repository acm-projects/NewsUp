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
                      <div className="navbar-collapse justify-content-center collapse font-weight-600 mt-3" id="navbarSupportedContent">
                                            <ul className="navbar-nav d-lg-flex justify-content-between align-items-center font-weight-600 mt-3">
                                                <li className="nav-item active" style={{fontSize: 28}}>
                                                    <Link to="/news">News</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/world">Sports</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/health" >Health</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <Link to="/kindness" >Kindness</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <button className="btn shadow customBttn" style={{fontSize: 28, fontWeight: 'normal'}}>
                                                        <Link to="/technology">Technology</Link>
                                                    </button>
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
                              <a href="https://www.cnn.com/2022/11/26/world/spacex-launch-saturday-iss-dwarf-tomatoes-scn%22%3E"> <img src="assets/img/technology/rocket.jpg" className="img-fluid" /> </a>
                            </div>
                            <h1 className="font-weight-600 mt-3">
                              <a href="https://www.cnn.com/2022/11/26/world/spacex-launch-saturday-iss-dwarf-tomatoes-scn%22%3E"> SpaceX's Latest Rocket Launch </a>
                            </h1>
                            <p className="fs-15 font-weight-normal">
                              SpaceX launches tomato seeds, other supplies to International Space Station...
                            </p>
                          </div>
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="row">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg11.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                VR Reaches New Heights
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                Meta is transforming virtual reality as we know it...
                                </p>
                              </div>
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/headingImg12.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Starlite Aid To Ukraine
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                Satellite Technolgy and its role in the Ukraine conflict...
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/gps.webp" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  Next Generation GPS Systems
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  New navigation system with 10 cm accuracy...
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/technology/disaster.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  AI Powered Disaster Tracking
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  The most successful disaster mitigation powered by technology...
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
import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Animals extends React.Component {
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
                        <a className="navbar-brand" href="#"> <img src="assets/img/animals/footprint.png" width={200} height={150} align="center" /> </a>
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
                                                    <Link to="/technology" >Technology</Link>
                                                </li>
                                                <li className="nav-item" style={{fontSize: 26}}>
                                                    <button className="btn shadow customBttn" style={{fontSize: 28, fontWeight: 'normal'}}>
                                                        <Link to="/animals">Animals</Link>
                                                    </button>
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
                              <a href="https://www.cnn.com/2022/11/02/us/bison-texas-quitaque-ctrp/index.html"> <img src="assets/img/animals/bison.webp" className="img-fluid" /> </a>
                            </div>
                            <h1 className="font-weight-600 mt-3">
                              <a href="https://www.cnn.com/2022/11/02/us/bison-texas-quitaque-ctrp/index.html">A Symbiotic Relationship</a>
                            </h1>
                            <p className="fs-15 font-weight-normal">
                              A small herd of bison and a small Texas city are helping each other survive...
                            </p>
                          </div>
                          <div className="col-lg-6  mb-5 mb-sm-2">
                            <div className="row">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/animals/puppy.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                Rescuing The Dogs Of War
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                After 40 days in a bomb shelter, two Ukrainian refugees and 17 dogs are ready to start a new life in Poland...
                                </p>
                              </div>
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/animals/donkey.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                Donkey Saves Snowboarders
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                A spotted Donkey wandered upon two stranded snowboarders in an...
                                </p>
                              </div>
                            </div>
                            <div className="row mt-3">
                              <div className="col-sm-6  mb-5 mb-sm-2">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/animals/parrot.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                The Return Of The Spix Macaw 
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  One of the rarest breed of parrots has been found quite unexpectedly..
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <div className="position-relative image-hover">
                                  <img src="assets/img/animals/servicedog.jpg" className="img-fluid" />
                                </div>
                                <h5 className="font-weight-600 mt-3">
                                  The Best Of Lifelines
                                </h5>
                                <p className="fs-15 font-weight-normal">
                                  The multitude of forms service dogs provide support to the disabled...
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

  export default Animals;
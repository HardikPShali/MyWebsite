import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    // const navigate = useNavigate();

    // const handleRedirect = () => {
    //     navigate('/contact');
    // };

    return (
        <>
            <section className="banner__section">
                <header className="header-section">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="main__logo">
                                <a href="index.html" className="logo">
                                    <img src="assets/img/logo/logonew.png" alt="logo" />
                                </a>
                            </div>
                            <ul className="main-menu">
                                <li>
                                    <a href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#prot">
                                        Work
                                    </a>
                                </li>
                                <li>
                                    <a href="#services">
                                        Services
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="service.html">
                                                Service
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">
                                                Service Details
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#testi">
                                        Testimonial
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        Blog
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="subtwohober">
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li><a href="blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <div className="menu__components d-flex align-items-center">
                                <a href="#contact" className="d-flex fw-500 cmn--btn align-items-center gap-2">
                                    <span className="get__text">
                                        Let's Talk
                                    </span>
                                    <span>
                                        <i className="bi bi-arrow-right fz-20"></i>
                                    </span>
                                </a>
                                <div className="header-bar d-lg-none">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="remove__click">
                                    <i className="bi bi-list"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="container text-start">
                    <div className="row g-4 ">
                        <div className="col-lg-8">
                            <div className="banner__content">
                                <a href="#0" className="bn__currently">
                                    <span className="d-block">
                                        Currently available for freelance
                                    </span>
                                    <span className="d-flex gap-4 align-items-center">
                                        worldwide
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>
                                </a>
                                <h1>
                                    <span className="hone"> Creative Web</span>
                                    <span className="d-block designers" data-text="Developer">Developer</span>
                                </h1>
                                {/* <div className="video__area">
                                    <img src="assets/img/banner/bn-arrow.png" className="vid__arrow" alt="img" />
                                    <a href="https://www.youtube.com/watch?v=zFuJgOiUEso&amp;ab_channel=SujithRajendran" className="video__80 video-btn">
                                        <i className="bi bi-play-fill"></i>
                                    </a>
                                    <span className="proces">
                                        Work
                                        Process
                                    </span>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="banner__thumb" data-aos="fade-up-right" data-aos-duration="300">
                                <img src="assets/img/banner/HardikShaliFullNoBG.png" alt="man-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner__leftinfo">
                    <div className="left__infomobile">
                        <a href="callto:+919724641610">
                            <img src="assets/img/banner/dial.png" alt="img" />
                        </a>
                        <a href="callto:+919724641610">
                            (+91)-9724641610
                        </a>
                    </div>
                    <div className="right__infoscroll">
                        <a href="#prot" className="scroll">
                            scroll down
                        </a>
                        <a href="#prot" className="scroll__bar">
                            <img src="assets/img/banner/scroll-down.png" alt="img" />
                        </a>
                    </div>
                </div>
                <div className="banner__rightinfo">
                    <div className="right__infoscroll">
                        <a href="#0" className="scroll">
                            Follow Me
                        </a>
                        <a href="#0" className="scroll__bar">
                            <img src="assets/img/banner/scroll-down.png" alt="img" />
                        </a>
                    </div>
                    <div className="banner__xlsocial">
                        <ul className="banner__soci d-grid justify-content-center">
                            <li>
                                <a target='_blank' href="https://www.facebook.com/hardik.sali.71/">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            {/* <li>
                                <a href="#0">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li> */}
                            <li>
                                <a target='_blank' href="https://www.instagram.com/hardikksali/">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://hardikshali.vercel.app/">
                                    <i className="bi bi-globe"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://www.linkedin.com/in/hardikshali/">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-left">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            <img src="assets/img/banner/ts1.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts2.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts3.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts4.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts1.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts2.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts3.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts4.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts1.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts2.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts3.png" alt="text-slide" /> <span className="stroke-text"><img src="assets/img/banner/ts4.png" alt="text-slide" /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

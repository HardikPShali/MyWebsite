import React from 'react'

const Projectmeeting = () => {
    return (
        <div>

            <section className="project__metting overhid pt-120 pb-120">
                <div className="container">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-7">
                            <div className="pro__metting__content">
                                <div className="project__head">
                                    <span className="common__sub" data-aos="fade-down" data-aos-duration="1000">
                                        Need a Project?
                                    </span>
                                    <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1600">
                                        Let's work together. fixed
                                        a meeting
                                    </h2>
                                </div>
                                <div className="about__contbox__item pb-30" data-aos="fade-up" data-aos-duration="1000">
                                    <span className="icon">
                                        <i className="bi bi-envelope"></i>
                                    </span>
                                    <span className="box">
                                        <span className="ptext fz-18 mb-1 d-block">
                                            Email
                                        </span>
                                        <a href="#0">
                                            <span className="__cf_email__" data-cfemail="274346514e434a46534e465414141467404a464e4b0944484a">[email&#160;protected]</span>
                                        </a>
                                    </span>
                                </div>
                                <div className="about__contbox__item pb-30 pt-30" data-aos="fade-up" data-aos-duration="1500">
                                    <span className="icon">
                                        <i className="bi bi-geo-alt"></i>
                                    </span>
                                    <span className="box">
                                        <span className="ptext fz-18 mb-1 d-block">
                                            Location
                                        </span>
                                        <a href="#0">
                                            Victoria Street London, England
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="pro__mettingthumb" data-aos="zoom-in" data-aos-duration="2000">
                                <img src="assets/img/project/project-need.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projectmeeting

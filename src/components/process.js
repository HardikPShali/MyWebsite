import React from 'react'

const Process = () => {
    return (

        <section className="process__section pt-120 pb-120">
            <div className="container">
                <div className="project__head text-center">
                    <span className="common__sub" data-aos="fade-down" data-aos-duration="1000">
                        Working Process
                    </span>
                    <h2 className="fw-500" data-aos="fade-up" data-aos-duration="1000">
                        Your dream website in just
                        <span className="d-block">
                            few steps
                        </span>
                    </h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="flip-up" data-aos-duration="500">
                        <div className="process__item">
                            <h2 className="white mb-24">
                                Concept
                            </h2>
                            <p className="mb-30 pra fz-18">
                                Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit,
                            </p>
                            <ul>
                                <li>
                                    Assess existing branding
                                </li>
                                <li>
                                    Conduct research on target audience and competitors
                                </li>
                                <li>
                                    Develop a strategic plan
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="flip-up" data-aos-duration="500">
                        <div className="process__item">
                            <h2 className="white mb-24">
                                Design
                            </h2>
                            <p className="mb-30 pra fz-18">
                                Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit,
                            </p>
                            <ul>
                                <li>
                                    Create wireframes and mockups
                                </li>
                                <li>
                                    Select typography and color palettes
                                </li>
                                <li>
                                    Refine the overall design
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6" data-aos="flip-up" data-aos-duration="500">
                        <div className="process__item">
                            <h2 className="white mb-24">
                                Webflow
                            </h2>
                            <p className="mb-30 pra fz-18">
                                Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit,
                            </p>
                            <ul>
                                <li>
                                    Conduct thorough testing before the website launch
                                </li>
                                <li>
                                    Finalize typography and color choices
                                </li>
                                <li>
                                    Ensure the design is polished and ready for release
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Process

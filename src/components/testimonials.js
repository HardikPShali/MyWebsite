import React from 'react';

const Testimonials = () => {
    const sliderContentStyle = {
        maxHeight: '160px',  // Set the maximum height for the slider content (4 lines)
        overflowY: 'auto',  // Enable vertical scrolling if content exceeds the max height
        overflowX: 'hidden',  // Hide horizontal scrollbar
        scrollbarWidth: 'auto', // For Firefox
        WebkitOverflowScrolling: 'touch', // Enable smooth scrolling on iOS devices
        // Webkit styles for Chrome and Safari
        WebkitScrollbar: {
            width: 'auto',
        },
        WebkitScrollbarThumb: {
            background: '#888',
            borderRadius: '6px',
        },
        WebkitScrollbarTrack: {
            background: '#f1f1f1',
        },
    };

    const testiContentStyle = {
        marginTop: '30px',
        textAlign: 'start'
    }
    return (
        <div>
            <section className="testimonial__section pt-120 pb-120" id="testi">
                <div className="container">
                    <div className="project__head text-center">
                        <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
                            Testimonial
                        </span>
                        <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
                            Positive Feedback from
                            <span className="d-block">
                                Peers
                            </span>
                        </h2>
                    </div>
                    <div className="testimonial__v1wrap pb-120" data-aos="fade-up" data-aos-duration="1000">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="swiper testimonial__slidewrap">
                                    <div className="swiper-wrapper">
                                        <div className="test__slide swiper-slide">
                                            <div className="d-flex mb-40 align-items-center gap-2">
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                            </div>
                                            <div style={sliderContentStyle}>
                                                <p>
                                                    Hardik is a real go-to person for any project he is into. Such a passionate supporter for the lead/manager he is. Whenever there is some kind of chaos or crisis, he never escalates that situation but ensures that others also become cool so that all can focus on implementing a solution to the Problem. I wholeheartedly recommend him for the career opportunities he is going to pursue. All the best my boy!
                                                </p>
                                            </div>
                                            <div style={testiContentStyle}>
                                                <h4 className="base mb-2">
                                                    <a
                                                        href="https://www.linkedin.com/in/anandvcetsdm/"
                                                        className="base mb-2"
                                                        target='_blank'
                                                    >
                                                        Anand Venkitaraman
                                                    </a>
                                                </h4>
                                                <span className="fz-18 ptext">
                                                    Delivery Manager
                                                </span>
                                            </div>
                                        </div>
                                        <div className="test__slide swiper-slide">
                                            <div className="d-flex mb-40 align-items-center gap-2">
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                            </div>
                                            <div style={sliderContentStyle}>
                                                <p>
                                                    It was a pleasure working with Hardik due to his work ethics and professional behaviour, but at the same time, having a fun and lovely attitude that shines across each conversation. You could visibly see his commitment during times of crisis, and I could have always expected nothing but the best effort from him when the situation demanded it. I would recommend him to any team that would like to have a committed and professional resource. Stay blessed.
                                                </p>
                                            </div>
                                            <div style={testiContentStyle}>
                                                <h4 className="base mb-2">
                                                    <a
                                                        href="https://www.linkedin.com/in/tharun-abraham-elias-7644531b2/"
                                                        className="base mb-2"
                                                        target='_blank'
                                                    >
                                                        Tharun Abraham Elias
                                                    </a>
                                                </h4>
                                                <span className="fz-18 ptext">
                                                    Project Manager
                                                </span>
                                            </div>
                                        </div>
                                        <div className="test__slide swiper-slide">
                                            <div className="d-flex mb-40 align-items-center gap-2">
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                            </div>
                                            <div style={sliderContentStyle}>
                                                <p>
                                                    I had the pleasure of working with Hardik for a year while he was a React Developer at Accubits Technologies. During this time, I witnessed his strong logic knowledge and impressive UI skills. Hardik's contributions to our healthcare product were invaluable, and he played a significant role in completing the authentication and appointment booking module in a timely manner.

                                                    Hardik's technical expertise in React was apparent from the start, and his ability to understand complex problems and create solutions was impressive. He was always willing to collaborate with the team and share his knowledge to improve the quality of our work. His commitment to delivering high-quality code was evident, and he always went the extra mile to ensure that everything was functioning as intended.

                                                    In addition to his technical abilities, I was impressed by Hardik's professionalism and work ethic. He was always punctual, reliable, and able to manage his time effectively. His positive attitude and willingness to take on new challenges made him a valuable member of our team.

                                                    Overall, I highly recommend Hardik for any future opportunities. With his strong logic knowledge, excellent UI skills, and proven ability to complete projects on time, I have no doubt that he will continue to be a valuable asset to any organization.
                                                </p>
                                            </div>
                                            <div style={testiContentStyle}>
                                                <h4 className="base mb-2">
                                                    <a
                                                        href="https://www.linkedin.com/in/bearnithi/"
                                                        className="base mb-2"
                                                        target='_blank'
                                                    >
                                                        Nithya Rajan
                                                    </a>
                                                </h4>
                                                <span className="fz-18 ptext">
                                                    Technical Team Lead
                                                </span>
                                            </div>
                                        </div>
                                        <div className="test__slide swiper-slide">
                                            <div className="d-flex mb-40 align-items-center gap-2">
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                                <i className="bi bi-star-fill ratting fz-20"></i>
                                            </div>
                                            <div style={sliderContentStyle}>
                                                <p>
                                                    Hardik is an extremely dedicated and talented professional who consistently demonstrates a strong work ethic and a commitment to excellence.
                                                    He is highly skilled in javascript, his attention to detail and ability to think creatively make him a valuable asset to any team. He is also a great communicator and team player,
                                                    always willing to collaborate and share his ideas to help move projects forward.
                                                </p>
                                            </div>
                                            <div style={testiContentStyle}>
                                                <h4 className="base mb-2">
                                                    <a
                                                        href="https://www.linkedin.com/in/jayakrishnan-a-v-528a16112/"
                                                        className="base mb-2"
                                                        target='_blank'
                                                    >
                                                        Jayakrishnan A V
                                                    </a>
                                                </h4>
                                                <span className="fz-18 ptext">
                                                    Technical Lead
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                    <div className="swiper-pagination2"></div>
                                    <div className="swiper-pagination3"></div>
                                    <div className="swiper-pagination4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="quote">
                            <img src="assets/img/testimonial/quote.png" alt="img" />
                        </div>
                        <div className="man1">
                            <img src="assets/img/recommendations/Anand.jpg" alt="img" />
                        </div>
                        <div className="man2">
                            <img src="assets/img/recommendations/Tharun.jpg" alt="img" />
                        </div>
                        {/* <div className="man3">
                            <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="assets/img/recommendations/NithyaSmall.png" alt="img" />
                        </div> */}
                        <div className="man3">
                            <img src="assets/img/recommendations/Jay.jpg" alt="img" />
                        </div>
                        <div className="test__shape">
                            <img src="assets/img/testimonial/testi-arrow.png" alt="img" />
                        </div>
                    </div>
                    {/* <div className="sponsor__area pt-120">
                        <h4 className="sponsor__title" data-aos="fade-down" data-aos-duration="1000">
                            More than 100+ companies trusted us worldwide
                        </h4>
                        <div className="swiper sponsor__wrap">
                            <div className="swiper-wrapper">
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner1.png" alt="img" />
                                </div>
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner2.png" alt="img" />
                                </div>
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner3.png" alt="img" />
                                </div>
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner4.png" alt="img" />
                                </div>
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner6.png" alt="img" />
                                </div>
                                <div className="sponsor__slide swiper-slide">
                                    <img src="assets/img/testimonial/partner2.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

        </div>
    );
};

export default Testimonials;

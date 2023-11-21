import React from 'react'

const About = () => {
    return (
        <div>

            <section className="about__section pt-120 pb-120" id="about">
                <div className="container">
                    <div className="personal__head text-center">
                        <img src="assets/img/about/section-star.png" className="mb-30" alt="star" data-aos="fade-up"
                            data-aos-duration="1000" />

                        <p className="descrp" data-aos="fade-up"
                            data-aos-duration="1500">
                            I'm Hardik Shali, I'm a Brand & Website Developer, Currently residing
                            in the India, Hardik operates globally and is
                            ready to take on any coding challenge.
                        </p>
                    </div>
                    <div className="singletab">
                        <ul className="tablinks">
                            <li className="nav-links active">
                                <button className="tablink">About Me</button>
                            </li>
                            <li className="nav-links">
                                <button className="tablink">Experience</button>
                            </li>
                            <li className="nav-links">
                                <button className="tablink">Education</button>
                            </li>
                            <li className="nav-links">
                                <button className="tablink">Skills</button>
                            </li>
                        </ul>
                        <div className="tabcontents">
                            <div className="tabitem active">
                                <div className="about__v1wrap">
                                    <div className="row g-4 align-items-lg-start align-items-center">
                                        <div className="col-lg-5">
                                            <div className="about__onethumb" data-aos="zoom-in" data-aos-duration="500">
                                                <img src="assets/img/about/personal-infothumb.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="about__onecontent">
                                                <h2 className="h2-head" data-aos="fade-up"
                                                    data-aos-duration="500">
                                                    Personal Info
                                                </h2>
                                                <p className="p-descrip" data-aos="fade-up"
                                                    data-aos-duration="500">
                                                    Hello, I'm Hardik, a dedicated front-end developer with a passion for creating user-centric digital solutions. I blend creativity with technical prowess to craft aesthetically pleasing, functionally robust websites. Recently, I've delved into the world of data, seeking insights to enhance user experiences. Beyond the digital realm, music, sports, and poetry fuel my creativity. Let's shape the future of digital experiences together.                                                </p>
                                                <div className="about__contactwrap">
                                                    <div className="row g-4">
                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                                                            <div className="abox">
                                                                <div className="about__contbox__item">
                                                                    <span className="ptext fz-18 mb-20 d-block">
                                                                        Email
                                                                    </span>
                                                                    <a href="mailto:hardikshali1612@gmail.com" className="textp">
                                                                        <span className="__cf_email__" data-cfemail="6d000c19040c1e5454542d430e0200" style={{ textTransform: 'lowercase' }}>hardikshali1612@gmail.com</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                                                            <div className="abox">
                                                                <div className="about__contbox__item">
                                                                    <span className="ptext fz-18 mb-20 d-block">
                                                                        Phone
                                                                    </span>
                                                                    <a href="callto:+919724641610">
                                                                        +(91) 97246-41610
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                                                            <div className="abox">
                                                                <div className="about__contbox__item">
                                                                    <span className="ptext fz-18 mb-20 d-block">
                                                                        Address
                                                                    </span>
                                                                    <a target='_blank' href="https://maps.app.goo.gl/rSEnUVeNWzoEyVhP6">
                                                                        Surat, Gujarat, India
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-6" data-aos="zoom-in">
                                                            <div className="abox">
                                                                <div className="about__contbox__item">
                                                                    <span className="ptext fz-18 mb-20 d-block">
                                                                        Follow
                                                                    </span>
                                                                    <ul className="d-flex align-items-center justify-content-center gap-2 gap-xl-4">
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabitem">
                                <div className="about__v1wrap">
                                    <div className="row g-4 align-items-lg-start align-items-center">
                                        <div className="col-lg-5">
                                            <div className="about__onethumb">
                                                <img src="assets/img/about/personal-infothumb.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="about__onecontent">
                                                <h2>
                                                    My Experience
                                                </h2>
                                                <p>
                                                    Hey there, curious minds! 👋 I'm Hardik, a coding virtuoso and accidental stand-up philosopher. Imagine combining the logic of coding with the humor of a sitcom—that's pretty much me in a nutshell. Here's a glimpse into my tech-infused rollercoaster called life:                                                </p>
                                                <div className="exprience__box mt-30 text-end">
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            Apr 2023 - Sep 2023
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Implementation Consultant
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="https://www.dataio.co/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    Dataio · On-Site
                                                                </a>

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            Dec 2021 - Apr 2023
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Software Engineer

                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="https://accubits.com/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    Accubits Technologies Inc · Remote
                                                                </a>

                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            Mar 2021 - Jul 2021
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Java Developer
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="http://www.vnsguit.org/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    Apprenticeship
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            Dec 2020 - Feb 2021
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                .NET Developer
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="http://www.galaxydev.in/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    Galaxy Developers· Internship
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            Feb 2020 - May 2020
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                PHP Developer
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="https://innovativeiteration.com/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    Innovative Iteration Software Solutions· Internship
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabitem">
                                <div className="about__v1wrap">
                                    <div className="row g-4 align-items-lg-start align-items-center">
                                        <div className="col-lg-5">
                                            <div className="about__onethumb">
                                                <img src="assets/img/about/personal-infothumb.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="about__onecontent">
                                                <h2>
                                                    My Education
                                                </h2>
                                                <p>
                                                    Welcome to the digital realm where creativity meets cutting-edge technology! I am a passionate explorer of the vast universe of information, a trailblazer in the dynamic landscapes of Data Science and Information Technology.                                                </p>
                                                <div className="exprience__box mt-30 text-end">
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            2025
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Master's Degree in Data Science
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="https://www.iu.org/en-in"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    IU International University of Applied Sciences
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            2022
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Master's Degree in Information Technology MSc (IT)
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="http://www.vnsguit.org/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    J.P.Dawer institute of Information Science and Technology - BSc (IT) & MSc (ICT)
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="exri__item">
                                                        <span className="fz-18 fw-500 base">
                                                            2020
                                                        </span>
                                                        <div className="expri__cont">
                                                            <h4 className="mb-15 text-dark">
                                                                Bachelor's Degree in Information Technology BSc (IT)
                                                            </h4>
                                                            <p className="fz-18 pra d-block">
                                                                <a
                                                                    href="http://www.vnsguit.org/"
                                                                    target='_blank'
                                                                    style={{
                                                                        color: "#0078d4",
                                                                        cursor: "pointer",
                                                                        transition: "textShadow 0.3s",
                                                                    }}
                                                                >
                                                                    J.P.Dawer institute of Information Science and Technology - BSc (IT) & MSc (ICT)
                                                                </a>                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tabitem">
                                <div className="about__v1wrap">
                                    <div className="row g-4 align-items-lg-start align-items-center">
                                        <div className="col-lg-5">
                                            <div className="about__onethumb">
                                                <img src="assets/img/about/personal-infothumb.png" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="about__onecontent">
                                                <h2>
                                                    My Skills
                                                </h2>
                                                <p>
                                                    I specialize in creating engaging and responsive user interfaces, utilizing a variety of technologies to bring web applications to life.
                                                </p>
                                                <div className="about__contactwrap">
                                                    <div className="row g-4">
                                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="abox myskill__item">
                                                                <div className="thumb">
                                                                    <img height={100} width={100} src="assets/img/about/front-end.png" alt="img" />
                                                                </div>
                                                                <div className="mys">
                                                                    <span className="ptext fz-18 mb-15 d-block">
                                                                        Frontend Development: Javascript, ReactJS, NextJs, CSS3, HTML5, Material-UI, Redux, Typescript, Bootstrap 5, Styled component, Cross-browser Compatibility, Responsive Web Design
                                                                    </span>
                                                                    {/* <h1 className="fw-600">
                                                                        90%
                                                                    </h1> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="abox myskill__item">
                                                                <div className="thumb">
                                                                    <img height={100} width={100} src="assets/img/about/developing.png" alt="img" />
                                                                </div>
                                                                <div className="mys">
                                                                    <span className="ptext fz-18 mb-15 d-block">
                                                                        Backend Development: C#.NET, DotNET Core, SQL
                                                                    </span>
                                                                    {/* <h1 className="fw-600">
                                                                        85%
                                                                    </h1> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="abox myskill__item">
                                                                <div className="thumb">
                                                                    <img height={100} width={100} src="assets/img/about/merge.png" alt="img" />
                                                                </div>
                                                                <div className="mys">
                                                                    <span className="ptext fz-18 mb-15 d-block">
                                                                        DevOps and Version Control: GIT
                                                                    </span>
                                                                    {/* <h1 className="fw-600">
                                                                        97%
                                                                    </h1> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="abox myskill__item">
                                                                <div className="thumb">
                                                                    <img height={100} width={100} src="assets/img/about/script.png" alt="img" />
                                                                </div>
                                                                <div className="mys">
                                                                    <span className="ptext fz-18 mb-15 d-block">
                                                                        Scripting and API Development: Python, REST APIs
                                                                    </span>
                                                                    {/* <h1 className="fw-600">
                                                                        97%
                                                                    </h1> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-6">
                                                            <div className="abox myskill__item">
                                                                <div className="thumb">
                                                                    <img height={100} width={100} src="assets/img/about/project-management.png" alt="img" />
                                                                </div>
                                                                <div className="mys">
                                                                    <span className="ptext fz-18 mb-15 d-block">
                                                                        Project Management and Issue Tracking: JIRA
                                                                    </span>
                                                                    {/* <h1 className="fw-600">
                                                                        97%
                                                                    </h1> */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="marquee-wrapper text-slider">
                <div className="marquee-inner to-right">
                    <ul className="marqee-list d-flex">
                        <li className="marquee-item">
                            <img src="assets/img/banner/ts1.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts2.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts3.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts4.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts5.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts6.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts7.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts1.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts2.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts3.png" alt="text-slide" /></span>
                            <img src="assets/img/banner/ts4.png" alt="text-slide" /> <span class="stroke-text"><img src="assets/img/banner/ts6.png" alt="text-slide" /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About

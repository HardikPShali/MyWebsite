import React, { useState } from 'react';
import ProjectModal from './projectmodal';

const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleModalShow = (project) => {
        setCurrentProject(project);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setCurrentProject(null);
        setShowModal(false);
    };

    const handleItemClick = (e, project) => {
        e.preventDefault();
        handleModalShow(project);
    };

    const handleImageClick = (e, project) => {
        e.preventDefault();
        e.stopPropagation();
        handleModalShow(project);
    };

    const handleArrowClick = (e, project) => {
        e.preventDefault();
        e.stopPropagation();
        handleModalShow(project);
    };

    const projects = [
        {
            title: 'HealthierU',
            subtitle: 'Health Care Product...',
            description: `
                <u>User Interface Design:</u><br />
                The goal was to create a responsive and visually appealing user interface that would provide a seamless experience to the end users. I utilized Material-UI components and CSS styling to create a consistent look and feel across the application.<br /><br />
                <u>State Management and Interactivity:</u><br />
                Additionally, I used ReactJS to create reusable components and implemented state management using hooks to enhance the user experience. API integration was crucial to the project's success.<br /><br />
                <u>Chat and Video Call Integration:</u><br />
                I also leveraged Agora SDK to implement chat and video call functionality to make the application more interactive.<br /><br />
                <u>Collaboration and Project Management:</u><br />
                Collaboration was vital, and I utilized Git and Jira to manage the project and communicate with my team members effectively. By prioritizing tasks and coordinating efficiently, we were able to deliver excellent results to the client.<br /><br />
                <u>Project Link:</u><br />
                You can check out the project at <a href="https://healthieru.ae/" target='_blank'>healthieru.ae</a>
            `,
            image: 'logo_white_wrong.svg',
        },
        {
            title: 'FutureGrail',
            subtitle: 'NFT Product...',
            description: ` <u>CoinFactory Overview:</u><br />
            CoinFactory is a battle-tested, self-hosted, and ultra-secure ICO platform that has successfully hosted more than ten ICOs. It boasts features such as referral programs, bounty programs, logging reporting, and end-to-end customization options to give your ICO platform a unique look.<br /><br />

            <u>Technology Stack:</u><br />
            Throughout the development process, I utilized NextJS for server-side rendering and Redux for state management. Styled Components were used to create a visually appealing and consistent user interface. API integration was also crucial to make the platform dynamic.<br /><br />

            <u>Collaboration and Project Management:</u><br />
            Collaboration was key during the project, and Git and Jira were used to manage and track progress. I prioritized tasks based on importance and worked with developers to identify and resolve software bugs. Additionally, I integrated third-party tools and components into the application and coordinated efficient large-scale software deployments.<br /><br />

            <u>Project Outcome:</u><br />
            The end result is a robust, scalable, modular, and API-centric infrastructure that delivers excellent results for our client, FutureGrail in Singapore. To keep the client updated, I delivered project reports and milestone updates to the supervisor.<br /><br />

            <u>Project Link:</u><br />
            You can check out the project at <a href="https://www.futuregrail.com/" target='_blank'>futuregrail.com`,
            image: 'futuregrail.png',
        }

    ];

    return (
        <div>
            <section className="project__section pt-120 pb-120" id="prot">
                <div className="container">
                    <div className="project__head text-center">
                        <span className="common__sub" data-aos="fade-down" data-aos-duration="1000">
                            Complete Project
                        </span>
                        <h2 className="fw-500" data-aos="fade-down" data-aos-duration="2000">
                            Look at my portfolio and give me your feedback
                        </h2>
                    </div>
                    <div className="row g-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="col-lg-6 col-md-6"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className="project__item cus__mb60"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    onClick={() => handleItemClick(project)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div
                                        className="thumb mb-30 imgc"
                                        onClick={(e) => handleImageClick(e, project)}
                                    >
                                        <img
                                            src={`assets/img/project/${project?.image}`}
                                            alt="img"
                                        />
                                    </div>

                                    <div className="content d-flex align-items-center justify-content-between gap-2">
                                        <a href="#" className="left__cont">
                                            <span className="base mb-2 mb-xxl-3 d-block text-uppercase">
                                                {project?.title}
                                            </span>
                                            <h3>{project?.subtitle}</h3>
                                        </a>
                                        <a href="#" className="common__icon imgc" style={{ cursor: 'pointer' }} onClick={(e) => handleArrowClick(e, project)}>
                                            <i className="bi bi-arrow-up-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="custom__hover">
                        <a href="#" className="hover__circle mauto" data-aos="zoom-out-down" data-aos-duration="2000">
                            <span className="box">
                                <i className="bi bi-arrow-up-right"></i>
                                <span className="textmore">Click More Work</span>
                            </span>
                        </a>
                    </div> */}
                </div>
            </section>

            {/* Modal */}
            {showModal && (
                <ProjectModal showModal={showModal} handleModalClose={handleModalClose} projectDetails={currentProject} />
            )}
        </div>
    );
};

export default Portfolio;

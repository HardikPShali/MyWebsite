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
        // e.preventDefault();
        handleModalShow(project);
    };

    const handleImageClick = (event, project) => {
        event.preventDefault();
        event.stopPropagation();
        handleModalShow(project);
    };

    const handleArrowClick = (event, project) => {
        event.preventDefault();
        event.stopPropagation();
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
            link: 'https://healthieru.ae/'
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
            link: 'https://www.futuregrail.com/'
        },
        {
            title: 'InsuranceHub',
            subtitle: 'Insurance Product...',
            description: `  <u>Project Modules:</u><br />
            The website comprises two main modules, namely Admin and Customer. The Admin module enables the management of policies and payment processes. Additionally, the Admin module can be utilized as an intermediary software by agents to provide policies to customers. The Customer module allows customers to purchase policies and make payments as per their chosen policy.<br /><br />

            <u>Database Management:</u><br />
            All user information files are stored in a centralized database that is managed by the system. The convenience and speed of purchasing insurance online are unparalleled, allowing customers to buy policies from anywhere in the world at any time.<br /><br />

            <u>Profile Management:</u><br />
            This system offers profile management for all policyholders, along with an interface that provides customers with easy access to their policy details. Payment processes are similar to e-commerce transactions, and customers can easily pay their policies online. This hassle-free process is completed in minimal time, reducing overall costs.<br /><br />

            <u>Eliminating Commissions:</u><br />
            Directly buying from the insurance company eliminates the agent's commission, and the paperless process saves costs. The system offers customers information about new and existing policies online.<br /><br />

            <u>Development Process:</u><br />
            Tasks were prioritized and completed based on their level of importance, with collaboration between the team and developers to identify and resolve software bugs. Technologies used include C#.NET, HTML, CSS, JavaScript, and SQL.`,
            image: 'insurancehub.png'
        },
        {
            title: 'CareCare',
            subtitle: 'Vehicle Service Product...',
            description: ` <u>Project Overview:</u><br />
            I developed a Car Service Management system called CarCare that provides customers with low-cost four-wheel vehicle services. The system allows customers to access a range of service centers without needing to leave their homes.<br /><br />

            <u>Features:</u><br />
            CarCare enables various service center owners to register their centers, and customers can choose from a variety of service centers based on their requirements. To enhance the customer experience, an Online Payment module has been implemented, making the payment process quick and secure.<br /><br />

            <u>Development Process:</u><br />
            Throughout the development process, I prioritized tasks to ensure that the most critical issues were addressed first. I worked with developers to identify and remove software bugs and analyzed the source code to identify functionality issues. To create an intuitive and visually appealing user interface, I utilized CSS, JS, and BOOTSTRAP 4.<br /><br />

            <u>Technologies Used:</u><br />
            The project was developed using Sublime Text 3 as the development tool, Core PHP as the technology, and MYSQL Server as the backend. The end result is a user-friendly and efficient system that provides customers with a range of affordable and convenient car service options.`,
            image: 'carcare.png'
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
                                            style={{
                                                width: '100%', // Make the image fill the container width
                                                height: '100%', // Make the image fill the container height
                                                objectFit: 'cover', // Ensure the image covers the container while maintaining its aspect ratio
                                                display: 'block', // Remove any extra space below the image
                                                margin: 'auto', // Center the image horizontally
                                            }}
                                        />

                                    </div>

                                    <div className="content d-flex justify-content-between gap-2">
                                        <a href={project?.link} target='_blank' className="left__cont">
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

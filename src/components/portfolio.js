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
            description: ` <u>Project Overview:</u><br />
            This project involved the conversion of the existing InsuranceHub project, which was developed in DotNet, into Java. The aim was to replicate the functionality of the original project using Java technologies.<br /><br />

            <u>Technology Stack:</u><br />
            The new project utilized Java Enterprise Edition (JavaEE) and JavaServer Faces (JSF) to create a server-side web application. HTML, CSS, and JavaScript were used to create a responsive and visually appealing user interface. SQL was used for database management.<br /><br />

            <u>Code Migration:</u><br />
            The project involved migrating the existing codebase from DotNet to Java while ensuring that all functionalities remained intact. The team worked on prioritizing tasks and completing them in order of importance. They also worked on identifying and removing software bugs to ensure a smooth transition from the old project to the new one.<br /><br />

            <u>Admin Panel:</u><br />
            The Admin Panel for H&T Insurance allows the management of various aspects related to insurance policies and customer feedback. The panel enables admins to manage the insurance companies and hospitals that are associated with InsuranceHub. It provides the ability to add, update, or delete different types of insurance policies.<br /><br />

            <u>Customer Interaction:</u><br />
            In addition, the panel displays customer feedback and inquiries, providing valuable insights into customer needs and concerns. Admins can also manage customer accounts, including the status of payments for various policies.<br /><br />

            <u>Client Panel:</u><br />
            The Client Panel allows customers to sign in and log in to their accounts, where they can browse through different policies for term and health insurance. They can select a policy as per their requirements, provide necessary details, and make payments online. Customers can only select one policy at a time, and the panel provides an Invoice and Purchase History feature to keep track of transactions.<br /><br />

            <u>Technology Stack for User Experience:</u><br />
            The panel uses JakartaEE, JSF, HTML, CSS, JavaScript, and SQL technologies to create a seamless user experience. The use of these technologies ensures that the system is efficient, secure, and easy to use. Customers can also update their profiles, ensuring that their details are up-to-date and accurate. Overall, the system provides a comprehensive and efficient solution for managing insurance policies and customer accounts.`,
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

import React from 'react'

const certificates = () => {
    return (
        <section class="blog__section overhid pt-120 pb-120">
            <div class="container">
                <div class="row g-4">
                    <div class="col-xl-4 col-lg-3">
                        <div class="project__head">
                            <span class="common__sub" data-aos="fade-down" data-aos-duration="1000">
                                My Learnings
                            </span>
                            <h2 class="fw-500 mt-3" data-aos="fade-down" data-aos-duration="1500">
                                Recent Certificates
                            </h2>
                            <div class="blog__hoverbox">
                                {/* <a href="blog.html" class="hover__circle wow fadeInUp" data-wow-duration="1.6s">
                                    <span class="box">
                                        <i class="bi bi-arrow-up-right"></i>
                                        <span class="textmore">
                                            Click More Work
                                        </span>
                                    </span>
                                </a> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-9">
                        <div class="blog__rightwrap">
                            <div class="service__uniquewrap">
                                <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1000">
                                    <div class="left__service">
                                        <div class="serial__adjust">
                                            <div class="cont">
                                                <span class="dates">
                                                    May, 2023
                                                </span>
                                                <h3>
                                                    <a
                                                        href="https://www.udemy.com/course/the-complete-web-development-bootcamp/?kw=The+Complete+2023+Web+Development+Bootcamp&src=sac"
                                                        target='_blank'
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        The Complete 2023 Web Development Bootcamp
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            textAlign: 'left',
                                            maxHeight: '150px',
                                            overflowY: 'auto',
                                            whiteSpace: 'pre-line',
                                        }}>
                                            This web development course offers hands-on experience in building 16 diverse projects to strengthen your portfolio, positioning you for junior developer roles. It covers a range of technologies, including JavaScript, React for frontend development, Node for backend development, and even Web3 development. By the end, you'll have the skills to create any website or web application, whether for personal projects, startups, or businesses, and you'll be prepared to work as a freelance web developer while mastering best practices in professional development.
                                        </p>
                                    </div>
                                    {/* <a href="assets/img/blog/opa-blog.png" class="common__icon imgc">
                                        <i class="bi bi-eye"></i>
                                    </a> */}
                                </div>
                                <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1400">
                                    <div class="left__service">
                                        <div class="serial__adjust">
                                            <div class="cont">
                                                <span class="dates">
                                                    June, 2023
                                                </span>
                                                <h3>
                                                    <a
                                                        href="https://www.udemy.com/certificate/UC-080ed108-bd9a-4f61-8275-db9c7b447901/"
                                                        target='_blank'
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        The Complete Python Bootcamp From Zero to Hero in Python
                                                    </a>
                                                </h3>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            textAlign: 'left',
                                            maxHeight: '150px',
                                            overflowY: 'auto',
                                        }}>
                                            This comprehensive Python learning program covers a wide range of skills, from mastering both Python 2 and Python 3 to building games like Tic Tac Toe and Blackjack, and delving into advanced features such as the collections module and decorators. You'll also gain proficiency in Object Oriented Programming, learn to work with timestamps, create GUIs in the Jupyter Notebook system, and build a portfolio of Python projects for personal and professional use, enabling you to leverage Python for various tasks and projects.
                                        </p>
                                    </div>
                                    {/* <a href="assets/img/blog/opa-blog.png" class="common__icon imgc">
                                        <i class="bi bi-eye"></i>
                                    </a> */}
                                </div>
                                <div class="service__unique__item pb-40 pt-40" data-aos="fade-up" data-aos-duration="1800">
                                    <div class="left__service">
                                        <div class="serial__adjust">
                                            <div class="cont">
                                                <span class="dates">
                                                    June, 2023
                                                </span>
                                                <h3>
                                                    <a href="https://www.udemy.com/certificate/UC-4d5476ea-1f5c-44eb-a94b-a9d08accbe69/" target='_blank' style={{
                                                        cursor: "pointer",
                                                    }}>The Data Science Course: Complete Data Science Bootcamp 2023</a>
                                                </h3>
                                            </div>
                                        </div>
                                        <p style={{
                                            fontSize: '14px',
                                            lineHeight: '1.5',
                                            textAlign: 'left',
                                            maxHeight: '150px',
                                            overflowY: 'auto',
                                            whiteSpace: 'pre-line',
                                        }}>

                                            This comprehensive data science course equips you with a diverse skill set to excel in the field. You'll learn statistical analysis, Python programming with essential libraries like NumPy, pandas, matplotlib, and Seaborn, advanced statistical techniques, Tableau for data visualization, and machine learning with tools like stats models and scikit-learn. Additionally, you'll delve into deep learning using TensorFlow, gain a deep understanding of the mathematics behind machine learning, and apply these skills to real-world business scenarios. By the end, you'll be well-versed in data preprocessing, regression, clustering, factor analysis, and the development of machine learning algorithms, all while honing your intuition for solving real-world data challenges.
                                        </p>
                                    </div>
                                    {/* <a href="assets/img/blog/opa-blog.png" class="common__icon imgc">
                                        <i class="bi bi-eye"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default certificates

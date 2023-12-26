import React, { useState, useEffect } from 'react';
const Footer = () => {
    const [lastCommitDate, setLastCommitDate] = useState('');

    useEffect(() => {
        const fetchLastCommitDate = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/HardikPShali/MyWebsite/commits?per_page=1');
                const data = await response.json();

                if (data && data.length > 0) {
                    const commitDate = new Date(data[0].commit.author.date);
                    const formattedDate = commitDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    });
                    setLastCommitDate(formattedDate);
                }
            } catch (error) {
                console.error('Error fetching last commit date:', error);
            }
        };

        fetchLastCommitDate();
    }, []);;
    return (

        <footer className="footer__section" id="contact">
            <div className="container">
                <div className="footer__top pt-120 pb-120">
                    <div className="fl" data-aos="fade-up" data-aos-duration="1000">
                        Get In Touch
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="get__content">
                                <p>
                                    Hello, I’m Hardik Shali, Software Engineer
                                    based in India.
                                </p>
                                <a href="mailto:hardikshali1612@gmail.com" className="textp">
                                    <span className="__cf_email__" data-cfemail="6d000c19040c1e5454542d430e0200">hardikshali1612@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="get__rightcontetn">
                                <div className="row g-4">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a target='_blank' href="https://www.facebook.com/hardik.sali.71/" className="social__footer">
                                            Facebook
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a target='_blank' href="https://www.instagram.com/hardiiksali/" className="social__footer">
                                            Instagram
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a target='_blank' href="https://www.linkedin.com/in/hardikshali/" className="social__footer">
                                            linkedIn
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <a target='_blank' href="https://wa.me/+919724641610" className="social__footer">
                                            WhatsApp
                                            <i className="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom cmn__bg">
                <div className="container">
                    <div className="copyright">
                        <p className="white"> Copyright © 2023 <a href="#about" className="base">Hardik.</a> All rights reserved.</p>
                        <ul className="terms">
                            <li>
                                <a href="#0">
                                    Last Updated:
                                </a>
                            </li>
                            <li>
                                <a href="#0">
                                    [{lastCommitDate}]
                                </a>
                            </li>
                        </ul>
                        <a href="#about" className="toparrow">
                            <i className="bi bi-arrow-up-short"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer

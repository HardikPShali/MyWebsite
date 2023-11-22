import React from 'react'

const Subsidebar = () => {
    return (
        <>
            <div className="subside__barmenu sub__contact">
                <div className="remove__click d-flex justify-content-center align-items-center">
                    <i className="bi bi-x-lg"></i>
                </div>
                <div className="sub__contact__wrapper d-grid">
                    <a href="#" onClick={() => window.location.reload()} className="side-logo">
                        <img src="assets/img/logo/logonew.png" alt="img" style={{ width: '150px' }} />
                    </a>
                    <p>
                        I'm Hardik Shali, I'm a Brand & Website Developer, Currently residing
                        in the India, Hardik operates globally and is
                        ready to take on any coding challenge.
                    </p>
                    <div className="sub__contact-left d-grid">
                        <div className="sub__contac-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0px' }}>
                            <div className="content" style={{ textAlign: 'left' }}>
                                <span className="address d-block">
                                    ADDRESS
                                </span>
                                <span className="textp">
                                    Surat, Gujarat, India
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0px' }}>
                            <div className="content" style={{ textAlign: 'left' }}>
                                <span className="address d-block">
                                    EMAIL
                                </span>
                                <a href="mailto:hardikshali1612@gmail.com" className="textp">
                                    <span className="__cf_email__" data-cfemail="6d000c19040c1e5454542d430e0200" style={{ textTransform: 'lowercase' }}>hardikshali1612@gmail.com</span>
                                </a>
                            </div>
                        </div>
                        <div className="sub__contac-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '0px' }}>
                            <div className="content" style={{ textAlign: 'left' }}>
                                <span className="address d-block">
                                    CALL NOW
                                </span>
                                <a href="callto:+919724641610" className="textp">
                                    +91 97246-41610
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="sub__contact-right mb-80 position-relative">
                        <ul className="social d-flex gap-3">
                            <li>
                                <a target='_blank' href="https://www.facebook.com/hardik.sali.71/">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a target='_blank' href="https://github.com/HardikPShali">
                                    <i className="bi bi-github"></i>
                                </a>
                            </li>
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
                    <a href="#contact" className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
                        <span>
                            <i className="bi bi-chevron-right"></i>
                        </span>
                        <span className="get__text">
                            Let's Talk
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Subsidebar

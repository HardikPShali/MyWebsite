import React from 'react'

const Subsidebar = () => {
    return (
        <>
            <div className="subside__barmenu sub__contact">
                <div className="remove__click d-flex justify-content-center align-items-center">
                    <i className="bi bi-x-lg"></i>
                </div>
                <div className="sub__contact__wrapper d-grid">
                    <a href="index-2.html" className="side-logo">
                        <img src="assets/img/logo/logo.png" alt="img" />
                    </a>
                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div className="sub__contact-left d-grid">
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    address
                                </span>
                                <span className="textp">
                                    Victoria Street London,
                                </span>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    email
                                </span>
                                <a href="javascript:void(0)" className="textp">
                                    <span className="__cf_email__" data-cfemail="6d000c19040c1e5454542d430e0200">[email&#160;protected]</span>
                                </a>
                            </div>
                        </div>
                        <div className="sub__contac-item">
                            <div className="content">
                                <span className="address d-block">
                                    call now
                                </span>
                                <a href="jasacript:void(0)" className="textp">
                                    +98 4758 2154 021
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="sub__contact-right mb-80 position-relative">
                        <ul className="social d-flex gap-3">
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#0" className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2">
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

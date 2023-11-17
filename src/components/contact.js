import React from 'react'

const Contact = () => {
    return (
        <>
            <section class="breadcrumnd__section">
                <div class="container pt-120 pb-120">
                    <div class="row g-4 justify-content-center">
                        <div class="col-lg-8">
                            <div class="breadcrumnd__wrap text-center">
                                <h1>
                                    Let's Start Something
                                </h1>
                                <ul class="breakcrumnd__cont justify-content-center">
                                    <li>
                                        <a href="#">
                                            Home
                                        </a>
                                    </li>
                                    <li class="white">
                                        /
                                    </li>
                                    <li class="base">
                                        Let's Start Something
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact__section">
                <div className="container">
                    <div className="row g-4">
                        {/* <div className="col-lg-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="contact__box">
               <div className="replay__box cmn__bg">
                  <h3>
                     Leave a Reply
                  </h3>
                  <form action="#" name="enq" method="post" action="https://bestwpware.com/html/tf/matias-demo/matias-light/contact.php" onsubmit="return validation();" className="row g-4">
                     <div className="col-lg-12">
                        <input type="text" name="name" placeholder="Name"/>
                     </div>
                     <div className="col-lg-12">
                        <input type="email" name="email" placeholder="Eamil"/>
                     </div>
                     <div className="col-lg-12">
                        <textarea name="message" rows="5" placeholder="Message"></textarea>
                     </div>
                     <div className="col-lg-12">
                        <button type="submit" value="Send message" name="submit" className=" border-0 d-flex fw-500 cmn--btn align-items-center gap-2">
                           <span className="get__text">
                              Send Message
                           </span>
                           <span>
                              <i className="bi bi-arrow-right fz-20"></i>                       
                           </span>
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div> */}
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="1500">
                            <div className="contact__rightside cmn__bg">
                                <h4 className="mb-30">
                                    Feel free to contact me anytime
                                </h4>
                                <div className="contact__item mb-20">
                                    <span className="he1">
                                        Email
                                    </span>
                                    <a href="#0">
                                        <span className="__cf_email__" data-cfemail="3a5e5b4c535e575b4e535b490909097a5d575b535614595557">[email&#160;protected]</span>
                                    </a>
                                </div>
                                <div className="contact__item mb-20">
                                    <span className="he1">
                                        Phone
                                    </span>
                                    <a href="#0">
                                        +(2) 871 382 023
                                    </a>
                                </div>
                                <div className="contact__item">
                                    <span className="he1">
                                        Address
                                    </span>
                                    <span className="address">
                                        Victoria Street London
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact

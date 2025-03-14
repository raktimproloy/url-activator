import ContactSection from '@/components/shared/contactSection';
import Layouts from '../src/layouts/Layouts';

const Contact = () => {
    return (
        <Layouts pageTitle="Contact" noHeader={undefined} noFooter={undefined} children={undefined}>
            {/* <section className="blog-area p-t-130 p-b-130">
        <div className="container">
            <div className="row justify-content-lg-start justify-content-center">
                <div className="col-xl-4 col-lg-5 col-md-7 col-sm-10">
                    <div className="contact-info-boxes-v2">
                        <div className="contact-info-box m-b-30 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="icon icon-gradient-1">
                                <i className="fal fa-map-marker-alt"></i>
                            </div>
                            <div className="info-body">
                                <h5 className="title">Our Location</h5>
                                <p>354 Oakridge, Camden <br/> NJ 08102 - USA</p>
                            </div>
                        </div>
                        <div className="contact-info-box m-b-30 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="icon icon-gradient-2">
                                <i className="fal fa-envelope-open-text"></i>
                            </div>
                            <div className="info-body">
                                <h5 className="title">Email Address</h5>
                                <p><a href="mailto:supportinfobiz@gmail.com">supportinfobiz@gmail.com</a></p>
                                <p><a href="www.businesscon.net" target="_blank">www.businesscon.net</a></p>
                            </div>
                        </div>
                        <div className="contact-info-box wow fadeInUp" data-wow-delay="0.5s">
                            <div className="icon icon-gradient-3">
                                <i className="fal fa-phone"></i>
                            </div>
                            <div className="info-body">
                                <h5 className="title">Urgent Call</h5>
                                <p><a href="tel:+01234578999">+012 (345) 678 99</a></p>
                                <p><a href="tel:+8563214">+8563214</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 offset-xl-1 col-md-10">
                    <div className="contact-form-area m-t-md-100">
                        <div className="common-heading tagline-boxed m-b-40">
                            <span className="tagline">Send Us Message</span>
                            <h2 className="title">Have Any Questions ? <br/> Let’s Start to Talk</h2>
                        </div>
                        <div className="contact-form-v2">
                            <form>
                                <div className="input-field m-b-30">
                                    <input type="text" id="fullName" placeholder="Full Name" name="name" required=""/>
                                    <label htmlFor="fullName">Name</label>
                                </div>
                                <div className="input-field m-b-30">
                                    <input type="text" id="phoneNumber" placeholder="Phone Number" name="phone" required=""/>
                                    <label htmlFor="phoneNumber">Phone</label>
                                </div>
                                <div className="input-field m-b-30">
                                    <input type="email" id="emailAddress" placeholder="Email Address" name="email" required=""/>
                                    <label htmlFor="emailAddress">Email</label>
                                </div>
                                <div className="input-field m-b-30">
                                    <input type="text" id="subject" placeholder="I Would Like To Discuses " name="subject" required=""/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                                <div className="input-field textarea-field m-b-30">
                                    <textarea id="message" placeholder="Message" name="message"></textarea>
                                </div>
                                <div className="input-field">
                                    <button type="submit" className="template-btn">Send Message <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
            <ContactSection />

            <section className="contact-map-section">
                <div className="contact-map">
                    <iframe src="https://maps.google.com/maps?q=new%20york&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                </div>
            </section>
        </Layouts>
    );
};

export default Contact;

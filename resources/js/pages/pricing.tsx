import Pricing from '@/components/shared/pricing';
import AccordionV1 from '../src/components/AccordionV1';
import Counter from '../src/components/Counter';
import Subscribe from '../src/components/Subscribe';
import Layouts from '../src/layouts/Layouts';
const PricingPage = () => {
    return (
        <Layouts pageTitle="Pricing Plan" noHeader={undefined} noFooter={undefined} children={undefined}>
            <Pricing />
            {/* <!--====== End Pricing Section ======--> */}

            {/* <!--====== Start Counter Section ======--> */}
            <section className="counter-section counter-section-bordered">
                <div className="container-fluid container-1420">
                    <div className="counter-section-inner">
                        <div className="row counter-items-v2">
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item white-color counter-left">
                                    <div className="counter-wrap">
                                        <Counter end={35} />
                                        <span className="suffix">
                                            <i className="far fa-plus"></i>
                                        </span>
                                    </div>
                                    <p className="title">Our Trusted Active Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item white-color counter-left">
                                    <div className="counter-wrap">
                                        <Counter end={75} />
                                        <span className="suffix">
                                            <i className="far fa-plus"></i>
                                        </span>
                                    </div>
                                    <p className="title">SEO Project Complate</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item white-color counter-left">
                                    <div className="counter-wrap">
                                        <Counter end={94} />
                                        <span className="suffix">
                                            <i className="far fa-plus"></i>
                                        </span>
                                    </div>
                                    <p className="title">Experience Member</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="counter-item white-color counter-left">
                                    <div className="counter-wrap">
                                        <Counter end={28} />
                                        <span className="suffix">
                                            <i className="far fa-plus"></i>
                                        </span>
                                    </div>
                                    <p className="title">Years Services Provide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== End Counter Section ======--> */}

            {/* <!--====== Start FAQ section ======--> */}
            <section className="faq-section p-t-130 p-b-130">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                                <div className="common-heading tagline-boxed m-b-30">
                                    <span className="tagline">Asked Question</span>
                                    <h2 className="title">
                                        Frequently Asked <br /> Questions
                                    </h2>
                                </div>
                                <div className="landio-accordion-v1 accordion-bordered">
                                    <AccordionV1 />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="faq-image text-lg-right m-t-md-60">
                                <img src="assets/img/faq/faq-image-2.png" alt="faq image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Subscribe />
        </Layouts>
    );
};

export default PricingPage;

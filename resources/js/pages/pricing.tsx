import Pricing from '@/components/shared/pricing';
import AccordionV1 from '../src/components/AccordionV1';
import Counter from '../src/components/Counter';
import Subscribe from '../src/components/Subscribe';
import Layouts from '../src/layouts/Layouts';
import FaqSection from '@/components/shared/faqSection';
import NewsletterSection from '@/components/shared/newsletterSection';
const PricingPage = () => {
    return (
        <Layouts pageTitle="Pricing Plan" noHeader={undefined} noFooter={undefined} children={undefined}>
            <Pricing />
            {/* <!--====== End Pricing Section ======--> */}

            {/* <!--====== Start Counter Section ======--> */}
            <section className="counter-section counter-section-bordered mb-5">
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
            <FaqSection/>
            <div className='mt-5'>

            <NewsletterSection />
            </div>
        </Layouts>
    );
};

export default PricingPage;

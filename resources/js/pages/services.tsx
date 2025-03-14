import Pricing from '@/components/shared/pricing';
import { Link } from '@inertiajs/react';
import AccordionV1 from '../src/components/AccordionV1';
import Subscribe from '../src/components/Subscribe';
import NewsletterSection from '@/components/shared/newsletterSection';
import Layouts from '../src/layouts/Layouts';
import FaqSection from '@/components/shared/faqSection';

const Services = () => {
    return (
        <Layouts pageTitle="Our Services" noHeader={undefined} noFooter={undefined} children={undefined}>
            {/* <!--====== Service Section Start ======--> */}
            <section className="service-section p-t-130 p-b-100">
                <div className="container">
                    {/* <!-- Icon Box One --> */}
                    <div className="row fancy-icon-boxes-v1">
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="fancy-icon-box m-b-30">
                                <div className="box-icon">
                                    <i className="flaticon-goal-1"></i>
                                </div>
                                <div className="box-content">
                                    <h4 className="title">
                                        <Link href="/service-details">
                                            <a>Automated Keep-Alive System</a>
                                        </Link>
                                    </h4>
                                    <p>
                                    Our system prevents inactivity by sending automated requests, ensuring your hosting stays live 24/7.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="fancy-icon-box m-b-30">
                                <div className="box-icon">
                                    <i className="flaticon-talk-show-1"></i>
                                </div>
                                <div className="box-content">
                                    <h4 className="title">
                                        <Link href="/service-details">
                                            <a>24/7 Uptime Maintenance</a>
                                        </Link>
                                    </h4>
                                    <p>
                                    No more downtime! We continuously monitor and maintain your free-hosted projects to keep them online.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="fancy-icon-box m-b-30">
                                <div className="box-icon">
                                    <i className="flaticon-layers-2"></i>
                                </div>
                                <div className="box-content">
                                    <h4 className="title">
                                        <Link href="/service-details">
                                            <a>Multi-Platform Support</a>
                                        </Link>
                                    </h4>
                                    <p>
                                    We support Vercel, Render, and other free hosting providers, ensuring your projects remain active across multiple platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="fancy-icon-box m-b-30">
                                <div className="box-icon">
                                    <i className="flaticon-diamond-1"></i>
                                </div>
                                <div className="box-content">
                                    <h4 className="title">
                                        <Link href="/service-details">
                                            <a>Secure & Hassle-Free Management</a>
                                        </Link>
                                    </h4>
                                    <p>
                                    Just provide your hosting details, and we handle the rest with complete security and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== Service Section End ======--> */}

            {/* <!--====== Start FAQ section ======--> */}
            <FaqSection/>
            {/* <!--====== End Faq With SEO score box ======--> */}

            {/* <!--====== Start Pricing Section ======--> */}
            <Pricing />
            {/* <!--====== End Pricing Section ======--> */}

            <NewsletterSection />
        </Layouts>
    );
};

export default Services;

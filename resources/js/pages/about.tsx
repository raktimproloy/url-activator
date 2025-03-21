import Counter from '../src/components/Counter';
import Layouts from '../src/layouts/Layouts';

const About = () => {
    return (
        <Layouts pageTitle="About Us" noHeader={undefined} noFooter={undefined} children={undefined}>
            <section className="about-us-area p-t-130 p-b-130 border-bottom-primary">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-6 col-md-10">
                            <div className="preview-image-showcase p-r-70 p-r-lg-40 p-r-md-0 p-b-md-40">
                                <div className="images-left">
                                    <div className="image-hover-zoom-overly">
                                        <img src="assets/img/preview-gallery/about-thumbnail-1.jpg" alt="About thumbnail one" />
                                    </div>
                                    <img src="assets/img/preview-gallery/about-thumbnail-3.jpg" alt="About thumbnail three" />
                                </div>
                                <div className="images-right">
                                    <img src="assets/img/preview-gallery/about-thumbnail-2.jpg" alt="About thumbnail two" />
                                    <img src="assets/img/preview-gallery/about-thumbnail-4.jpg" alt="About thumbnail four" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 col-md-9">
                            <div className="about-us-content">
                                <div className="common-heading tagline-boxed m-b-30">
                                    <span className="tagline">About Company</span>
                                    <h2 className="title">{`We Keep Your Free Hosting Alive—24/7!`}</h2>
                                </div>
                                <p>
                                Free hosting services like Vercel and Render often go inactive after a while, causing downtime for your projects. We provide an automated solution that ensures your hosting stays live without manual intervention. Whether you're managing a single website or multiple projects, our system keeps them running smoothly—no more unexpected shutdowns!
                                </p>

                                <div className="simple-icon-boxes row m-t-40">
                                    <div className="col-sm-6">
                                        <div className="simple-icon-box m-b-40">
                                            <div className="icon">
                                            <i className="fal fa-tools"></i>
                                                
                                            </div>
                                            <h5 className="title">Reliable Uptime, Zero Hassle!</h5>
                                            <p>Our system continuously sends automated requests to keep your free hosting active, so you never have to worry about downtime again.</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="simple-icon-box m-b-40">
                                            <div className="icon">
                                            <i className="fal fa-users"></i>
                                            </div>
                                            <h5 className="title">Built for Developers & Businesses</h5>
                                            <p>Whether you're a developer, freelancer, or business owner, our service helps you keep your hosted projects running 24/7 without interruptions.</p>
                                        </div>
                                    </div>
                                </div>

                                <a href="#" className="template-btn bordered-btn">
                                    Learn More <i className="far fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== About Area End ===== --> */}

            {/* <!-- ===== Service Section Start ===== --> */}
            <section className="service-area p-t-130 p-b-130">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="common-heading tagline-boxed m-b-30 text-center">
                                <span className="tagline">Popular Services</span>
                                <h2 className="title">Our Services – Keeping Your Hosting Alive!</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center iconic-boxes-v1">
                        <div className="col-xl-3 col-md-6 col-sm-10">
                            <div className="iconic-box m-t-30">
                                <div className="icon icon-gradient-3">
                                    <i className="far fa-user-chart"></i>
                                </div>
                                <h4 className="title">Automated Keep-Alive System</h4>
                                <p>Our system prevents your free hosting (Vercel, Render, and more) from going inactive by automatically sending periodic requests.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-10">
                            <div className="iconic-box m-t-30">
                                <div className="icon icon-gradient-4">
                                    <i className="far fa-compass"></i>
                                </div>
                                <h4 className="title">24/7 Uptime Maintenance</h4>
                                <p>We ensure your hosted projects stay live round-the-clock, eliminating unexpected downtime.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-10">
                            <div className="iconic-box m-t-30">
                                <div className="icon icon-gradient-5">
                                    <i className="far fa-squirrel"></i>
                                </div>
                                <h4 className="title">Multi-Platform Support</h4>
                                <p>Our service works seamlessly with multiple free hosting providers, keeping all your projects running without limits.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-10">
                            <div className="iconic-box m-t-30">
                                <div className="icon icon-gradient-6">
                                    <i className="far fa-fingerprint"></i>
                                </div>
                                <h4 className="title">Easy & Secure Management</h4>
                                <p>Just provide your hosting details, and we handle the rest—secure, hassle-free, and efficient hosting uptime management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== Service Section End ===== --> */}

            {/* <!--====== Start Counter Section ======--> */}
            <section className="counter-section section-with-map-bg bg-primary-color p-t-80 p-b-80 p-t-md-160">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            {/* <!-- Preview Gallery Two --> */}
                            <div className="preview-galley-v3 m-b-md-100">
                                <img className="preview-image-1" src="assets/img/preview-gallery/count-down.png" alt="Preview Image" />
                                <img className="preview-image-2" src="assets/img/preview-gallery/count-down-top.png" alt="Preview Image" />
                                <img className="preview-image-3" src="assets/img/preview-gallery/count-down-bottom.png" alt="Preview Image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            {/* <!-- Counter Item --> */}
                            <div className="row counter-items-v1 p-xl-5">
                                <div className="col-6">
                                    <div className="counter-item m-b-60">
                                        <div className="icon">
                                            <i className="fal fa-users"></i>
                                        </div>
                                        <div className="counter-wrap">
                                            <Counter end={96327} decimals={undefined} />
                                            <span className="suffix">+</span>
                                        </div>
                                        <p className="title">Daily Active Users</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="counter-item m-b-60">
                                        <div className="icon">
                                            <i className="fal fa-file-alt"></i>
                                        </div>
                                        <div className="counter-wrap">
                                            <Counter end={78630} decimals={undefined} />
                                            <span className="suffix">+</span>
                                        </div>
                                        <p className="title">Project Complate</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="fal fa-cloud-download"></i>
                                        </div>
                                        <div className="counter-wrap">
                                            <Counter end={56326} decimals={undefined} />
                                            <span className="suffix">+</span>
                                        </div>
                                        <p className="title">Download Software</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="counter-item">
                                        <div className="icon">
                                            <i className="fal fa-gem"></i>
                                        </div>
                                        <div className="counter-wrap">
                                            <Counter end={63020} decimals={undefined} />
                                            <span className="suffix">+</span>
                                        </div>
                                        <p className="title">5 Star Rating Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};

export default About;

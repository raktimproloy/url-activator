import { Head, Link, usePage } from '@inertiajs/react';
import NewsletterSection from '@/components/shared/newsletterSection';
import Pricing from '@/components/shared/pricing';
import AccordionV1 from '../src/components/AccordionV1';
import Counter from '../src/components/Counter';
import Footer2 from '../src/layouts/footer/Footer-2';
import Header2 from '../src/layouts/headers/Header2';
import Layouts from '../src/layouts/Layouts';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <Layouts noFooter noHeader pageTitle={undefined} children={undefined}>
                {/* {video && <VideoPopup close={setVideo} />} */}
                <Header2 />
                <section className="hero-area-v2">
                    <div className="hero-content-wrapper">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8">
                                    <div className="hero-content">
                                        <span className="title-tag wow fadeInDown" data-wow-delay="0.2s">
                                            <span>Live Website</span> Faster solutions
                                        </span>
                                        <h1 className="hero-title wow fadeInUp" data-wow-delay="0.3s">
                                        Your Website, Always <span className='fw-bold text-warning'>Live!</span> 
                                        </h1>
                                        <ul className="hero-btns d-flex align-items-center">
                                            <li className="wow fadeInUp" data-wow-delay="0.4s">
                                                <Link href="/pricing">
                                                    <a className="template-btn bordered-btn">
                                                        Start Free Trial <i className="fas fa-arrow-right"></i>
                                                    </a>
                                                </Link>
                                            </li>
                                            <li className="wow fadeInUp" data-wow-delay="0.3s">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-10">
                                    <div className="hero-img preview-blob-image with-floating-icon wow fadeInUp text-center" data-wow-delay="0.4s">
                                        <img src="assets/img/hero/hero-blob.png" alt="Image" />

                                        <div className="floating-icons">
                                            <img src="assets/img/particle/thumbs-up-white.png" alt="Icon" className="icon-1 animate-float-bob-y" />
                                            <img
                                                src="assets/img/particle/announcement-mic-white.png"
                                                alt="Icon"
                                                className="icon-2 animate-float-bob-x"
                                            />
                                            <img src="assets/img/particle/paper-plane-white.png" alt="Icon" className="icon-3 animate-float-bob-x" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Info Boxes --> */}
                    <div className="container-fluid container-1380">
                        <div className="info-boxes-wrapper wow fadeInUp" data-wow-delay="0.4s">
                            <div className="info-boxes">
                                <div className="box-item">
                                    <div className="box-icon">
                                        <img src="assets/img/icon/infobox-icon-1.png" alt="info icon one" />
                                    </div>
                                    <div className="box-content">
                                        <h4 className="box-title">Never Let Your Free Hosting Expire</h4>
                                        <p>
                                        We keep your Vercel, Render, and other free hosting services active—24/7, no interruptions!
                                        </p>
                                    </div>
                                </div>
                                <div className="box-item">
                                    <div className="box-icon">
                                        <img src="assets/img/icon/infobox-icon-2.png" alt="info icon two" />
                                    </div>
                                    <div className="box-content">
                                        <h4 className="box-title">Auto-Renew Your Free Hosting!</h4>
                                        <p>No more downtime! We ensure your free hosting stays live without manual checks. Let me know if you need more refinements!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End Hero Area ======--> */}

                {/* <!--====== Start About Section ======--> */}
                <section className="about-section p-t-130 p-b-130">
                    <div className="container">
                        <div className="row justify-content-lg-between justify-content-center align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-10">
                                <div className="preview-blob-image with-floating-icon m-b-md-100">
                                    <img src="assets/img/about-img-1.png" alt="Image" />

                                    <div className="floating-icons">
                                        <img src="assets/img/particle/thumbs-up.png" alt="Icon" className="icon-1 animate-float-bob-y" />
                                        <img src="assets/img/particle/announcement-mic.png" alt="Icon" className="icon-2 animate-float-bob-x" />
                                        <img src="assets/img/particle/paper-plane.png" alt="Icon" className="icon-3 animate-float-bob-x" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-10">
                                <div className="about-text">
                                    <div className="common-heading tagline-boxed-two title-line line-less-bottom m-b-40">
                                        <span className="tagline">About Landio</span>
                                        <h2 className="title">
                                        We Keep Your{' '}
                                            <span>
                                            Free<img src="assets/img/particle/title-line.png" alt="Line" />
                                            </span>{' '}
                                            Hosting Alive!
                                        </h2>
                                    </div>
                                    <p className="text-pullquote pullquote-secondary-color m-b-35">
                                    We ensure your Vercel, Render, and other free hosting services stay live—no more unexpected downtime!
                                    </p>
                                    <p>
                                    Tired of your free hosting services shutting down after inactivity? We provide an automated solution that keeps your Vercel, Render, and similar hosting platforms active 24/7. Whether you're running a personal project or managing multiple websites, our service ensures uninterrupted uptime without manual intervention. Focus on what matters—we keep your hosting alive!
                                    </p>

                                    <Link href="/about" className="template-btn primary-bg-2 m-t-40">
                                        Learn More <i className="far fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--====== End About Section ======--> */}

                {/* <!--====== Start Service With counter ======--> */}
                <div className="service-with-counter">
                    {/* <!--====== Start Counter Section ======--> */}
                    <section className="counter-section counter-section-bordered bordered-secondary-bg">
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

                    {/* <!--====== Service Section Start ======--> */}
                    <section className="service-section border-bottom-primary-3 p-t-130 p-b-130 bg-soft-grey-color">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="common-heading title-line-bottom m-b-20 text-center">
                                        <span className="tagline">What We Do</span>
                                        <h2 className="title">Keeping Your Free Hosting <br/> Active—Effortlessly!</h2>
                                        <img src="assets/img/particle/title-line-2.png" alt="Image" className="Line" />
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-12">
                                    <div className="row fancy-icon-boxes-v2">
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="fancy-icon-box color-1 m-t-30">
                                                <div className="box-icon">
                                                    <i className="flaticon-video-player" />
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="title">
                                                        <a href="#">24/7 Live</a>
                                                    </h4>
                                                    <p>We keep your free hosting active round-the-clock—no more unexpected downtime!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="fancy-icon-box color-2 m-t-30">
                                                <div className="box-icon">
                                                    <i className="flaticon-volume" />
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="title">
                                                        <a href="#">Unlimited Domain Hosting</a>
                                                    </h4>
                                                    <p>Keep multiple Vercel, Render, and other free-hosted projects running without limits.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="fancy-icon-box color-3 m-t-30">
                                                <div className="box-icon">
                                                    <i className="flaticon-live-chat" />
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="title">
                                                        <a href="#">Easy Management</a>
                                                    </h4>
                                                    <p>A hassle-free setup—just provide your hosting details, and we take care of the rest.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="fancy-icon-box color-4 m-t-30">
                                                <div className="box-icon">
                                                    <i className="flaticon-microphone" />
                                                </div>
                                                <div className="box-content">
                                                    <h4 className="title">
                                                        <a href="#">Automate Keep Alive</a>
                                                    </h4>
                                                    <p>Our system prevents inactivity shutdowns by sending automated requests to your hosting.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--====== Service Section End ======--> */}
                </div>
                {/* <!--====== End Service With counter ======--> */}

                {/* <!--====== Start Faq With SEO score box ======--> */}
                <div className="faq-with-seo-score-box">
                    {/* <!--====== Start Pricing Section ======--> */}
                    <Pricing />

                    {/* <!--====== Start SEO score box ======--> */}
                    <NewsletterSection />
                    {/* <!--====== End SEO score box ======--> */}
                    {/* <!--====== Start FAQ section ======--> */}
                    <section className="faq-section bg-soft-grey-color">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-10">
                                    <div className="faq-content p-r-60 p-r-lg-30 p-r-md-0">
                                        <div className="common-heading tagline-boxed-two title-line m-b-80">
                                            <span className="tagline">Our Approach</span>
                                            <h2 className="title">
                                                Grow Your Business With Our SEO{' '}
                                                <span>
                                                    Agency <img src="assets/img/particle/title-line.png" alt="Line" />
                                                </span>
                                            </h2>
                                        </div>
                                        <div className="landio-accordion-v1">
                                            <AccordionV1 />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-9">
                                    <div className="faq-image text-lg-right m-t-md-60">
                                        <img src="assets/img/faq/faq-image.png" alt="faq image" className="animate-float-bob-y" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!--====== End Faq With SEO score box ======--> */}
                </div>
                {/* <!--====== End FAQ section ======--> */}

                <Footer2 extraClass={undefined} />
            </Layouts>
        </>
    );
}

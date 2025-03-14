import { Link } from '@inertiajs/react';
const Footer = () => {
    return (
        <footer className="template-footer">
            <div className="container">
                <div className="footer-widgets p-t-80 p-b-30">
                    <div className="row">
                        {/* <!-- Single Footer Widget --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget text-block-widget">
                                <h5 className="widget-title">About Landio</h5>
                                <p>Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam.</p>

                                <ul className="social-links m-t-20">
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-behance"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Single Footer Widget --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="d-lg-flex justify-content-center">
                                <div className="widget nav-widget">
                                    <h5 className="widget-title">Resources</h5>
                                    <ul>
                                        {/* <li>
                      <Link href="/about">
                        <a>Saas Development</a>
                      </Link>
                    </li> */}
                                        <li>
                                            <Link href="/service">
                                                <a>Our Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                <a>Pricing</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Footer Widget --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="d-lg-flex justify-content-center">
                                <div className="widget nav-widget">
                                    <h5 className="widget-title">Company</h5>
                                    <ul>
                                        <li>
                                            <Link href="/about">
                                                <a>Terms Of Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Refund and Return Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Company History</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Footer Widget --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget pl-xl-5">
                                <h5 className="widget-title">Download</h5>
                                <ul>
                                    <li className="m-b-10">
                                        <Link href="/services">
                                            <a className="template-btn shadow-none">
                                                Apple Store <i className="fab fa-apple"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a className="template-btn bg-soft-grey-color">
                                                Google Play <i className="fab fa-google-play"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-copyright border-top-primary">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-auto col-12">
                            <div className="copyright-logo text-sm-left text-center">
                                <img src="assets/img/logo-1.png" alt="Landio" />
                            </div>
                        </div>
                        <div className="col-sm-auto col-12">
                            <p className="copyright-text text-sm-right pt-sm-0 pt-4 text-center">
                                © {new Date().getFullYear()} <a href="#">Landio</a>. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

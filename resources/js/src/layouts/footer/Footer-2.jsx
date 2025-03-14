import { Link } from '@inertiajs/react';
const Footer2 = ({ extraClass }) => {
    return (
        <footer className={`${extraClass ? extraClass : 'template-footer bg-primary-color-2 footer-white-color'}`}>
            <div className="container">
                <div className="footer-widgets p-t-80 p-b-30">
                    <div className="row">
                        {/* <!-- Single Footer Widget --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="widget text-block-widget">
                                <h5 className="widget-title">About Landio</h5>
                                <p>Sed ut perspiciatis undmnis iste natus error sit voluptatem accusantium dolore udantiuy totam rem aperiam.</p>

                                <ul className="social-links bordered-style m-t-20">
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
                                        <li>
                                            <Link href="/about">
                                                <a>Saas Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Our Products</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>User Strategy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Blogs &amp; Guides</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Premium Support</a>
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
                                                <a>About Landio</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>Contact &amp; Support</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Success History</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services">
                                                <a>Setting &amp; Privacy</a>
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
                            <div className="widget contact-widget pl-xl-5">
                                <h5 className="widget-title">Contact Us</h5>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-map-marker-alt"></i>
                                            55 Old Broad Street, London, EC2M
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:support@gmail.com">
                                            <i className="fal fa-envelope-open-text"></i>
                                            support@gmail.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+01234567899">
                                            <i className="fal fa-phone"></i>
                                            +012 (345) 678 99
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright border-top-off-white">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-auto col-12">
                            <div className="copyright-logo text-sm-left text-center">
                                <img src="assets/img/logo-white-2.png" alt="Landio" />
                            </div>
                        </div>
                        <div className="col-sm-auto col-12">
                            <p className="copyright-text text-sm-right pt-sm-0 pt-4 text-center">
                                © 2021 <a href="#">Landio</a>. All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;

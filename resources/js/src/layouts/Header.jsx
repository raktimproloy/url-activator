import { Link, usePage } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import MobileMenu from './MobileMenu';
import SearchTrigger from './SearchTrigger';

const Header = () => {
    const user = usePage().props.auth.user;
    const [trigger, setTrigger] = useState(false);
    const [mobileMenuTrigger, setMobileMenuTrigger] = useState(false);
    const currentPath = usePage().url;
    return (
        <Fragment>
            <header className="template-header navbar-center sticky-header">
                <div className="container-fluid container-1430">
                    <div className="header-inner">
                        <div className="header-left">
                            <div className="branding-and-language-selection">
                                <div className="brand-logo">
                                    <Link href="/">
                                        <a>
                                            <img src="assets/img/logo_x.png" alt="logo" width={250} />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="header-center">
                            <nav className="nav-menu d-none d-xl-block">
                                <ul>
                                    <li className={currentPath === '/' ? 'active' : ''}>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className={currentPath === '/about' ? 'active' : ''}>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li className={currentPath === '/services' ? 'active' : ''}>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li className={currentPath === '/pricing' ? 'active' : ''}>
                                        <Link href="/pricing">Pricing</Link>
                                    </li>
                                    <li className={currentPath === '/contact' ? 'active' : ''}>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <ul className="header-extra">
                                {user && user.email ? (
                                    <li className="d-none d-sm-block">
                                        <Link href="/dashboard">
                                            <a className="template-btn">
                                                Dashboard <i className="far fa-user-circle" />
                                            </a>
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="d-none d-md-block">
                                        <Link href="/login">
                                            <a className="template-btn">
                                                Get Started Free <i className="fas fa-arrow-right" />
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                <li className="d-xl-none">
                                    <a href="#" className="navbar-toggler" onClick={() => setMobileMenuTrigger(true)}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Start Mobile Slide Menu --> */}
                <MobileMenu show={mobileMenuTrigger} close={() => setMobileMenuTrigger(false)} />
                {/* <!-- End Mobile Slide Menu --> */}
            </header>
            <SearchTrigger close={() => setTrigger(false)} trigger={trigger} />
        </Fragment>
    );
};

export default Header;

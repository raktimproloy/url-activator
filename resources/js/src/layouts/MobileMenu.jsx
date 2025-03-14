import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services } from './Menus';
const MobileMenu = ({ show, close }) => {
    const [activeMenu, setActiveMenu] = useState('');
    const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? '' : value),
        activeLi = (value) => (value === activeMenu ? { display: 'block' } : { display: 'none' });
    return (
        <div className={`mobile-slide-panel ${show ? 'panel-on' : ''}`}>
            <div className="panel-overlay" onClick={() => close()}></div>
            <div className="panel-inner">
                <div className="mobile-logo">
                    <Link href="/">
                        <a>
                            <img src="assets/img/logo-1.png" alt="ReHostX" />
                        </a>
                    </Link>
                </div>
                <nav className="mobile-menu">
                    <ul>
                        <li>
                            <Link href="/">
                                <a>
                                    Demos
                                    <span className="dd-trigger" onClick={() => activeMenuSet('demo')}>
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </a>
                            </Link>
                            <ul className="sub-menu" style={activeLi('demo')}>
                                <Demos />
                            </ul>
                        </li>
                        <li>
                            <Link href="/services">
                                <a>
                                    Services
                                    <span className="dd-trigger" onClick={() => activeMenuSet('Services')}>
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </a>
                            </Link>
                            <ul className="sub-menu" style={activeLi('Services')}>
                                <Services />
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                Pages
                                <span className="dd-trigger" onClick={() => activeMenuSet('Pages')}>
                                    <i className="fas fa-angle-down"></i>
                                </span>
                            </a>
                            <ul className="sub-menu" style={activeLi('Pages')}>
                                <Pages1st />
                                <Portfolio />
                                <Pages2nd />
                            </ul>
                        </li>
                        <li>
                            <Link href="/blog-standard">
                                <a>
                                    Blog
                                    <span className="dd-trigger" onClick={() => activeMenuSet('Blog')}>
                                        <i className="fas fa-angle-down"></i>
                                    </span>
                                </a>
                            </Link>
                            <ul className="sub-menu" style={activeLi('Blog')}>
                                <Blog />
                            </ul>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                <a href="#" className="panel-close" onClick={() => close()}>
                    <i className="fal fa-times"></i>
                </a>
            </div>
        </div>
    );
};

export default MobileMenu;

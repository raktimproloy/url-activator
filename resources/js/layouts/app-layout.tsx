import { type ReactNode } from 'react';
// import "../../../public/assets/icons/bootstrap-icons.css";
// import "../../../public/assets/icons/fontawesome-icons.css";
// import "../../../public/assets/icons/themify-icons.css";
import { faCog, faFileInvoice, faLink, faMoon, faSignOutAlt, faTable, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';

interface AppLayoutProps {
    children: ReactNode;
}
// const cleanup = useMobileNavigation();
export default ({ children, ...props }: AppLayoutProps) => (
    <div className="nk-app-root">
        <div className="nk-main">
            <div className="nk-sidebar nk-sidebar-fixed is-dark" data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-menu-trigger">
                        <a href="#" className="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu">
                            <FontAwesomeIcon icon={faTachometerAlt} />
                        </a>
                    </div>
                    <div className="nk-sidebar-brand">
                        <Link href="/" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo2x.png 2x" alt="logo" />
                            <img className="logo-dark logo-img" src="./images/logo-dark.png" srcSet="./images/logo-dark2x.png 2x" alt="logo-dark" />
                        </Link>
                    </div>
                </div>
                <div className="nk-sidebar-element nk-sidebar-body">
                    <div className="nk-sidebar-content">
                        <div className="nk-sidebar-menu" data-simplebar>
                            <ul className="nk-menu">
                                <li className="nk-menu-heading">
                                    <h6 className="overline-title text-primary-alt">User Panel</h6>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="/dashboard" className="nk-menu-link">
                                        <span className="nk-menu-icon">
                                            <FontAwesomeIcon icon={faTachometerAlt} />
                                        </span>
                                        <span className="nk-menu-text">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item has-sub">
                                    <Link href="/dashboard/url-management" className="nk-menu-link">
                                        <span className="nk-menu-icon">
                                            <FontAwesomeIcon icon={faLink} />
                                        </span>
                                        <span className="nk-menu-text">URL Management</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item has-sub">
                                    <Link href={route('dashboard.invoice')} className="nk-menu-link">
                                        <span className="nk-menu-icon">
                                            <FontAwesomeIcon icon={faFileInvoice} />
                                        </span>
                                        <span className="nk-menu-text">Invoice</span>
                                    </Link>
                                </li>
                                <li className="nk-menu-item">
                                    <Link href="/dashboard/pricing" className="nk-menu-link">
                                        <span className="nk-menu-icon">
                                            <FontAwesomeIcon icon={faTable} />
                                        </span>
                                        <span className="nk-menu-text">Pricing Table</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-wrap">
                <div className="nk-header nk-header-fixed is-light">
                    <div className="container-fluid">
                        <div className="nk-header-wrap">
                            <div className="nk-header-tools">
                                <ul className="nk-quick-nav">
                                    <li className="dropdown user-dropdown">
                                        <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                            <div className="user-toggle">
                                                <div className="user-avatar sm">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </div>
                                                <div className="user-info d-none d-md-block">
                                                    <div className="user-status">Administrator</div>
                                                    <div className="user-name">Abu Bin Ishityak</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                                                <div className="user-card">
                                                    <div className="user-avatar">
                                                        <span>AB</span>
                                                    </div>
                                                    <div className="user-info">
                                                        <span className="lead-text">Abu Bin Ishtiyak</span>
                                                        <span className="sub-text">info@softnio.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    <li>
                                                        <Link href="/dashboard/profile">
                                                            <em className="icon ni ni-user-alt"></em>
                                                            <span>View Profile</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="setting">
                                                            <FontAwesomeIcon icon={faCog} />
                                                            <span>Account Setting</span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a className="dark-switch" href="#">
                                                            <FontAwesomeIcon icon={faMoon} />
                                                            <span>Dark Mode</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown-inner">
                                                <ul className="link-list">
                                                    {/* <li><Link href={route('logout')}><FontAwesomeIcon icon={faSignOutAlt} /><span>Sign out</span></Link></li> */}
                                                    <Link
                                                        style={{ border: 'none', background: 'none', color: '#526484' }}
                                                        className="block w-full"
                                                        method="post"
                                                        href={route('logout')}
                                                        as="button"
                                                    >
                                                        <FontAwesomeIcon icon={faSignOutAlt} />
                                                        <span>Sign out</span>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {children}
                <div className="nk-footer">
                    <div className="container-fluid">
                        <div className="nk-footer-wrap">
                            <div className="nk-footer-copyright">
                                {' '}
                                &copy; 2023 DashLite. Template by{' '}
                                <a href="https://softnio.com" target="_blank">
                                    Softnio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

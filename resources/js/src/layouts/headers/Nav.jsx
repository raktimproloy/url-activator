import { Link } from '@inertiajs/react';
const Nav = () => {
    return (
        <nav className="nav-menu d-none d-xl-block">
            <ul>
                <li className="active">
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
                <li>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;

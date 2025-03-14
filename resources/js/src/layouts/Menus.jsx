import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

const Demos = () => (
        <Fragment>
            <li>
                <Link href="/">Homepage Sass</Link>
            </li>
            <li>
                <Link href="/index-2">Homepage SEO</Link>
            </li>
            <li>
                <Link href="/index-3">Homepage App</Link>
            </li>
            <li>
                <Link href="/index-4">Homepage Chatbot</Link>
            </li>
            <li>
                <Link href="/index-5">Homepage Consultant</Link>
            </li>
            <li>
                <Link href="/index-6">Homepage Fintech</Link>
            </li>
            <li>
                <Link href="/index-7">Homepage Software</Link>
            </li>
            <li>
                <Link href="/index-8">Homepage E-Wallet</Link>
            </li>
            <li>
                <Link href="/index-9">Homepage Webinar</Link>
            </li>
        </Fragment>
    ),
    Services = () => (
        <Fragment>
            <li>
                <Link href="/services">Our Services</Link>
            </li>
            <li>
                <Link href="/service-details">Service Details</Link>
            </li>
        </Fragment>
    ),
    Pages1st = () => (
        <Fragment>
            <li>
                <Link href="/about">About Us</Link>
            </li>
            <li>
                <Link href="/team">Our Team</Link>
            </li>
            <li>
                <Link href="/pricing">Pricing</Link>
            </li>
        </Fragment>
    ),
    Portfolio = () => (
        <Fragment>
            <li>
                <Link href="/portfolio">Portfolio One</Link>
            </li>
            <li>
                <Link href="/portfolio-2">Portfolio Two</Link>
            </li>
            <li>
                <Link href="/portfolio-details">Portfolio Details</Link>
            </li>
        </Fragment>
    ),
    Pages2nd = () => (
        <Fragment>
            <li>
                <Link href="/sign-in">Sign In</Link>
            </li>
            <li>
                <Link href="/sign-up">Sign Up</Link>
            </li>
            <li>
                <Link href="/coming-soon">Coming Soon</Link>
            </li>
            <li>
                <Link href="/404">404</Link>
            </li>
        </Fragment>
    ),
    Blog = () => (
        <Fragment>
            <li>
                <Link href="/blog-standard">Blog Standard</Link>
            </li>
            <li>
                <Link href="/blog-details">Blog Details</Link>
            </li>
        </Fragment>
    );

export { Blog, Demos, Pages1st, Pages2nd, Portfolio, Services };

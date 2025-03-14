import { Head } from '@inertiajs/react';
import { Fragment, useEffect } from 'react';
import { activeNavMenu, animation, aTagClick, index8Body, stickyNav } from '../utils';
import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import ScrollTop from './ScrollTop';
const Layouts = ({ noHeader, noFooter, pageTitle, children }) => {
    useEffect(() => {
        animation();
        activeNavMenu();
        index8Body();
        aTagClick();
        window.addEventListener('scroll', stickyNav);
    });
    return (
        <Fragment>
            <Head>
                <link rel="shortcut icon" href="assets/img/favicon.png" type="img/png" />
                <title>ReHostX - Multipurpose Landing Page React Nextjs Template</title>
            </Head>
            {!noHeader && <Header />}
            {pageTitle && <Banner pageName={pageTitle} />}
            {children}
            <ScrollTop />
            {!noFooter && <Footer />}
        </Fragment>
    );
};

export default Layouts;

import { Link } from '@inertiajs/react';
import Isotope from 'isotope-layout';
import { Fragment, useEffect, useRef, useState } from 'react';
const PortfolioIsotop = () => {
    // Isotope
    const isotope = useRef();
    const [filterKey, setFilterKey] = useState('*');
    const [activeClass, setActiveClass] = useState('*');
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope('.portfolio-items', {
                itemSelector: '.single-portfolio',
                layoutMode: 'fitRows',
            });
        }, 300);
        return () => isotope.current.destroy();
    }, []);
    useEffect(() => {
        if (isotope.current) {
            filterKey === '*' ? isotope.current.arrange({ filter: `*` }) : isotope.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);
    const handleFilterKeyChange = (key) => () => {
        setFilterKey(key);
        setActiveClass(key);
    };
    return (
        <Fragment>
            <div className="portfolio-filter m-b-10">
                <ul>
                    <li className={activeClass == '*' ? 'active' : ''} data-filter="*" onClick={handleFilterKeyChange('*')}>
                        All Works
                    </li>
                    <li data-filter=".graphics" className={activeClass == 'graphics' ? 'active' : ''} onClick={handleFilterKeyChange('graphics')}>
                        Graphics
                    </li>
                    <li data-filter=".website" className={activeClass == 'website' ? 'active' : ''} onClick={handleFilterKeyChange('website')}>
                        Website
                    </li>
                    <li data-filter=".ui-ux" className={activeClass == 'ui-ux' ? 'active' : ''} onClick={handleFilterKeyChange('ui-ux')}>
                        UI/UX
                    </li>
                    <li
                        data-filter=".consultancy"
                        className={activeClass == 'consultancy' ? 'active' : ''}
                        onClick={handleFilterKeyChange('consultancy')}
                    >
                        {' '}
                        Consultancy
                    </li>
                </ul>
            </div>
            <div className="portfolio-items portfolio-filter-items row">
                <div className="col-xl-3 single-portfolio col-md-6 website ui-ux">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/01.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 consultancy">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/02.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 single-portfolio col-lg-12 UI-UX graphics">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/03.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 single-portfolio col-lg-12 website graphics">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/04.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 consultancy">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/05.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 website">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/06.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 ui-ux">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/07.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 website">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/08.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 single-portfolio col-lg-12 consultancy">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/09.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 single-portfolio col-lg-12 ui-ux graphics">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/10.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 website">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/11.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 single-portfolio col-md-6 consultancy">
                    <div className="portfolio-box-one m-t-30">
                        <div
                            className="thumb"
                            style={{
                                backgroundImage: `url(assets/img/portfolio/12.jpg)`,
                            }}
                        ></div>
                        <div className="content">
                            <div className="tags">
                                <a href="#">App,</a>
                                <a href="#">Design</a>
                            </div>
                            <h4 className="title">
                                <Link href="/portfolio-details">
                                    <a>Spay Mobile Banking App</a>
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PortfolioIsotop;

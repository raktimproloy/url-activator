import { Link } from '@inertiajs/react';

const Banner = ({ pageName }) => {
    return (
        <section className="page-title-area">
            <div className="container">
                <div className="page-title-content text-center">
                    <h1 className="page-title">{pageName}</h1>

                    <ul className="breadcrumb-nav">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className="active">{pageName}</li>
                    </ul>
                </div>
            </div>
            <div className="page-title-effect d-none d-md-block">
                <img className="particle-1 animate-zoom-fade" src="assets/img/particle/particle-1.png" alt="particle One" />
                <img className="particle-2 animate-rotate-me" src="assets/img/particle/particle-2.png" alt="particle Two" />
                <img className="particle-3 animate-float-bob-x" src="assets/img/particle/particle-3.png" alt="particle Three" />
                <img className="particle-4 animate-float-bob-y" src="assets/img/particle/particle-4.png" alt="particle Four" />
                <img className="particle-5 animate-float-bob-y" src="assets/img/particle/particle-5.png" alt="particle Five" />
            </div>
        </section>
    );
};

export default Banner;

const Subscribe = () => {
    return (
        <section
            className="newsletter-area bg-cover-center bg-soft-grey-color p-t-130 p-b-130"
            style={{ backgroundImage: 'url(assets/img/particle/newsletter-bg.png)' }}
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="newsletter-text">
                            <div className="common-heading tagline-boxed m-b-40 p-0 px-5 text-center">
                                <span className="tagline">Newsletter Subscribe</span>
                                <h2 className="title">Subscribe Our Newsletter To Get More Update</h2>
                            </div>
                            <form action="#" className="newsletter-form">
                                <div className="input-field">
                                    <input type="email" placeholder="Enter Your Email Address" />
                                    <button className="template-btn">
                                        Subscribe Now <i className="far fa-arrow-right" />
                                    </button>
                                </div>
                                <p className="m-t-25 text-center">On the other hand, we denounce with righteous</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter-particle-effect d-none d-md-block">
                <img className="particle-1 animate-float-bob-y" src="assets/img/particle/particle-2.png" alt="particle Two" />
                <img className="particle-2 animate-zoominout" src="assets/img/particle/particle-3.png" alt="particle Three" />
                <img className="particle-3 animate-zoominout" src="assets/img/particle/particle-4.png" alt="particle Four" />
                <img className="particle-4 animate-zoominout" src="assets/img/particle/particle-5.png" alt="particle Five" />
            </div>
        </section>
    );
};

export default Subscribe;

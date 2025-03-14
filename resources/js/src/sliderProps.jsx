function NextArrow(props) {
    const { onClick, icon, classList, containerClass } = props;
    return (
        <div className={containerClass ? containerClass : 'screenshot-arrows m-b-30'}>
            <button className={classList ? classList : 'slick-arrow prev-arrow'} onClick={onClick}>
                <i className={icon ? icon : 'fas fa-arrow-left'}></i>
            </button>
        </div>
    );
}

function PrevArrow(props) {
    const { onClick, icon, classList, containerClass } = props;
    return (
        <div className={containerClass ? containerClass : 'screenshot-arrows m-b-30'}>
            <button className={classList ? classList : 'slick-arrow next-arrow'} onClick={onClick}>
                <i className={icon ? icon : 'fas fa-arrow-right'}></i>
            </button>
        </div>
    );
}

const testimonialActiveOne = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const brandSlider = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};
const serviceSliderActive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
const testimonialActiveTwo = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
const testimonialActiveThree = {
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 430,
            settings: {
                arrows: false,
            },
        },
    ],
};
const heroSlider = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: true,
    swipe: true,
    prevArrow: <PrevArrow icon="fas fa-angle-left" containerClass="none" classList="slick-arrow prev-arrow" />,
    nextArrow: <NextArrow icon="fas fa-angle-right" containerClass="none" classList="slick-arrow next-arrow" />,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: false,
            },
        },
        {
            breakpoint: 425,
            settings: {
                dots: false,
                arrows: false,
            },
        },
    ],
};

const brandslidertwoactive = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const testimonialActiveFour = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const testimonialActiveFive = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
};
const testimonialActiveSix = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const screenshotslider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow icon="far fa-angle-left" />,
    // nextArrow: <NextArrow icon="far fa-angle-right" />,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const teamSliderOne = {
    infinite: true,
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const testimonialwidgetactive = {
    infinite: true,
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
};

export {
    brandSlider,
    brandslidertwoactive,
    heroSlider,
    screenshotslider,
    serviceSliderActive,
    teamSliderOne,
    testimonialActiveFive,
    testimonialActiveFour,
    testimonialActiveOne,
    testimonialActiveSix,
    testimonialActiveThree,
    testimonialActiveTwo,
    testimonialwidgetactive,
};

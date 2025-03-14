// import {WOW} from "wowjs";

export const animation = async () => {
    if (typeof window !== 'undefined') {
        const module = await import('wowjs');
        const WOW = module.WOW;
        window.WOW = WOW;
        new WOW().init();
    }
};

export const stickyNav = () => {
    let offset = window.scrollY;
    const stickys = document.querySelectorAll('.sticky-header');
    for (let i = 0; i < stickys.length; i++) {
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 60) {
                sticky.classList.add('sticky-on');
            } else {
                sticky.classList.remove('sticky-on');
            }
        }
    }
};

export const aTagClick = () => {
    const aTag = document.querySelectorAll("[href='#']");
    for (let i = 0; i < aTag.length; i++) {
        const a = aTag[i];
        a.addEventListener('click', (e) => {
            // e.preventDefault();
        });
    }
};

export const activeNavMenu = (path) => {
    const navItem = document.querySelectorAll('.nav-menu li a');
    navItem.forEach((nav) => {
        if (nav.pathname === window.location.pathname) {
            if (!nav.href.includes('#')) {
                if (nav.pathname === '/contact') {
                    nav.parentElement.className = 'active';
                } else {
                    if (nav.pathname === '/portfolio' || nav.pathname === '/portfolio-2' || nav.pathname === '/portfolio-details') {
                        document.querySelector('.page__container').classList.add('active');
                        nav.parentElement.parentElement.parentElement.classList.add('active');
                    } else {
                        nav.parentElement.parentElement.parentElement.classList.add('active');
                    }
                }
            }
        }
    });
};

export const index8Body = () => {
    const path = window.location.pathname;
    if (path.includes('index-8')) {
        document.querySelector('body').classList.add('e-wallet-landing');
    } else if (path.includes('coming-soon')) {
        document.querySelector('body').classList.add('coming-soon-page');
    } else {
        document.querySelector('body').classList.remove('e-wallet-landing', 'coming-soon-page');
    }
};

export const pagination = (listClass, sort, active) => {
    let list = document.querySelectorAll(listClass);
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove('d-none');
            } else {
                element.classList.add('d-none');
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove('d-none');
            } else {
                element.classList.add('d-none');
            }
        }
    }
};

export const getPagination = (totalNumber, sort) => {
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
    return arr;
};

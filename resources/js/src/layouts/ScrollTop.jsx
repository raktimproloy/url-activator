import { useEffect } from 'react';

const ScrollTop = () => {
    useEffect(() => {
        let scrollUp = document.getElementById('scroll-top'),
            lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            let st = window.scrollY;
            if (st > lastScrollTop) {
                scrollUp.classList.remove('show');
            } else {
                if (st > 200) {
                    scrollUp.classList.add('show');
                } else {
                    scrollUp.classList.remove('show');
                }
            }
            lastScrollTop = st;
        });
    }, []);
    const onClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <a href="#" onClick={() => onClick()} className="back-to-top" id="scroll-top">
            <i className="far fa-angle-up" />
        </a>
    );
};

export default ScrollTop;

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const Counter = ({ end, decimals }: { end: number; decimals?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Only run this effect on the client side
        if (typeof window !== 'undefined') {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect(); // Stop observing after it's visible
                    }
                },
                { threshold: 0.5 }, // Trigger when 50% of the element is visible
            );

            if (counterRef.current) {
                observer.observe(counterRef.current);
            }

            return () => observer.disconnect();
        }
    }, []);

    return (
        <span className="counter" ref={counterRef}>
            {isVisible ? (
                <CountUp end={end || 100} duration={1} decimals={decimals || 0} start={0} />
            ) : (
                // Render a static value on the server
                end || 100
            )}
        </span>
    );
};

export default Counter;
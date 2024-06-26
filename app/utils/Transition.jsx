'use client'
import { useInView } from "react-intersection-observer";

const Transition = ({ children, delay }) => {
    const animationDelay = delay || 'delay-300'

    const { ref, inView } = useInView({
        threshold: 0,
    });
    return (
        <div 
            ref={ref} 
            className={`${inView 
                ? `transition-all ease-in duration-500 opacity-100 blur-none translate-x-0 ${animationDelay}` 
                : 'transition-all ease-out duration-400 blur-sm opacity-0 -translate-x-full'
            }`}
        >
            {children}
        </div>
    );
}

export default Transition;
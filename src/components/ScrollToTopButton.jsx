// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Adjust 300 to your desired scroll point
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop} className='bg-red-700'
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        zIndex: '1000',
                        padding: '10px 12px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '16px'
                    }}
                >
                    <i className='ri-arrow-up-line ri-2x'></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('fmm_cookie_consent');
        if (!consent) {
            // Short delay to not overwhelm immediately
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('fmm_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '600px',
            background: 'white',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            border: '1px solid var(--color-border)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
        }}>
            <p style={{ flex: 1, color: 'var(--color-text-muted)', fontSize: '0.925rem', margin: 0, lineHeight: '1.5' }}>
                We use cookies to improve your experience and analyze site usage. By continuing to use our site, you agree to our <a href="/privacy" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
            </p>
            <button
                onClick={handleAccept}
                style={{
                    background: 'var(--color-primary)',
                    color: 'white',
                    border: 'none',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap'
                }}
            >
                Accept & Close
            </button>
        </div>
    );
};

export default CookieConsent;

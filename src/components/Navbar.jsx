import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    const scrollToSection = (id) => {
        if (!isHome) return;
        // If we are not on home, we should navigate to home first (handled by Link usually but here we are using scroll)
        // For simplicity, we assume links to sections are only relevant on Home.
        // But if we are on another page, we might want to just link to "/"

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    const navStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        transition: 'all 0.3s ease'
    };

    return (
        <nav style={navStyles}>
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.25rem' }}>
                    <img src="/logo.png" alt="FreeMyMail Logo" style={{ height: '40px', width: 'auto' }} />
                    <span>FreeMyMail</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden-mobile" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {isHome ? (
                        <>
                            <button onClick={() => scrollToSection('features')} style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>Features</button>
                            <button onClick={() => scrollToSection('how-it-works')} style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>How it Works</button>
                            <button onClick={() => scrollToSection('faq')} style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>FAQ</button>
                        </>
                    ) : (
                        <Link to="/" style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>Back to Home</Link>
                    )}
                    <Link to="/contact" style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>Contact</Link>
                    <a href="https://apps.apple.com/us/developer/writecream/id1633791590" target="_blank" rel="noopener noreferrer"
                        style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '0.5rem 1.25rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600,
                            fontSize: '0.925rem',
                            transition: 'transform 0.2s',
                            boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.5)'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="visible-mobile" style={{ display: 'none' }}>
                    {/* Note: In CSS I would usually simple hide/show, but here I'll just use inline styles for simplicity or rely on media queries in global css later. 
              Actually, let's just make a simple responsive check.
          */}
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Simple Mobile Menu (Overlay) - Simplified for this iteration */}
            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .visible-mobile { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

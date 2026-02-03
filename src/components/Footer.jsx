import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ borderTop: '1px solid var(--color-border)', padding: '4rem 0 2rem', background: '#fff' }}>
            <div className="container">
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '800', fontSize: '1.25rem', marginBottom: '1rem' }}>
                            <img src="/logo.png" alt="FreeMyMail Logo" style={{ height: '40px', width: 'auto' }} />
                            <span>FreeMyMail</span>
                        </div>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '300px', lineHeight: '1.6' }}>
                            Clean up your inbox in seconds. Unsubscribe from unwanted emails with a single click.
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '4rem' }}>
                        <div>
                            <h4 className="mb-4">Product</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                <li><a href="/#features">Features</a></li>


                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Company</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms-of-service">Terms of Use</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4">Download App</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--color-text-muted)' }}>
                                <li><a href="https://apps.apple.com/us/developer/writecream/id1633791590" target="_blank" rel="noopener noreferrer">App Store</a></li>
                                <li><a href="https://play.google.com/store/apps/developer?id=Writecream" target="_blank" rel="noopener noreferrer">Google Play</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: 'var(--color-text-light)', fontSize: '0.875rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>&copy; {new Date().getFullYear()} FreeMyMail. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

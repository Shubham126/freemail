import React from 'react';
import { Mail, Trash2, Shield, Zap, CheckCircle, ArrowRight, Inbox, MessageSquare, Bell, FileText, Lock, Menu } from 'lucide-react';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="section" style={{ padding: '8rem 0 6rem', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--color-primary-light)',
                        color: 'var(--color-primary)',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '2rem'
                    }}>
                        <span style={{ display: 'flex' }}><Zap size={16} fill="currentColor" /></span>
                        <span> #1 Inbox Cleaner Tool</span>
                    </div>

                    <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                        Stop Email Spam <br />
                        <span style={{ color: 'var(--color-primary)' }}>Once and For All.</span>
                    </h1>

                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', lineHeight: '1.6' }}>
                        FreeMyMail helps you unsubscribe from mailing lists and bulk delete unwanted emails.
                        Secure, Private, and Free.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem', flexWrap: 'wrap' }}>
                        <a href="https://apps.apple.com/us/developer/writecream/id1633791590" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" style={{ height: '54px' }} />
                        </a>
                        <a href="https://play.google.com/store/apps/developer?id=Writecream" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '54px' }} />
                        </a>
                    </div>

                    <div style={{ position: 'relative', margin: '0 0.5rem' }}>
                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            margin: '-2rem auto 0'
                        }}>
                            <img
                                src="/hero-preview.png"
                                alt="App Preview"
                                style={{
                                    width: '100%',
                                    maxWidth: '900px',
                                    height: 'auto',
                                    display: 'block',
                                    margin: '0 auto',
                                    filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.15))'
                                }}
                            />
                        </div>
                        {/* Background blobs */}
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: -1 }}></div>
                    </div>
                </div>
            </section>

            {/* Supported Apps Marquee */}
            <section className="section" style={{ padding: '2rem 0', background: 'var(--color-bg-alt)', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container" style={{ overflow: 'hidden' }}>
                    <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Works with all major email providers
                    </p>

                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* Duplicate array for seamless loop */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {[
                                        { name: 'Gmail', color: '#EA4335', icon: 'M' },
                                        { name: 'Outlook', color: '#0078D4', icon: 'O' },
                                        { name: 'Yahoo Mail', color: '#6001D2', icon: 'Y' },
                                        { name: 'iCloud', color: '#3699F3', icon: 'i' },
                                        { name: 'Office 365', color: '#D83B01', icon: 'O' },
                                        { name: 'AOL Mail', color: '#333333', icon: 'A' },
                                        { name: 'Hotmail', color: '#EA8300', icon: 'H' },
                                        { name: 'Exchange', color: '#0078D4', icon: 'E' },
                                        { name: 'OnMail', color: '#0066FF', icon: 'O' }
                                    ].map((app, index) => (
                                        <div key={index} style={{
                                            flexShrink: 0,
                                            background: '#fff',
                                            padding: '0.75rem 1.5rem',
                                            borderRadius: '12px',
                                            border: '1px solid var(--color-border)',
                                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            minWidth: '180px',
                                            fontWeight: 600,
                                            fontSize: '1rem'
                                        }}>
                                            <div style={{
                                                width: '32px', height: '32px',
                                                background: app.color,
                                                color: 'white',
                                                borderRadius: '8px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '0.875rem',
                                                fontWeight: 800
                                            }}>
                                                {app.icon}
                                            </div>
                                            <span>{app.name}</span>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="section section-bg">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Clean your inbox in seconds</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>Powerful features to help you regain control of your digital life.</p>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                        {[
                            { icon: <Trash2 size={24} />, title: "Bulk Delete", desc: "Select and delete thousands of old emails in one click. Clear up storage instantly." },
                            { icon: <Shield size={24} />, title: "Privacy First", desc: "Your data never leaves your device. We process everything locally in your browser." },
                            { icon: <Mail size={24} />, title: "One-Click Unsubscribe", desc: "Unsubscribe from newsletters and marketing emails without opening them." }
                        ].map((feature, i) => (
                            <div key={i} style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--color-border)',
                                transition: 'transform 0.2s',
                                cursor: 'default'
                            }}>
                                <div style={{
                                    background: 'var(--color-primary-light)',
                                    color: 'var(--color-primary)',
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem'
                                }}>
                                    {feature.icon}
                                </div>
                                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{feature.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Transparency Section - Added for Google Verification */}
            <section className="section">
                <div className="container">
                    <div style={{
                        background: 'var(--color-bg-alt)',
                        borderRadius: '1.5rem',
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        border: '1px solid var(--color-border)'
                    }}>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                background: '#dbeafe',
                                color: '#1e40af',
                                padding: '0.5rem 1rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                marginBottom: '2rem'
                            }}>
                                <Shield size={16} fill="currentColor" />
                                <span>100% Transparent Data Usage</span>
                            </div>

                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                Why we request permission <br /> to access your email
                            </h2>

                            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                To provide our core features—unsubscribing and bulk deleting—FreeMyMail requires restricted access to your inbox.
                                We believe in complete transparency about how this access is used.
                            </p>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '3rem', lineHeight: '1.6', background: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '0.75rem' }}>
                                When you sign in with Google, FreeMyMail uses the Gmail API to access your inbox metadata (sender, subject, date) strictly for identifying newsletters and performing unsubscribe or delete actions initiated by you.
                            </p>

                            <div className="grid grid-cols-2" style={{ gap: '2rem', textAlign: 'left' }}>
                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Lock size={20} className="text-primary" />
                                        Read-Only Metadata
                                    </h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                                        We scan email headers (sender, subject, date) locally on your device to identify newsletters and organize your inbox. We do not read the body content of your personal emails.
                                    </p>
                                </div>

                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Trash2 size={20} className="text-primary" />
                                        Deletion Authority
                                    </h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                                        We request "modification" permissions solely to execute the delete or trash commands *you* initiate. We never delete anything without your explicit action.
                                    </p>
                                </div>

                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Zap size={20} className="text-primary" />
                                        Local Processing
                                    </h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                                        FreeMyMail complies with Google's Limited Use Policy. Your data is processed directly in your browser and is not transferred to external servers for storage or analysis.
                                    </p>
                                </div>

                                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--color-border)' }}>
                                    <h4 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Shield size={20} className="text-primary" />
                                        No Third-Party Sharing
                                    </h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                                        We do not sell, rent, or share your data with advertisers or third parties. Our business model is based on premium features, not data monetization.
                                    </p>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <a href="/privacy" style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'underline' }}>Read our full Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="section">
                <div className="container">
                    {/* Feature 1 */}
                    <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '8rem' }}>
                        <div>
                            <div style={{
                                width: '48px', height: '48px',
                                background: 'var(--color-primary-light)', color: 'var(--color-primary)',
                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Mail size={24} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                                Unsubscribe with <br /> <span style={{ color: 'var(--color-primary)' }}>One Click</span>
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Say goodbye to hunting for tiny "unsubscribe" links at the bottom of emails. FreeMyMail detects newsletters and lets you unsubscribe instantly from the dashboard.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Auto-detects active subscriptions",
                                    "No need to open emails",
                                    "100% secure and private"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                                        <CheckCircle size={20} color="var(--color-primary)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            background: 'white',
                            borderRadius: '1.5rem',
                            border: '1px solid var(--color-border)',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            padding: '1rem',
                            transform: 'rotate(2deg)'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem'
                            }}>
                                <img
                                    src="/unsubscribe-ui.png"
                                    alt="Unsubscribe Dashboard UI"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '1rem',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div style={{
                            background: 'white',
                            borderRadius: '1.5rem',
                            border: '1px solid var(--color-border)',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)',
                            padding: '1rem',
                            transform: 'rotate(-2deg)',
                        }}>
                            <div className="animate-float" style={{
                                width: '280px', // Mobile width
                                height: 'auto',
                                margin: '0 auto',
                                background: '#0f172a', // Device body color
                                borderRadius: '2.5rem',
                                padding: '0.75rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                border: '4px solid #334155', // Bezel edge
                                position: 'relative'
                            }}>
                                {/* Notch/Camera area */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1.25rem',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '24px',
                                    background: '#000',
                                    borderRadius: '12px',
                                    zIndex: 10
                                }}></div>

                                {/* Screen Content */}
                                <div style={{
                                    borderRadius: '2rem',
                                    overflow: 'hidden',
                                    background: '#000',
                                    border: '1px solid #334155'
                                }}>
                                    <img
                                        src="/bulk-clean-ui.png"
                                        alt="Bulk Cleaner UI"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{
                                width: '48px', height: '48px',
                                background: 'var(--color-primary-light)', color: 'var(--color-primary)',
                                borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Trash2 size={24} />
                            </div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                                Bulk Clean <br /> <span style={{ color: 'var(--color-primary)' }}>In Seconds</span>
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Selecting emails one by one is a thing of the past. Group emails by sender, subject, or date and delete thousands at once.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {[
                                    "Group by Sender",
                                    "Filter by Date Range",
                                    "One-click Wipe"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 500 }}>
                                        <CheckCircle size={20} color="var(--color-primary)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: '#fef3c7',
                            color: '#d97706',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            marginBottom: '1.5rem'
                        }}>
                            <span style={{ display: 'flex' }}>★★★★★</span>
                            <span>Loved by thousands</span>
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>What our users say</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>Join over 50,000 users who have reclaimed their inbox.</p>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: '2rem' }}>
                        {[
                            { name: "Sarah J.", role: "Marketing Director", text: "I was drowning in newsletters I didn't remember signing up for. FreeMyMail cleared 3,000+ emails in 10 minutes. A lifesaver!" },
                            { name: "David M.", role: "Freelance Developer", text: "Finally, a privacy-focused tool that actually works. The local processing gives me peace of mind. Highly recommend." },
                            { name: "Jessica T.", role: "Student", text: "My storage was full and I didn't want to pay for extra space. Deleted 5GB of old promo emails instantly. Amazing tool!" },
                            { name: "Michael R.", role: "Small Business Owner", text: "The bulk unsubscribe feature is genius. Saved me hours of manual clicking. Simple, fast, and effective." },
                            { name: "Emily W.", role: "Designer", text: "Beautiful interface and super easy to use. I love that it categorizes everything automatically." },
                            { name: "Chris L.", role: "Product Manager", text: "Does exactly what it says. No hidden fees, no data selling. Just a clean inbox. 10/10." }
                        ].map((review, i) => (
                            <div key={i} style={{
                                background: 'white',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--color-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <div style={{ color: '#fbbf24', display: 'flex', gap: '2px' }}>
                                    {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                                </div>
                                <p style={{ lineHeight: '1.6', flex: 1 }}>"{review.text}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'var(--color-bg-alt)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--color-text-muted)' }}>
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600, fontSize: '0.925rem' }}>{review.name}</p>
                                        <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Visual Section */}
            <section className="section section-bg" style={{ overflow: 'hidden' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ maxWidth: '700px', margin: '0 auto 4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Designed for Simplicity</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                            We believe privacy tools should be easy to use. No complicated settings, just connect and clean.
                        </p>
                    </div>

                    <div style={{
                        position: 'relative',
                        marginTop: '-2rem'
                    }}>
                        <img
                            src="/simplicity-preview.png"
                            alt="FreeMyMail App Interface"
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                height: 'auto',
                                display: 'block',
                                margin: '0 auto',
                                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.15))'
                            }}
                        />
                    </div>
                </div>
            </section>



            {/* More Apps Section */}
            <section className="section" style={{ background: 'var(--color-bg-alt)', overflow: 'hidden' }}>
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>More from Writecream</h2>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.125rem' }}>
                            Explore our other AI-powered tools to boost your productivity.
                        </p>
                    </div>

                    <div className="marquee-container">
                        <div className="marquee-content">
                            {/* Duplicate array for seamless loop */}
                            {[...Array(2)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {[
                                        { name: 'Writecream', icon: '/writecream-real-icon.webp' },
                                        { name: 'Sound AI', icon: '/sound-ai-icon.webp' },
                                        { name: 'HeadAI', icon: '/head-ai-icon.webp' },
                                        { name: 'Wboard', icon: '/wboard-icon.webp' },
                                        { name: 'TrendSense', icon: '/trendsense-real-icon.webp' },
                                    ].map((app, index) => (
                                        <a
                                            key={index}
                                            href="https://play.google.com/store/apps/developer?id=Writecream"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                flexShrink: 0,
                                                background: '#fff',
                                                padding: '0.75rem 1.25rem',
                                                borderRadius: '16px',
                                                border: '1px solid var(--color-border)',
                                                boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.08)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '1rem',
                                                minWidth: '220px',
                                                fontWeight: 600,
                                                color: 'var(--color-text-main)',
                                                transition: 'transform 0.2s, box-shadow 0.2s',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.boxShadow = '0 12px 20px -8px rgba(0, 0, 0, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 12px -2px rgba(0, 0, 0, 0.08)';
                                            }}
                                        >
                                            <img
                                                src={app.icon}
                                                alt={`${app.name} icon`}
                                                style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '10px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                            <span style={{ fontSize: '1.05rem' }}>{app.name}</span>
                                        </a>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Reclaim your inbox today.</h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
                        Join thousands of users who have saved hours of time and gigabytes of storage.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://apps.apple.com/us/developer/writecream/id1633791590" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" style={{ height: '54px' }} />
                        </a>
                        <a href="https://play.google.com/store/apps/developer?id=Writecream" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', transition: 'transform 0.2s' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style={{ height: '54px' }} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

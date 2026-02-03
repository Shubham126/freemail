import React from 'react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        const subject = `Contact Form: ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        const mailtoLink = `mailto:support@freemymail.live?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container section" style={{ maxWidth: '600px' }}>
            <h1 className="text-center mb-4">Contact Us</h1>
            <p className="text-center mb-8" style={{ color: 'var(--color-text-muted)' }}>
                Have questions or feedback? We'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label className="mb-1" style={{ display: 'block', fontWeight: 500 }} htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem'
                        }}
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="mb-1" style={{ display: 'block', fontWeight: 500 }} htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem'
                        }}
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label className="mb-1" style={{ display: 'block', fontWeight: 500 }} htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-border)',
                            fontSize: '1rem',
                            fontFamily: 'inherit'
                        }}
                        placeholder="How can we help?"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;

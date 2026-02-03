import React from 'react';

const Privacy = () => {
    return (
        <div className="container section" style={{ maxWidth: '800px', paddingBottom: '4rem' }}>
            <h1 className="mb-8" style={{ fontSize: '2.5rem' }}>Privacy Policy for FreeMyMail</h1>

            <div style={{ color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <p className="mb-6">
                    At FreeMyMail, accessible from freemymail.live (or your official domain), one of our main priorities is the privacy of our users. This Privacy Policy document explains the types of information that are collected and recorded by FreeMyMail and how we use, store, and protect it.
                </p>
                <p className="mb-6">
                    If you have additional questions or require more information about our Privacy Policy, please contact us at <a href="mailto:support@freemymail.live" style={{ color: 'var(--color-primary)' }}>support@freemymail.live</a>.
                </p>
                <p className="mb-12">
                    This Privacy Policy applies only to our online activities and is valid for users of the FreeMyMail website, browser extension, and mobile applications. It does not apply to any information collected offline or via channels other than these services.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Consent</h2>
                <p className="mb-8">
                    By using FreeMyMail, you hereby consent to this Privacy Policy and agree to its terms.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Our Commitment to Privacy</h2>
                <p className="mb-8">
                    Your privacy is extremely important to us. FreeMyMail is designed as a privacy-first email management tool. We do not sell, rent, or trade your personal data, and we access your email data only with your explicit permission and only to provide core functionality.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Information We Collect</h2>

                <h3 className="mb-2" style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', fontWeight: 600 }}>1. Personal Information</h3>
                <p className="mb-4">We may collect the following information when you use FreeMyMail:</p>
                <ul className="mb-4" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Email address (used for authentication and communication)</li>
                    <li>Name (if provided via third-party sign-in)</li>
                    <li>Basic account information</li>
                    <li>Support communications you send to us</li>
                </ul>
                <p className="mb-8">The reason for collecting this information will always be clear at the point of collection.</p>

                <h3 className="mb-2" style={{ fontSize: '1.25rem', color: 'var(--color-text-main)', fontWeight: 600 }}>2. Email Data Access (Local Processing Only)</h3>
                <p className="mb-4">FreeMyMail requests access to your email account strictly to perform the actions you initiate (identifying newsletters, unsubscribing, and deleting). <strong>All processing happens locally on your device.</strong></p>
                <ul className="mb-4" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li><strong>No External Storage:</strong> We do not transfer your email content or metadata to our servers. All analysis is performed within your browser.</li>
                    <li><strong>No Third-Party Sharing:</strong> We do not share, sell, or rent your data to advertisers or third parties.</li>
                    <li><strong>Human Access Prohibited:</strong> No human sees your emails. The process is entirely automated and local.</li>
                </ul>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="mb-8" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Provide the FreeMyMail service (unsubscribing and cleaning)</li>
                    <li>Authenticate you directly with your email provider</li>
                    <li>Improve app performance (analytics on usage patterns, not content)</li>
                </ul>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Log Files</h2>
                <p className="mb-8">
                    FreeMyMail follows standard procedures of using log files. These files may collect: IP address, Browser type, Device information, Date and time stamps, Referring pages. This information is not linked to personally identifiable information and is used only for analytics, security, and service improvement.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Cookies and Tracking Technologies</h2>
                <p className="mb-4">FreeMyMail may use cookies or similar technologies to:</p>
                <ul className="mb-8" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Maintain user sessions</li>
                    <li>Remember user preferences</li>
                    <li>Improve performance and usability</li>
                </ul>
                <p className="mb-8">You can disable cookies through your browser settings if you prefer.</p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Third-Party Services & APIs</h2>
                <p className="mb-4">FreeMyMail integrates with third-party services such as:</p>
                <ul className="mb-8" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Google (Gmail APIs)</li>
                    <li>Microsoft (Outlook APIs)</li>
                    <li>Email service providers</li>
                </ul>
                <p className="mb-8">These third parties have their own Privacy Policies. FreeMyMail has no control over how third-party platforms handle your data beyond authorized access.</p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Google API Services User Data Policy Compliance</h2>
                <p className="mb-4">
                    FreeMyMail’s use of and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Google API Services User Data Policy</a>, including the Limited Use requirements.
                </p>
                <div className="p-4 mb-8" style={{ background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                    <p className="mb-2"><strong>Our Strict Commitments:</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                        <li><strong>Local-Only Processing:</strong> We do not transfer your Gmail data to any external server.</li>
                        <li><strong>No Advertising:</strong> We do not use your Gmail data for serving advertisements.</li>
                        <li><strong>No Human Interaction:</strong> We do not allow humans to read your emails.</li>
                    </ul>
                </div>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>CCPA Privacy Rights (California Consumers)</h2>
                <p className="mb-4">Under the CCPA, you have the right to:</p>
                <ul className="mb-8" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Request disclosure of personal data collected</li>
                    <li>Request deletion of your personal data</li>
                    <li>Request that your personal data not be sold (we do not sell data)</li>
                </ul>
                <p className="mb-8">To exercise these rights, contact us at <a href="mailto:support@freemymail.live" style={{ color: 'var(--color-primary)' }}>support@freemymail.live</a>. We will respond within one month.</p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>GDPR Data Protection Rights</h2>
                <p className="mb-4">If you are located in the EU, you have the right to:</p>
                <ul className="mb-8" style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                    <li>Access your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Restrict or object to processing</li>
                    <li>Request data portability</li>
                </ul>
                <p className="mb-8">Requests can be sent to <a href="mailto:support@freemymail.live" style={{ color: 'var(--color-primary)' }}>support@freemymail.live</a>, and we will respond within one month.</p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Children’s Information</h2>
                <p className="mb-8">
                    FreeMyMail does not knowingly collect any personal information from children under the age of 13. If you believe your child has provided personal information on our platform, please contact us immediately, and we will promptly remove such data.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Data Security</h2>
                <p className="mb-8">
                    We use industry-standard security measures to protect your information, including encryption, access controls, and secure authentication mechanisms.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Policy Updates</h2>
                <p className="mb-8">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page and will become effective immediately upon posting. Continued use of FreeMyMail constitutes acceptance of the revised policy.
                </p>

                <h2 className="mb-4" style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Contact Us</h2>
                <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <p>
                    📧 <a href="mailto:support@freemymail.live" style={{ color: 'var(--color-primary)' }}>support@freemymail.live</a>
                </p>
            </div>
        </div>
    );
};

export default Privacy;

import Link from 'next/link';
import CreatorFooter from './CreatorFooter';
import styles from './Footer.module.css';

export default function Footer() {
    const shopLinks = [
        { label: 'Store', path: '/store' },
        { label: 'Mac', path: '/mac' },
        { label: 'iPad', path: '/ipad' },
        { label: 'iPhone', path: '/iphone' },
        { label: 'Watch', path: '/watch' },
        { label: 'NikkeePods', path: '/' },
        { label: 'TV & Home', path: '/tv-home' },
        { label: 'NikkeeTag', path: '/nikkeetag' },
        { label: 'Accessories', path: '/accessories' },
        { label: 'Gift Cards', path: '/gift-cards' }
    ];

    const serviceLinks = [
        { label: 'Nikkee Music', path: '/services/music' },
        { label: 'Nikkee TV+', path: '/services/tv' },
        { label: 'Nikkee Fitness+', path: '/services/fitness' },
        { label: 'Nikkee News+', path: '/services/news' },
        { label: 'Nikkee Arcade', path: '/services/arcade' },
        { label: 'iCloud', path: '/services/icloud' },
        { label: 'Nikkee One', path: '/services/one' },
        { label: 'Nikkee Pay', path: '/services/pay' },
        { label: 'Nikkee Books', path: '/services/books' },
        { label: 'Nikkee Podcasts', path: '/services/podcasts' },
        { label: 'App Store', path: '/services/app-store' }
    ];

    const accountLinks = [
        { label: 'Manage Your Nikkee ID', path: '/account/id' },
        { label: 'Nikkee Store Account', path: '/account/store' },
        { label: 'iCloud.com', path: 'https://icloud.com' }
    ];

    const storeLinks = [
        { label: 'Find a Store', path: '/retail' },
        { label: 'Genius Bar', path: '/retail/genius-bar' },
        { label: 'Today at Nikkee', path: '/retail/today' },
        { label: 'Nikkee Camp', path: '/retail/camp' },
        { label: 'Nikkee Store App', path: '/retail/app' },
        { label: 'Certified Refurbished', path: '/retail/refurbished' },
        { label: 'Financing', path: '/retail/financing' },
        { label: 'Nikkee Trade In', path: '/retail/trade-in' },
        { label: 'Order Status', path: '/retail/order-status' },
        { label: 'Shopping Help', path: '/retail/help' }
    ];

    const businessLinks = [
        { label: 'Nikkee and Business', path: '/business' },
        { label: 'Shop for Business', path: '/business/shop' }
    ];

    const educationLinks = [
        { label: 'Nikkee and Education', path: '/education' },
        { label: 'Shop for K-12', path: '/education/k12' },
        { label: 'Shop for College', path: '/education/college' }
    ];

    const valueLinks = [
        { label: 'Accessibility', path: '/values/accessibility' },
        { label: 'Education', path: '/values/education' },
        { label: 'Environment', path: '/values/environment' },
        { label: 'Inclusion and Diversity', path: '/values/diversity' },
        { label: 'Privacy', path: '/values/privacy' },
        { label: 'Racial Equity and Justice', path: '/values/justice' },
        { label: 'Supplier Responsibility', path: '/values/supplier' }
    ];

    const aboutLinks = [
        { label: 'Newsroom', path: '/about/newsroom' },
        { label: 'Nikkee Leadership', path: '/about/leadership' },
        { label: 'Career Opportunities', path: '/about/careers' },
        { label: 'Investors', path: '/about/investors' },
        { label: 'Ethics & Compliance', path: '/about/compliance' },
        { label: 'Events', path: '/about/events' },
        { label: 'Contact Nikkee', path: '/about/contact' }
    ];

    const legalLinks = [
        { label: 'Privacy Policy', path: '/legal/privacy' },
        { label: 'Terms of Use', path: '/legal/terms' },
        { label: 'Sales and Refunds', path: '/legal/sales' },
        { label: 'Legal', path: '/legal' },
        { label: 'Site Map', path: '/sitemap' }
    ];

    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <section className={styles.notes}>
                        <p>1. NikkeePods Pro 3 are sweat and water resistant for non-water sports and exercise, and they are IPX4 rated. Sweat and water resistance are not permanent conditions.</p>
                        <p>2. MagSafe charging requires a compatible MagSafe charger. Wireless charging requires a Qi-certified wireless charger.</p>
                        <p>3. Battery life varies by use and configuration. See nikkee.com/batteries for more information.</p>
                    </section>

                    <nav className={styles.directory}>
                        <div className={styles.directoryColumn}>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>Shop and Learn</h3>
                                <ul className={styles.directoryList}>
                                    {shopLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.directoryColumn}>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>Services</h3>
                                <ul className={styles.directoryList}>
                                    {serviceLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>Account</h3>
                                <ul className={styles.directoryList}>
                                    {accountLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.directoryColumn}>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>Nikkee Store</h3>
                                <ul className={styles.directoryList}>
                                    {storeLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.directoryColumn}>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>For Business</h3>
                                <ul className={styles.directoryList}>
                                    {businessLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>For Education</h3>
                                <ul className={styles.directoryList}>
                                    {educationLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.directoryColumn}>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>Nikkee Values</h3>
                                <ul className={styles.directoryList}>
                                    {valueLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.directorySection}>
                                <h3 className={styles.directoryTitle}>About Nikkee</h3>
                                <ul className={styles.directoryList}>
                                    {aboutLinks.map(link => (
                                        <li key={link.label} className={styles.directoryItem}>
                                            <Link href={link.path} className={styles.directoryLink}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <section className={styles.bottom}>
                        <div className={styles.moreWays}>
                            More ways to shop: <Link href="/retail" className={styles.blueLink}>Find a Nikkee Store</Link> or <Link href="/retail" className={styles.blueLink}>other retailer</Link> near you. Or call 1-800-MY-NIKKEE.
                        </div>
                        <div className={styles.legal}>
                            <div className={styles.copyright}>Copyright © 2026 Nikkee Inc. All rights reserved.</div>
                            <ul className={styles.legalLinks}>
                                {legalLinks.map(link => (
                                    <li key={link.label} className={styles.legalLinkItem}>
                                        <Link href={link.path} className={styles.legalLink}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.location}>India</div>
                        </div>
                    </section>
                </div>
            </footer>
            <CreatorFooter />
        </>
    );
}

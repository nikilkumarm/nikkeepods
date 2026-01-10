"use client";
import styles from './buy.module.css';

export default function BuyPage() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Buy NikkeePods Pro</h1>
                    <p className={styles.subtitle}>Get 6 months of Nikkee Music free with your purchase.*</p>
                </div>

                <div className={styles.productLayout}>
                    {/* Left: Image */}
                    <div className={styles.imageSection}>
                        <img
                            src="/nikkeepods.github.io/airpods-pro-3.png"
                            alt="NikkeePods Pro 3"
                            className={styles.productImage}
                            style={{ transform: 'scale(1.1)' }}
                        />
                    </div>

                    {/* Right: Details */}
                    <div className={styles.detailsSection}>
                        <span className={styles.newLabel}>New</span>
                        <h2 className={styles.productName}>NikkeePods Pro 3</h2>
                        <p className={styles.price}>$249.00</p>

                        <div className={styles.divider}></div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                Personalized Spatial Audio
                            </li>
                            <li className={styles.featureItem}>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                Active Noise Cancellation
                            </li>
                            <li className={styles.featureItem}>
                                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                Dust, sweat, and water resistant
                            </li>
                        </ul>

                        <button className={styles.addToBagBtn}>Add to Bag</button>

                        <div className={styles.deliveryInfo}>
                            <div className={styles.deliveryItem}>
                                <svg className={styles.deliveryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                <span>Free Delivery</span>
                            </div>
                            <div className={styles.deliveryItem}>
                                <svg className={styles.deliveryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                <span>Free Returns</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './compare.module.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export default function ComparePage() {
    return (
        <main>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.mainWrapper}>
                    <motion.h1
                        className={styles.title}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        Which NikkeePods are<br />right for you?
                    </motion.h1>

                    <motion.div
                        className={styles.grid}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        {/* NikkeePods Pro 3 */}
                        <motion.div className={styles.productColumn} variants={fadeUp}>
                            <div className={styles.imageWrapper}>
                                <img src="/nikkeepods/airpods-pro-3.png" alt="NikkeePods Pro 3" className={styles.productImage} style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }} />
                            </div>
                            <h2 className={styles.productName}>NikkeePods Pro 3</h2>
                            <span className={styles.generation}>Active Noise Cancellation</span>
                            <p className={styles.price}>$249</p>
                            <Link href="/buy" className={styles.buyButton}>Buy</Link>
                        </motion.div>

                        {/* NikkeePods Pro 2 */}
                        <motion.div className={styles.productColumn} variants={fadeUp}>
                            <div className={styles.imageWrapper}>
                                <img src="/nikkeepods/airpods-pro-2.png" alt="NikkeePods Pro 2" className={styles.productImage} style={{ transform: 'scale(0.95)', transformOrigin: 'bottom' }} />
                            </div>
                            <h2 className={styles.productName}>NikkeePods Pro 2</h2>
                            <span className={styles.generation}>Active Noise Cancellation</span>
                            <p className={styles.price}>$179</p>
                            <Link href="/buy" className={styles.buyButton}>Buy</Link>
                        </motion.div>

                        {/* NikkeePods 4 (No ANC) */}
                        <motion.div className={styles.productColumn} variants={fadeUp}>
                            <div className={styles.imageWrapper}>
                                <img src="/nikkeepods/airpods-2.png" alt="NikkeePods 4" className={styles.productImage} style={{ transform: 'scale(1.0)', transformOrigin: 'bottom' }} />
                            </div>
                            <h2 className={styles.productName}>NikkeePods 4</h2>
                            <span className={styles.generation}>&nbsp;</span>
                            <p className={styles.price}>$129</p>
                            <Link href="/buy" className={styles.buyButton}>Buy</Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.divider}
                    ></motion.div>

                    {/* Audio Technology */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.sectionTitle}
                    >
                        Audio Technology
                    </motion.h3>

                    <motion.div
                        className={styles.featureRow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                            <p className={styles.featureValue}>Active Noise Cancellation</p>
                            <p className={styles.smallFeatureText}>Up to 2x more background noise cancelled.</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" /></svg>
                            <p className={styles.featureValue}>Active Noise Cancellation</p>
                            <p className={styles.smallFeatureText}>&nbsp;</p>
                        </div>
                        <div className={styles.featureCell}>
                            <p className={styles.featureLabel}>-</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.featureRow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                            <p className={styles.featureValue}>Transparency mode</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
                            <p className={styles.featureValue}>Transparency mode</p>
                        </div>
                        <div className={styles.featureCell}>
                            <p className={styles.featureLabel}>-</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.featureRow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm-4 0c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                            <p className={styles.featureValue}>Adaptive Audio</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm-4 0c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
                            <p className={styles.featureValue}>Adaptive Audio</p>
                        </div>
                        <div className={styles.featureCell}>
                            <p className={styles.featureLabel}>-</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.divider}
                    ></motion.div>

                    {/* Battery */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.sectionTitle}
                    >
                        Battery
                    </motion.h3>
                    <motion.div
                        className={styles.featureRow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="18" height="12" rx="2.5" ry="2.5" /><path d="M23 11v2" /></svg>
                            <h4 className={styles.featureValue}>Up to 6 hrs</h4>
                            <p className={styles.featureLabel}>of listening time with a single charge.</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="18" height="12" rx="2.5" ry="2.5" /><path d="M23 11v2" /></svg>
                            <h4 className={styles.featureValue}>Up to 5 hrs</h4>
                            <p className={styles.featureLabel}>of listening time with a single charge.</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="18" height="12" rx="2.5" ry="2.5" /><path d="M23 11v2" /></svg>
                            <h4 className={styles.featureValue}>Up to 5 hrs</h4>
                            <p className={styles.featureLabel}>of listening time with a single charge.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.divider}
                    ></motion.div>

                    {/* Charging Case */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.sectionTitle}
                    >
                        Charging Case
                    </motion.h3>
                    <motion.div
                        className={styles.featureRow}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10 8V6h4v2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                            <p className={styles.featureLabel}>MagSafe Charging Case (USB‑C) with speaker and lanyard loop</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10 8V6h4v2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                            <p className={styles.featureLabel}>Wireless Charging Case (USB‑C) with speaker</p>
                        </div>
                        <div className={styles.featureCell}>
                            <svg className={styles.icon} viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M10 8V6h4v2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                            <p className={styles.featureLabel}>Charging Case (USB‑C)</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

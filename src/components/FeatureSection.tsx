"use client";
import { motion } from 'framer-motion';
import styles from './FeatureSection.module.css';

export default function FeatureSection() {
    return (
        <section id="specs" className={styles.section}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.title}
            >
                Intelligence you can <span className={styles.highlight}>hear.</span>
            </motion.h2>

            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(/nikkeepods/anc.png)' }}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Active Noise Cancellation</h3>
                        <p className={styles.cardText} style={{ whiteSpace: 'nowrap', marginTop: '0.2rem', marginBottom: '0.8rem' }}>1.5x increase with NikkeePods Pro 3</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(/nikkeepods/transparency.png)' }}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>New Listening Modes</h3>
                        <p className={styles.cardText}>Hear the world around you, naturally.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(/nikkeepods/spatial.png)' }}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Personalized Spatial Audio</h3>
                        <p className={styles.cardText}>Sound tailored to your unique ear shape.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

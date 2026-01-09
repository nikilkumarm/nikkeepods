"use client";
import { motion } from 'framer-motion';
import styles from './FeatureSection.module.css';

export default function FeatureSection() {
    return (
        <section className={styles.section}>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={styles.title}
            >
                Audio that adapts to <span style={{ color: '#2997ff' }}>you.</span>
            </motion.h2>

            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000)' }}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Active Noise Cancellation</h3>
                        <p className={styles.cardText}>Block out the world with 2x more cancellation.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000)' }}
                >
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Transparency Mode</h3>
                        <p className={styles.cardText}>Hear the world around you, naturally.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.card}
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1000)' }}
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

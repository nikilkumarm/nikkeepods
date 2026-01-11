"use client";
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import styles from './FindMySection.module.css';

export default function FindMySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Slightly smooth spring: balanced for speed and fluidity
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 24,
        restDelta: 0.001
    });

    // Slightly wider range for a smoother, less abrupt entrance
    const opacityPhone = useTransform(smoothProgress, [0.1, 0.4], [0, 1]);
    const yPhone = useTransform(smoothProgress, [0.1, 0.4], [80, 0]);
    const yText = useTransform(smoothProgress, [0, 1], [40, -40]);

    return (
        <section id="compare" className={styles.container} ref={containerRef}>
            <div className={styles.content}>
                <motion.div style={{ y: yText }} className={styles.textContent}>
                    <h2 className={styles.title}>
                        Find My with<br />Precision Finding.
                    </h2>
                    <p className={styles.description}>
                        Easily locate the exact place you left your NikkeePods Pro. A new generation of Ultra Wideband technology in the Charging Case increases the distance for Precision Finding by 1.5x. And with a built-in speaker in the case, you'll be able to find your NikkeePods no matter how deep in the couch cushions they are.
                    </p>
                    <div className={styles.statFooter}>
                        <strong>1.5x increase</strong> with NikkeePods Pro 3
                    </div>
                </motion.div>

                <div className={styles.phoneWrapper}>
                    <motion.div style={{ opacity: opacityPhone, y: yPhone }}>
                        <img
                            src="/nikkeepods/find-my-iphone.png"
                            alt="iPhone showing Find My interface"
                            className={styles.iphoneImage}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

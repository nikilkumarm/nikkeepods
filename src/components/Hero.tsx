"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    const { scrollY } = useScroll();

    const y1 = useTransform(scrollY, [0, 500], [0, -100]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);
    const textOpacity = useTransform(scrollY, [300, 600], [0, 1]);
    const textY = useTransform(scrollY, [300, 600], [50, 0]);

    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <motion.h1 style={{ y: y1, opacity, scale: opacity }} className={styles.title}>
                    NikkeePods
                </motion.h1>

                <motion.div style={{ scale }} className={styles.imageContainer}>
                    {/* Visual placeholder for the pods */}
                    <img
                        src="/nikkeepods.png"
                        alt="NikkeePods"
                        className={styles.image}
                    />
                </motion.div>

                <motion.p style={{ opacity: textOpacity, y: textY }} className={styles.subtext}>
                    Unheard of sound.
                </motion.p>
            </div>
        </div>
    );
}

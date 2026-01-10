"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './AdaptiveAudio.module.css';

export default function AdaptiveAudio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const leftTextX = useTransform(scrollYProgress, [0.2, 0.5], [-100, 0]);
    const leftTextOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    const rightTextX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
    const rightTextOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section className={styles.container} ref={containerRef}>
            <div className={styles.content}>
                <motion.div
                    style={{ opacity }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>
                        Audio that adapts to you.
                    </h2>
                    <p className={styles.subtitle}>
                        Personalized Spatial Audio with dynamic head tracking places sound all around you to create a three-dimensional listening experience for music, TV shows, movies, and more.
                    </p>
                </motion.div>

                <div className={styles.demoContainer}>
                    <motion.span
                        style={{ x: leftTextX, opacity: leftTextOpacity }}
                        className={styles.wordLeft}
                    >
                        Hola
                    </motion.span>

                    <motion.div style={{ scale }} className={styles.podContainer}>
                        <img
                            src="/nikkeepods.github.io/airpod-internal.png"
                            alt="AirPod Pro Internal View"
                            className={styles.podImage}
                        />
                    </motion.div>

                    <motion.span
                        style={{ x: rightTextX, opacity: rightTextOpacity }}
                        className={styles.wordRight}
                    >
                        Hello
                    </motion.span>
                </div>
            </div>
        </section>
    );
}

"use client";
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    const { scrollY } = useScroll();
    const smoothScrollY = useSpring(scrollY, { stiffness: 60, damping: 20 });

    // Entry animation values for the "Join" effect on reload
    const entryOffset = useMotionValue(20);
    const entryOpacity = useMotionValue(0);
    const entryScale = useMotionValue(0.85);

    // Entry animation values for the title and eyebrow text
    const entryTextOpacity = useMotionValue(0);
    const entryTextY = useMotionValue(30);
    const entrySubtextOpacity = useMotionValue(0);

    useEffect(() => {
        // Animate pods
        animate(entryOffset, 0, { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 });
        animate(entryOpacity, 1, { duration: 1.2, ease: "easeOut", delay: 0.1 });
        animate(entryScale, 1, { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 });

        // Animate text
        animate(entryTextOpacity, 1, { duration: 1.2, ease: "easeOut", delay: 0.4 });
        animate(entryTextY, 0, { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 });
        animate(entrySubtextOpacity, 1, { duration: 1.2, ease: "easeOut", delay: 0.8 });
    }, [entryOffset, entryOpacity, entryScale, entryTextOpacity, entryTextY, entrySubtextOpacity]);

    // Compressed animations for shorter scroll distance
    const opacityInitial = useTransform(smoothScrollY, [0, 100], [1, 0]);
    const opacityNew = useTransform(smoothScrollY, [100, 200], [0, 1]);

    // Combined transforms: Scroll state * Entry state
    const finalTextOpacity = useTransform([opacityInitial, entryTextOpacity], ([oInit, eOpac]) => (oInit as number) * (eOpac as number));
    const finalSubtextOpacity = useTransform([opacityInitial, entrySubtextOpacity], ([oInit, eOpac]) => (oInit as number) * (eOpac as number));

    // Base scroll transforms
    const scrollXLeft = useTransform(smoothScrollY, [0, 200], [0, -30]);
    const scrollXRight = useTransform(smoothScrollY, [0, 200], [0, 30]);
    const scrollOpacity = useTransform(smoothScrollY, [50, 200], [1, 0]);
    const scrollScale = useTransform(smoothScrollY, [0, 200], [1, 0.4]);

    // Check if we are on mobile to use different units/scales
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Combined transforms
    const unit = isMobile ? 'px' : 'vw';
    const finalXLeft = useTransform([scrollXLeft, entryOffset], ([sx, eo]) => `${(sx as number) - (eo as number) * (isMobile ? 2 : 1)}${unit}`);
    const finalXRight = useTransform([scrollXRight, entryOffset], ([sx, eo]) => `${(sx as number) + (eo as number) * (isMobile ? 2 : 1)}${unit}`);
    const finalOpacity = useTransform([scrollOpacity, entryOpacity], ([so, eo]) => (so as number) * (eo as number));
    const finalScale = useTransform([scrollScale, entryScale], ([ss, es]) => (ss as number) * (es as number) * (isMobile ? 1.0 : 1));

    return (
        <div id="overview" className={styles.hero}>
            <div className={styles.content}>
                <motion.p
                    style={{ opacity: finalTextOpacity, y: entryTextY }}
                    className={styles.eyebrow}
                >
                    All-new
                </motion.p>
                <motion.h1
                    style={{ opacity: finalTextOpacity, y: entryTextY }}
                    className={styles.title}
                >
                    NikkeePods Pro <span className={styles.titleNumber}>3</span>
                </motion.h1>

                <div className={styles.imageContainer}>
                    <motion.img
                        style={{ x: finalXLeft, opacity: finalOpacity, scale: finalScale }}
                        src="/hero-pods-transparent-left.png"
                        alt="Left Pod"
                        className={styles.podLeft}
                    />
                    <motion.img
                        style={{ x: finalXRight, opacity: finalOpacity, scale: finalScale }}
                        src="/hero-pods-transparent-right.png"
                        alt="Right Pod"
                        className={styles.podRight}
                    />
                </div>

                <motion.p
                    style={{ opacity: finalSubtextOpacity, y: entryTextY }}
                    className={styles.subtext}
                >
                    Precision you can hear.
                </motion.p>

                <motion.div style={{ opacity: opacityNew }} className={styles.scrollingText}>
                    <p className={styles.scrollLine1}>Rich, balanced sound with effortless clarity.</p>
                    <p className={styles.scrollLine2}>Designed to feel natural from the first listen.</p>
                </motion.div>
            </div>
        </div>
    );
}
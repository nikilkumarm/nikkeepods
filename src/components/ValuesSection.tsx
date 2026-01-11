"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ValuesSection.module.css';

const values = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ), // Globe (Strong Authentic)
        title: "A plan as innovative as our products.",
        description: "We're committed to bringing net emissions to zero across our entire carbon footprint by 2030.",
        link: "Learn more about environment",
        url: "/values/environment"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                <circle cx="12" cy="16" r="1" />
            </svg>
        ), // Lock (Outline Authentic)
        title: "Privacy. That's Nikkee.",
        description: "Privacy is a fundamental human right. Every product and service is designed to keep your data safe and secure.",
        link: "Learn more about privacy",
        url: "/values/privacy"
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 7v5" />
                <path d="M10 16l2-2 2 2" />
                <circle cx="12" cy="7" r="0.5" fill="currentColor" />
                <path d="M9 12l3-1 3 1" />
            </svg>
        ), // Accessibility (Outline Figure Authentic)
        title: "Innovation that's accessible by design.",
        description: "Our products and services are designed for everyone, with built-in features to help you do what you love, your way.",
        link: "Learn more about accessibility",
        url: "/values/accessibility"
    }
];

export default function ValuesSection() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.heading}
                >
                    Our values lead the <span className={styles.highlight}>way.</span>
                </motion.h2>

                <div className={styles.grid}>
                    {values.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                            <div className={styles.linkWrapper}>
                                <Link href={item.url} className={styles.link}>
                                    {item.link}
                                    <span className={styles.chevron}> ›</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

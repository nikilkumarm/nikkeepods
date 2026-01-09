"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    NikkeePods
                </Link>

                <div className={styles.links}>
                    <Link href="#" className={styles.link}>Overview</Link>
                    <Link href="#" className={styles.link}>Tech Specs</Link>
                    <Link href="#" className={styles.link}>Compare</Link>
                    <button className={styles.buyBtn}>Buy</button>
                </div>
            </div>
        </motion.nav>
    );
}

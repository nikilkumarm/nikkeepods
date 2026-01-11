"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isLightPage = pathname !== '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${isLightPage ? styles.lightPage : ''} ${mobileMenuOpen ? styles.menuOpen : ''}`}
            >
                <div className={styles.container}>
                    <Link
                        href="/"
                        className={styles.logo}
                        onClick={(e) => {
                            setMobileMenuOpen(false);
                            if (pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        NikkeePods
                    </Link>

                    <div className={styles.links}>
                        <Link href="/" className={styles.link}>Overview</Link>
                        <Link href="/tech-specs" className={styles.link}>Tech Specs</Link>
                        <Link href="/compare" className={styles.link}>Compare</Link>
                        <Link href="/buy" className={styles.buyBtn}>Buy</Link>
                    </div>

                    <button
                        className={styles.menuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={`${styles.menuIcon} ${mobileMenuOpen ? styles.open : ''}`}>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </motion.nav>

            <motion.div
                initial={false}
                animate={{
                    height: mobileMenuOpen ? '100vh' : 0,
                    opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                className={styles.mobileMenu}
            >
                <div className={styles.mobileLinks}>
                    <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Overview</Link>
                    <Link href="/tech-specs" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Tech Specs</Link>
                    <Link href="/compare" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Compare</Link>
                    <Link href="/buy" className={styles.mobileBuyBtn} onClick={() => setMobileMenuOpen(false)}>Buy</Link>
                </div>
            </motion.div>
        </>
    );
}

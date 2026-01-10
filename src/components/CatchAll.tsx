"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './CatchAll.module.css';

import {
    ShoppingBag, Truck, CreditCard, Music, Download, Radio,
    Lock, Shield, Eye, Leaf, Recycle, Sun, Users, Palette,
    Scale, FileText, Handshake, Bell, Sparkles, ShieldCheck
} from 'lucide-react';

const IconMap: Record<string, any> = {
    ShoppingBag, Truck, CreditCard, Music, Download, Radio,
    Lock, Shield, Eye, Leaf, Recycle, Sun, Users, Palette,
    Scale, FileText, Handshake, Bell, Sparkles, ShieldCheck
};

interface CatchAllProps {
    title: string;
    description: string;
    breadcrumb: string;
    details?: { icon: string; title: string; text: string }[];
}

export default function CatchAll({ title, description, breadcrumb, details }: CatchAllProps) {
    // Fallback details if none provided
    const displayDetails = details || [
        { icon: 'Sparkles', title: 'Innovation First', text: `Experience the next generation of ${title.toLowerCase()} reimagined for you.` },
        { icon: 'ShieldCheck', title: 'Built for Privacy', text: `Like every Nikkee product, our ${title.toLowerCase()} services are designed for security.` },
        { icon: 'Leaf', title: 'Sustainable Design', text: `Our commitment to the environment stays true in every ${title.toLowerCase()} detail.` }
    ];

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <nav className={styles.breadcrumb}>
                        <span>Nikkee</span> › <span>{breadcrumb}</span>
                    </nav>

                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{description}</p>

                    <div className={styles.grid}>
                        {displayDetails.map((detail, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className={styles.card}
                            >
                                <div className={styles.icon}>
                                    {IconMap[detail.icon] ? React.createElement(IconMap[detail.icon], { size: 28, strokeWidth: 1.2 }) : <Sparkles size={28} strokeWidth={1.2} />}
                                </div>
                                <h3>{detail.title}</h3>
                                <p>{detail.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.ctaSection}>
                        <p>Explore more about our vision for {title.toLowerCase()}.</p>
                        <button className={styles.button}>Coming Soon</button>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}

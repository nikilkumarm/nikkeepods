"use client";
import styles from './TechSpecs.module.css';
import {
    Volume2,
    Cpu,
    Mic2,
    Battery,
    Bluetooth,
    Wind,
    Zap,
    Activity,
    Smartphone
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const specCategories = [
    {
        title: "Audio Technology",
        icon: <Volume2 size={28} />,
        specs: [
            "Custom high-excursion Nikkee driver",
            "Custom high dynamic range amplifier",
            "Pro-grade Active Noise Cancellation",
            "Adaptive Transparency mode",
            "Personalized Spatial Audio with dynamic head tracking",
            "Adaptive EQ for real-time sound tuning"
        ]
    },
    {
        title: "Sensors",
        icon: <Activity size={28} />,
        specs: [
            "Dual beamforming microphones",
            "Inward-facing microphone",
            "Skin-detect sensor for auto-play/pause",
            "Motion-detecting accelerometer",
            "Speech-detecting accelerometer",
            "High-precision Touch controls"
        ]
    },
    {
        title: "System & Chip",
        icon: <Cpu size={28} />,
        specs: [
            "Nikkee H3 headphone chip",
            "Nikkee U2 chip in MagSafe Charging Case",
            "Ultra-low latency audio processing",
            "Instant device switching",
            "Always-on 'Hey Nikkee' voice activation"
        ]
    },
    {
        title: "Battery & Power",
        icon: <Battery size={28} />,
        specs: [
            "Up to 8 hours of listening time (ANC on)",
            "Total 40 hours with MagSafe Charging Case",
            "5 minutes in the case provides ~1 hour of listening",
            "Compatible with USB-C, MagSafe, and Qi-certified chargers"
        ]
    },
    {
        title: "Connectivity",
        icon: <Bluetooth size={28} />,
        specs: [
            "Bluetooth 5.4 wireless technology",
            "Seamless pairing across all Nikkee devices",
            "Audio Sharing between two pairs of NikkeePods",
            "Automatic switching between iPhone, iPad, and Mac"
        ]
    },
    {
        title: "Case & Design",
        icon: <Smartphone size={28} />,
        specs: [
            "MagSafe Charging Case with speaker for Find My",
            "IP54 sweat and water resistant (Pods and Case)",
            "Built-in lanyard loop for easy attachment",
            "Precision-milled acoustic vents"
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.34, 1.56, 0.64, 1]
        }
    }
};

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1]
        }
    }
};

export default function TechSpecsPage() {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <main className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1.2,
                    ease: [0.34, 1.56, 0.64, 1]
                }}
                className={styles.header}
            >
                <h1 className={styles.title}>Tech Specs </h1>
                <p className={styles.subtitle}>Every detail engineered for pure performance.</p>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {specCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        variants={cardVariants}
                        className={styles.specCard}
                        onMouseMove={handleMouseMove}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className={styles.iconWrapper}>
                            {category.icon}
                        </div>
                        <h2 className={styles.categoryTitle}>{category.title}</h2>

                        <motion.ul
                            className={styles.specList}
                            variants={listVariants}
                        >
                            {category.specs.map(spec => (
                                <motion.li
                                    key={spec}
                                    className={styles.specItem}
                                    variants={listItemVariants}
                                >
                                    {spec}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}

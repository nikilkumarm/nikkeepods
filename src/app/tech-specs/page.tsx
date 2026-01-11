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

const specCategories = [
    {
        title: "Audio Technology",
        icon: <Volume2 size={24} />,
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
        icon: <Activity size={24} />,
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
        icon: <Cpu size={24} />,
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
        icon: <Battery size={24} />,
        specs: [
            "Up to 8 hours of listening time (ANC on)",
            "Total 40 hours with MagSafe Charging Case",
            "5 minutes in the case provides ~1 hour of listening",
            "Compatible with USB-C, MagSafe, and Qi-certified chargers"
        ]
    },
    {
        title: "Connectivity",
        icon: <Bluetooth size={24} />,
        specs: [
            "Bluetooth 5.4 wireless technology",
            "Seamless pairing across all Nikkee devices",
            "Audio Sharing between two pairs of NikkeePods",
            "Automatic switching between iPhone, iPad, and Mac"
        ]
    },
    {
        title: "Case & Design",
        icon: <Smartphone size={24} />,
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
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
        }
    }
};

const listVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1 // Wait for card to appear
        }
    }
};

const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4 }
    }
};

export default function TechSpecsPage() {
    return (
        <main className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className={styles.header}
            >
                <h1 className={styles.title}>Tech Specs</h1>
                <p className={styles.subtitle}>Every detail engineered for pure performance.</p>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {specCategories.map((category) => (
                    <motion.div
                        key={category.title}
                        variants={cardVariants}
                        className={styles.specCard}
                    >
                        <div className={styles.iconWrapper}>
                            {category.icon}
                        </div>
                        <h2 className={styles.categoryTitle}>{category.title}</h2>

                        <motion.ul
                            className={styles.specList}
                            variants={listVariants}
                        // Lists will animate when parent card becomes visible
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


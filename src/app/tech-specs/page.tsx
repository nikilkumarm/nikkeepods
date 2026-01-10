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

export default function TechSpecsPage() {
    return (
        <main className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={styles.header}
            >
                <h1 className={styles.title}>Tech Specs</h1>
                <p className={styles.subtitle}>Every detail engineered for pure performance.</p>
            </motion.div>

            <div className={styles.grid}>
                {specCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={styles.specCard}
                    >
                        <div className={styles.iconWrapper}>
                            {category.icon}
                        </div>
                        <h2 className={styles.categoryTitle}>{category.title}</h2>
                        <ul className={styles.specList}>
                            {category.specs.map(spec => (
                                <li key={spec} className={styles.specItem}>{spec}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}


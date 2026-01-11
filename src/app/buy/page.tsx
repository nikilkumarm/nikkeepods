"use client";
import { motion } from 'framer-motion';
import styles from './buy.module.css';

export default function BuyPage() {
    return (
        <div className={styles.container}>
            <div className={styles.mainWrapper}>
                <div className={styles.header}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Buy NikkeePods Pro
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Get 6 months of Nikkee Music free with your purchase.*
                    </motion.p>
                </div>

                <div className={styles.productLayout}>
                    {/* Left: Image */}
                    <div className={styles.imageSection}>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            src="/nikkeepods/airpods-pro-3.png"
                            alt="NikkeePods Pro 3"
                            className={styles.productImage}
                        />
                    </div>

                    {/* Right: Details */}
                    <motion.div
                        className={styles.detailsSection}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <span className={styles.newLabel}>New</span>
                        <h2 className={styles.productName}>NikkeePods Pro 3</h2>
                        <p className={styles.price}>$249.00</p>

                        <div className={styles.divider}></div>

                        <ul className={styles.featureList}>
                            {[
                                "Personalized Spatial Audio",
                                "Active Noise Cancellation",
                                "Dust, sweat, and water resistant"
                            ].map((feature, i) => (
                                <motion.li
                                    key={i}
                                    className={styles.featureItem}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                >
                                    <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>

                        <button className={styles.addToBagBtn}>Add to Bag</button>

                        <div className={styles.deliveryInfo}>
                            <div className={styles.deliveryItem}>
                                <svg className={styles.deliveryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                <span>Free Delivery</span>
                            </div>
                            <div className={styles.deliveryItem}>
                                <svg className={styles.deliveryIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                <span>Free Returns</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Other Products */}
                <motion.div
                    className={styles.otherProductsGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.4
                            }
                        }
                    }}
                >
                    {/* NikkeePods Pro 2 */}
                    <motion.div
                        className={styles.otherProductCard}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <img
                            src="/nikkeepods/airpods-pro-2.png"
                            alt="NikkeePods Pro 2"
                            className={styles.smallProductImage}
                        />
                        <h3 className={styles.otherProductName}>NikkeePods Pro 2</h3>
                        <p className={styles.otherProductFeature}>Active Noise Cancellation</p>
                        <p className={styles.otherProductPrice}>$179</p>
                        <button className={styles.smallBuyBtn}>Buy</button>
                    </motion.div>

                    {/* NikkeePods 4 */}
                    <motion.div
                        className={styles.otherProductCard}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                    >
                        <img
                            src="/nikkeepods/airpods-2.png"
                            alt="NikkeePods 4"
                            className={styles.smallProductImage}
                        />
                        <h3 className={styles.otherProductName}>NikkeePods 4</h3>
                        <p className={styles.otherProductFeature}>&nbsp;</p>
                        <p className={styles.otherProductPrice}>$129</p>
                        <button className={styles.smallBuyBtn}>Buy</button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

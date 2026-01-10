import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccessibilityPage() {
    return (
        <main>
            <Navbar />
            <section style={{
                minHeight: '100vh',
                padding: '120px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '2rem' }}>Accessibility</h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '800px', lineHeight: 1.5, color: '#86868b' }}>
                    Our products and services are designed for everyone, with built-in features to help you do what you love, your way.
                </p>
            </section>
            <Footer />
        </main>
    );
}

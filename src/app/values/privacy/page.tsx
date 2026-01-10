import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
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
                <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '2rem' }}>Privacy</h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '800px', lineHeight: 1.5, color: '#86868b' }}>
                    Privacy is a fundamental human right. Every product and service is designed to keep your data safe and secure.
                </p>
            </section>
            <Footer />
        </main>
    );
}

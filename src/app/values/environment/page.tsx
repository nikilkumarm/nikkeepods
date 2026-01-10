import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EnvironmentPage() {
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
                <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '2rem' }}>Environment</h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '800px', lineHeight: 1.5, color: '#86868b' }}>
                    We're committed to bringing net emissions to zero across our entire carbon footprint by 2030.
                </p>
            </section>
            <Footer />
        </main>
    );
}

import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}

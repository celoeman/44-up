import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <ServicesSection />
            </main>
            <Footer />
        </div>
    );
}

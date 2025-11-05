import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AIChatbotSection from '@/components/AIChatbotSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <HeroSection />
                <ServicesSection />
                <AIChatbotSection />
                <FeaturesSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}

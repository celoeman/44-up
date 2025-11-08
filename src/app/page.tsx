import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CustomSoftwareSection from '@/components/CustomSoftwareSection';
import AIChatbotSection from '@/components/AIChatbotSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main>
                <HeroSection />
                <CustomSoftwareSection />
                <AIChatbotSection />
                <TestimonialsSection />
            </main>
            <Footer />
        </div>
    );
}

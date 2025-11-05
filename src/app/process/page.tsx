import Header from '@/components/Header';
import ProcessSection from '@/components/ProcessSection';
import OnboardingSection from '@/components/OnboardingSection';
import Footer from '@/components/Footer';

export default function ProcessPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-4'>
                <ProcessSection />
                <OnboardingSection />
            </main>
            <Footer />
        </div>
    );
}


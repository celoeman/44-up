import Header from '@/components/Header';
import PricingCalculator from '@/components/PricingCalculator';
import Footer from '@/components/Footer';

export default function CalculatorPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-4'>
                <PricingCalculator />
            </main>
            <Footer />
        </div>
    );
}


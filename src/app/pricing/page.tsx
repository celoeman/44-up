import Header from '@/components/Header';
import PricingTable from '@/components/PricingTable';
// import AddonsSection from '@/components/AddonsSection';
import Footer from '@/components/Footer';

export default function PricingPage() {
    return (
        <div className='min-h-screen'>
            <Header />
            <main className='pt-4'>
                <PricingTable />
                {/* <AddonsSection /> */}
            </main>
            <Footer />
        </div>
    );
}

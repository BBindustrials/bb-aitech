import Navigation from '../../components/layout/Navigation';
import Footer from '../../components/layout/Footer';
import Hero from '../../components/home/Hero';
import ProductsOverview from '../../components/home/ProductsOverview';
import ServicesOverview from '../../components/home/ServicesOverview';
import CTASection from '../../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProductsOverview />
        <ServicesOverview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
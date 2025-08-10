import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import MenuGrid from "@/components/home/MenuGrid";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  const canonical = typeof window !== 'undefined' ? window.location.href : '';
  const orgLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: 'Cozy Cup Cafe',
    url: canonical,
    image: '',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Brew St',
      addressLocality: 'Coffeeville',
      addressRegion: 'CA',
      postalCode: '90000',
      addressCountry: 'US'
    },
    servesCuisine: ['Coffee', 'Pastries', 'Breakfast'],
    telephone: '+1-555-123-4567',
  };

  return (
    <div>
      <Helmet>
        <title>Cozy Cup Cafe | Specialty Coffee & Warm Atmosphere</title>
        <meta name="description" content="Modern, cozy cafe serving specialty coffee, pastries, and seasonal favorites. Visit Cozy Cup Cafe for handcrafted drinks and community vibes." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="Cozy Cup Cafe" />
        <meta property="og:description" content="Specialty coffee, pastries, and a warm atmosphere." />
        <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      </Helmet>
      <Hero />
      <MenuGrid />
      <ContactSection />
    </div>
  );
};

export default Index;

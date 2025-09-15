import React from 'react';
import { Helmet, HelmetProvider } from "@vuer-ai/react-helmet-async";
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import Testimonials from './sections/Testimonials';
import WhatWeDo from './sections/Insight';
import ContactCTA from './sections/ContactCTA';
import VisionMission from './sections/VisionMission';
import Footer from './components/Footer';


function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>
            Doak - Commercial Agribusiness & Food-Ag Supply-Chain Management
          </title>
          <meta
            name="description"
            content="From Field to Market—Seamless Supply-Chains, Smarter Agri-Business. Commercial agribusiness services including trading, warehousing, R&D, and IT solutions."
          />
          <meta
            name="keywords"
            content="agribusiness, commodity trading, warehousing, food supply chain, agricultural technology, R&D, commercial farming"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://doak.com/" />
          <meta
            property="og:title"
            content="Doak - Commercial Agribusiness & Food-Ag Supply-Chain Management"
          />
          <meta
            property="og:description"
            content="From Field to Market—Seamless Supply-Chains, Smarter Agri-Business."
          />
          <meta property="og:image" content="/img/doak-og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://doak.com/" />
          <meta
            property="twitter:title"
            content="Doak - Commercial Agribusiness & Food-Ag Supply-Chain Management"
          />
          <meta
            property="twitter:description"
            content="From Field to Market—Seamless Supply-Chains, Smarter Agri-Business."
          />
          <meta property="twitter:image" content="/img/doak-og-image.jpg" />

          {/* JSON-LD Schema */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Doak",
              description:
                "Commercial Agribusiness & Food-Ag Supply-Chain Management",
              url: "https://doak.com",
              logo: "/img/doak-logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-8109184166",
                contactType: "sales",
                areaServed: "NG",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.instagram.com/doakintegrated?igsh=OGRoNnN6Zzg4ZWF0",
                "https://x.com/doak_integrated?s=21",
              ],
            })}
          </script>
        </Helmet>

        <Navbar />
        <main>
          <Hero />
          <Services />
          <CaseStudies />
          <Testimonials />
          <WhatWeDo />
          <VisionMission />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;

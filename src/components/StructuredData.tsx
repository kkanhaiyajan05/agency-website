export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nanosoft Technologies",
    "url": "https://nanosofttech.ca",
    "logo": "https://nanosofttech.ca/logo.png",
    "description": "Leading Canadian software development company specializing in AI integration, cloud migration, .NET modernization, and digital transformation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-226-978-9401",
      "contactType": "customer service",
      "email": "krishjan05@gmail.com"
    },
    "sameAs": [
      "https://linkedin.com/company/nanosoft-technologies",
      "https://twitter.com/nanosofttech"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Nanosoft Technologies"
    },
    "areaServed": "Canada",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Build tailored software solutions that perfectly fit your business needs and workflows."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": ".NET Modernization",
            "description": "Upgrade your .NET applications with modern frameworks, architecture patterns, and cloud-native approaches."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": ".NET Migration",
            "description": "Migrate your legacy .NET Framework applications to .NET Core/.NET 5+ for improved performance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "Comprehensive digital strategy and implementation to modernize your entire business ecosystem."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Integration Solutions",
            "description": "Leverage artificial intelligence to automate processes and enhance user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cloud Migration Services",
            "description": "Seamlessly migrate your applications and infrastructure to the cloud for better scalability."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nanosoft Technologies",
    "url": "https://nanosofttech.ca",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://nanosofttech.ca/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
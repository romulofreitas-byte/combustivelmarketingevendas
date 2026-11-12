import type { Metadata } from "next";
import { Montserrat, Sora } from "next/font/google";
import { ProtectImages } from "@/components/ProtectImages";
import { social } from "@/data/social";
import { brandDescription, brandName, brandTitle, company, siteUrl } from "@/lib/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: brandTitle,
    template: `%s | ${brandName}`
  },
  description: brandDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: brandTitle,
    description: brandDescription,
    url: "/",
    siteName: brandName,
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: brandTitle,
    description: brandDescription
  },
  robots: {
    index: true,
    follow: true
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brandName,
  description: brandDescription,
  url: siteUrl,
  areaServed: "BR",
  parentOrganization: {
    "@type": "Organization",
    name: company.legalName,
    taxID: company.cnpj,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: company.state,
      addressCountry: "BR"
    },
    sameAs: [social.instagram, social.youtube, social.linkedin]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${montserrat.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ProtectImages />
        {children}
      </body>
    </html>
  );
}

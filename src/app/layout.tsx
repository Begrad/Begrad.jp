import './globals.css';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { getCompany } from '@/microCMS/apiClient';

export const metadata: Metadata = {
  title: {
    default: 'Begrad - ビグラド',
    template: '%s | Begrad',
  },
  description: 'Begrad - ビグラド',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/logo192.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

const RootLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> => {
  const company = await getCompany();

  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* next/font/google only bundles a "latin" subset for this family, which
            would drop the Japanese glyphs the Mission text actually needs — the
            Google Fonts stylesheet link serves the full character set instead.
            The no-page-custom-font rule targets pages/_document.js and doesn't
            apply to the App Router root layout, so it's a false positive here. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kaisei+Tokumin&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="App">
          <Header />
          {children}
          <Footer
            postcode={company.postcode}
            address={company.address}
            tel={company.tel}
            businessHours={company.businessHours}
            email={company.email}
          />
          <ScrollToTopButton />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;

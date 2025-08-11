// --- src/app/layout.js (v3.0) ---
import Script from 'next/script';
import "./globals.css";

// This is the correct Next.js way to import our Google Fonts
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '700',
  display: 'swap',
});

export const metadata = {
  title: "SmartBot Pioneer Program | Free AI Messenger Automation for Filipino Entrepreneurs",
  description: "Join the SmartBot Revolution! Get a free lifetime account for our AI sales assistant. We're looking for 100 founding pioneers to help us build the ultimate tool for Filipino businesses. Claim your slot now!",
  // Open Graph tags for beautiful social media sharing
  openGraph: {
    title: "SmartBot Pioneer Program | An Exclusive Invitation",
    description: "Become a founding member and get a free lifetime AI chatbot that closes sales 24/7.",
    url: 'https://free.smartbot.ph', // Your live domain
    siteName: 'SmartBot',
    // Add a URL to a great image for sharing (e.g., your logo or a banner)
    images: [
      {
        url: 'https://free.smartbot.ph/og-image.png', // We will add this image to the public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
              {/* --- Meta Pixel Code --- */}
      <Script id="meta-pixel" strategy="lazyOnload">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID_HERE');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{display:'none'}}
             src="https://www.facebook.com/tr?id=1322918705530084&ev=PageView&noscript=1" />
      </noscript>
      {/* --- End Meta Pixel Code --- */}

    </body>
    </html>
  );
}
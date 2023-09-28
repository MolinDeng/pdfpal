import Navbar from '@/components/Navbar';
import Providers from '@/components/Providers';
import { cn, constructMetadata } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import './globals.css';

// import 'react-loading-skeleton/dist/skeleton.css';
// import 'simplebar-react/dist/simplebar.min.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      {/* <Providers> */}
      <body
        className={cn(
          'min-h-screen font-sans antialiased grainy',
          montserrat.className
        )}
      >
        {/* <Toaster /> */}
        {/* <Navbar /> */}
        {children}
      </body>
      {/* </Providers> */}
    </html>
  );
}

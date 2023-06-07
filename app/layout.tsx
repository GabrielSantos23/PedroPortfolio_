import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pedro Cacemiro | Freelancer editor from Brazil',
  description: 'Come here to see my projects',
  icons: {
    icon: {
      url: '/Logo.png',
      type: 'image/png',
    },
    shortcut: { url: '/Logo.png', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='font-Druk'>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

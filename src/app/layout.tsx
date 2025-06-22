// app/layout.tsx
import '@/styles/globals.css';
import '@/styles/reset.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import styles from '@/styles/App.module.css';
import { ApolloWrapper } from '@/components/ApolloWrapper';

const montserrat = Montserrat({
  weight: ['300', '500', '600', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'TheFork – Front-end exercise',
  description: 'Front-end challenge app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <ApolloWrapper>
          <header className={styles.header}>
            <Link href="/">
              <Image src="/logo.svg" alt="TheFork" width={122} height={24} />
            </Link>
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>
              Made with ❤️ at{' '}
              <a
                href="https://www.thefork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__logo}
              >
                <Image src="/logo.svg" alt="TheFork" width={122} height={24} />
              </a>
            </p>
          </footer>
        </ApolloWrapper>
      </body>
    </html>
  );
}

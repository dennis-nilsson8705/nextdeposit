import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Deposit</title>
        <meta name="description" content="Next deposit app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col items-center p-24 min-h-screen bg-cyan-600">
        <h1 className="text-3xl font-bold text-cyan-700">Next Deposit</h1>
      </main>
    </>
  );
}

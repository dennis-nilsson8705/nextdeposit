import Head from 'next/head';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { DepositBase } from '../components/depositBase';
import React from 'react';
import { Provider } from 'react-redux';
import AppReduxStore from '../redux/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <React.StrictMode>
        <Provider store={AppReduxStore}>
          <Head>
            <title>Next Deposit</title>
            <meta name="description" content="Next deposit app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="min-h-screen p-24 bg-slate-200">
            <div className="flex justify-center text-3xl font-bold text-cyan-700 ">
              Next Deposit
            </div>
            <div className="flex flex-row justify-center ">
              <DepositBase />
            </div>
          </div>
        </Provider>
      </React.StrictMode>
    </>
  );
}

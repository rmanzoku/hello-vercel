import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import Link from 'next/link'


type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return <div className="container mx-auto p-1 bg-gray-400">
        <Header />
        <main role="main" className="p-5 bg-gray-200">{children}</main>
        <Footer />
    </div>
}

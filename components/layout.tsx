import React, { ReactNode } from 'react';
import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import Link from 'next/link'


type Props = {
    children: ReactNode;
};

export default function Layout({ children }: Props) {
    return <div className="container mx-auto">
        <Header />
        <main role="main">{children}</main>
        <Footer />
    </div>
}

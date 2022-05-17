import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto font-sans">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>gBoole01</title>
                <meta 
                    name="description"
                    content="gBoole01 Website"
                />
                <meta 
                    property="og:image"
                    content="/favicon.ico"
                />
                <meta 
                    name="og-title"
                    content="gBoole01 Website"
                />
                <meta 
                    name="twitter:card"
                    content="summary_large_image"
                />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
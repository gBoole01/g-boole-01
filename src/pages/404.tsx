import Link from 'next/link';
import Layout from '../components/layout';

export default function Custom404() {
    return (
        <Layout>
            <h1>404 - Page Not Found</h1>
            <div>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </div>
        </Layout>
    )
}
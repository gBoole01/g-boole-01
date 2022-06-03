import Link from 'next/link';
import Layout from '../components/layout';

const Custom404 = () => (
    <Layout>
        <h1>404 - Page Not Found</h1>
        <div>
            <Link href="/">
                <a>Back to home</a>
            </Link>
        </div>
    </Layout>
)

export default Custom404;
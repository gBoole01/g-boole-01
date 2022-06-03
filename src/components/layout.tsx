import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
    children? : React.ReactNode;
}

const Layout = ({ 
    children
}: Props) => (
        <div className="container mx-auto font-sans">
            <Meta />
            <Header />
            <main className="px-9">{children}</main>
            <Footer />
        </div>
    )

export default Layout;

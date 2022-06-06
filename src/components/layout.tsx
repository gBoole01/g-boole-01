import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
    children? : React.ReactNode;
}

const Layout = ({ 
    children
}: Props) => (
        <div className="container min-h-screen flex flex-col mx-auto font-sans text-sm text-gray-1">
            <Meta />
            <Header />
            <main className="px-9 grow">{children}</main>
            <Footer />
        </div>
    )

export default Layout;

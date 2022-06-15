import Header from './header';
import Footer from './footer';

type Props = {
    children? : React.ReactNode;
}

const Layout = ({ 
    children
}: Props) => (
        <div className="w-full min-h-screen bg-gradient-to-t from-gray-4/10 via-white to-gray-4/10 font-sans text-sm text-gray-1">
            <div className="container min-h-screen flex flex-col mx-auto border-x border-gray-4/50">
                <Header />
                <main className="px-9 grow">{children}</main>
                <Footer />
            </div>
        </div>
    )

export default Layout;

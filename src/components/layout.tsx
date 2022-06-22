import Header from './header';
import Footer from './footer';

type Props = {
    children? : React.ReactNode;
}

const Layout = ({ 
    children
}: Props) => (
        <div className="w-full min-h-screen bg-gray-4/40 font-sans text-sm text-gray-1">
            <div className="container min-h-screen xl:max-w-screen-xl flex flex-col mx-auto shadow-2xl border-x border-gray-4/50 bg-gradient-to-t from-gray-5 via-white to-gray-5">
                <Header />
                <main className="z-10 px-9 grow">{children}</main>
                <Footer />
            </div>
        </div>
    )

export default Layout;

import tw from 'tailwind-styled-components';
import CustomLink from '../components/custom-link';
import Layout from '../components/layout';

const Section = tw.section`flex flex-col gap-4 mt-6 py-2 relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-2/3`
const PageTitle = tw.h1`text-2xl text-blue-1 font-bold uppercase`

const Custom404 = () => (
    <Layout>
        <Section>
            <PageTitle>Erreur 404</PageTitle>
            <p>Oups, cette page semble ne plus exister !</p>
            <CustomLink href="/" label="Retour à l'accueil" />
        </Section>
    </Layout>
)

export default Custom404;
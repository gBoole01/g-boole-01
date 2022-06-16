import tw from 'tailwind-styled-components';
import Button from './button';

const Section = tw.section`py-2 mb-6 relative after:absolute after:z-[-1] after:content[''] after:shadow-md after:bg-blue-2/20 after:rounded-r-lg after:right-0 after:left-[-2.25rem] after:top-0 after:bottom-0`
const PageTitle = tw.h1`text-2xl text-blue-1 font-bold uppercase`

const ResumeIntro = () => (
    <Section>
        <PageTitle>Curriculum Vitae</PageTitle>
        <p className="ml-3 mt-3">Pour des raisons de confidentialités, les noms des personnes, écoles, et entreprises ne sont pas communiqués.</p>
        <p className="ml-3 mb-2">Si vous souhaitez en apprendre plus sur moi, n'hésitez pas à me contacter !</p>
        <div className="absolute right-3 bottom-[-0.75rem]">
            <Button href="/contact" label="Contact" />
        </div>
    </Section>
)

export default ResumeIntro;
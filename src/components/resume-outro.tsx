import tw from 'tailwind-styled-components';
import Button from './button';

const Section = tw.section`flex gap-1 flex-col before:absolute before:bg-blue-1 before:top-0 before:content-[''] before:left-2 before:right-2 before:h-px my-2 pt-2 relative`

const ResumeOutro = () => (
    <Section>
        <p>Si vous le souhaitez, vous pouvez téléchargez une copie de mon C.V. au format PDF</p>
        <div className="self-end pr-3">
            <Button href="/resume" label="Télécharger" />
        </div>
    </Section>
)

export default ResumeOutro;
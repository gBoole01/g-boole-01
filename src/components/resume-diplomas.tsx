import Image from 'next/image';
import tw from 'tailwind-styled-components';

const Section = tw.section`relative after:absolute after:z-[-1] after:content[''] after:bg-blue-2/20 after:rounded-l-lg after:left-0 after:right-[-2.25rem] after:top-0 after:bottom-0 py-2 mt-6`
const SectionTitle = tw.h2`text-lg text-blue-1 font-bold italic uppercase`
const Title = tw.h3`pl-1 text-lg uppercase`
const Subtitle = tw.p`text-lg text-blue-2 italic`
const DateCaption = tw.span`text-sm text-blue-1`

const ResumeDiplomas = () => (
    <Section>
        <SectionTitle>Diplômes</SectionTitle>
        <Title>
            <DateCaption>2012: </DateCaption>
            Bac Technologique
        </Title>
        <Subtitle>Gestion spécialité "Marketing"</Subtitle>
        <Title>
            <DateCaption>2020: </DateCaption>
            Titre RNCP (BAC+2)
        </Title>
        <Subtitle>Développeur Web & Web Mobile</Subtitle>
        <Title>
            <DateCaption>2021: </DateCaption>
            Certification Qualité Web
        </Title>
        <div className="flex gap-2 items-center">
            <Subtitle>Opquast - Niveau Expert</Subtitle>
            <Image
                priority
                src="/images/opquast-expert-badge.png"
                height={76}
                width={100}
                alt="opquast expert badge"
            />
        </div>
    </Section>
)

export default ResumeDiplomas;
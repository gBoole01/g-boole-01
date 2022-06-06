import tw from 'tailwind-styled-components';
import CustomLink from './custom-link';

const Section = tw.section`mt-6`
const SectionTitle = tw.h2`text-lg text-blue-1 font-bold italic uppercase`
const List = tw.ul`list-['-'] pl-2`
const ListItem = tw.li`pl-1`

const ResumeInterests = () => (
    <Section>
        <SectionTitle>Interêts</SectionTitle>
        <List>
            <ListItem>Open Source</ListItem>
            <ListItem>Web 3.0</ListItem>
            <ListItem>Langage Rust</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Pleins d'autres sujets que vous pourrez découvrir sur <CustomLink href="/blog" label="mon blog" /></ListItem>
        </List>
    </Section>
)

export default ResumeInterests;
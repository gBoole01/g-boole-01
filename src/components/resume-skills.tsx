// import tw from 'tailwind-styled-components';

const SectionTitle = tw.h2`font-bold italic text-blue-1 text-lg uppercase`
const Title = tw.h3`before:absolute before:bg-blue-2 before:bottom-1/3 before:content-[''] before:h-2 before:left-0 before:rounded-full before:top-1/3 before:w-2 pl-4  relative  text-blue-2  text-lg  uppercase`
const List = tw.ul`list-['-'] pl-2`
const ListItem = tw.li`pl-1`

const ResumeSkills = () => (
  <section>
    <SectionTitle>Compétences</SectionTitle>
    <Title>Front-End</Title>
    <List>
      <ListItem>HTML 5 / CSS 3</ListItem>
      <ListItem>Bootstrap</ListItem>
      <ListItem>Tailwind</ListItem>
      <ListItem>JavaScript/TypeScript</ListItem>
      <ListItem>Angular</ListItem>
      <ListItem>React</ListItem>
    </List>
    <Title>Back-End</Title>
    <List>
      <ListItem>Node.js</ListItem>
      <ListItem>PHP</ListItem>
      <ListItem>Python/Django</ListItem>
      <ListItem>Base de Données MySQL et MongoDB</ListItem>
      <ListItem>Système de Cache Mémoire</ListItem>
      <ListItem>Websocket</ListItem>
    </List>
    <Title>CMS</Title>
    <List>
      <ListItem>WordPress</ListItem>
      <ListItem>PrestaShop</ListItem>
    </List>
    <Title>Outils de Développement</Title>
    <List>
      <ListItem>Linux</ListItem>
      <ListItem>Version Control</ListItem>
      <ListItem>Docker</ListItem>
      <ListItem>CI/CD</ListItem>
      <ListItem>Testing</ListItem>
      <ListItem>Package manager</ListItem>
      <ListItem>Design patterns</ListItem>
    </List>
  </section>
)

export default ResumeSkills

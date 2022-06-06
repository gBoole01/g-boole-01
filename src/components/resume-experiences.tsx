import tw from 'tailwind-styled-components';

const Section = tw.section`before:absolute before:bg-blue-1 before:bottom-0 before:content-[''] before:left-[-0.625rem] before:top-10 before:w-[3px] mt-4 relative`
const SectionTitle = tw.h2`text-lg text-blue-1 font-bold italic uppercase`
const Title = tw.h3`before:absolute before:bg-blue-1 before:bottom-1/4 before:content-[''] before:h-4 before:left-[-1rem] before:rounded-full before:top-1/4 before:w-4 relative pl-1 text-lg uppercase`
const Subtitle = tw.p`text-lg text-blue-2 italic`
const DateCaption = tw.span`text-sm text-blue-1`
const List = tw.ul`list-['-'] pl-2`
const ListItem = tw.li`pl-1 pb-1`

const ResumeExperiences = () => (
    <Section>
        <SectionTitle>Expériences</SectionTitle>
        <Title>
          <DateCaption>2021-2022: </DateCaption>
          Full Stack Developer
        </Title>
        <Subtitle>Agence Web</Subtitle>
        <List>
          <ListItem>Maintenance de sites WordPress et PrestaShop des clients de l'Agence</ListItem>
          <ListItem>Développement d'un module PrestaShop dédié de vente de vins en primeur</ListItem>
          <ListItem>Mise à niveau et refonte visuelle d'un site PrestaShop (1.7) et de ses modules dédiés (parrainage, présentation de domaines viticoles, ventes privées, etc..)</ListItem>
          <ListItem>Maintenance et développement de nouvelles fonctionnalités d'une application de réservation de restaurant et de système CRM</ListItem>
        </List>
        <Title>
          <DateCaption>2020: </DateCaption>
          Full Stack Developer
        </Title>
        <Subtitle>Agence Web - Stage</Subtitle>
        <List>
          <ListItem>Développpement d'un module WordPress dédié de profils utilisateurs</ListItem>
          <ListItem>Développpement d'un module WordPress dédié d'adhésion à une association</ListItem>
          <ListItem>Intégration visuelle de contenus</ListItem>
          <ListItem>Développpement d'une application de suivi de compétition sportive</ListItem>
        </List>
        <Title>
          <DateCaption>2016-2018: </DateCaption>
          Manager
        </Title>
        <Subtitle>Etablissement de restauration rapide</Subtitle>
        <List>
          <ListItem>Former, motiver et superviser une équipe</ListItem>
          <ListItem>Assurer la qualité des produits et services</ListItem>
          <ListItem>Assurer l'ouverture et la fermeture de l'établissement</ListItem>
        </List>
    </Section>
)

export default ResumeExperiences;
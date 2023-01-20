// import tw from 'tailwind-styled-components';
import Button from './button'

const Section = tw.section`flex flex-col py-2 mt-4 mb-8 relative after:absolute after:z-[-1] after:content[''] after:shadow-md after:bg-blue-2/20 after:rounded-l-lg after:left-[-0.25rem] after:right-[-2.25rem] after:top-0 after:bottom-0`
const Title = tw.h2`text-2xl text-blue-1 font-bold uppercase`
const Content = tw.p`ml-3 mt-3 mb-2`

const Intro = () => (
  <Section>
    <Title>Qui suis-je ?</Title>
    <Content>
      Je suis un développeur Web Full Stack passioné !<br />
      J'écris des articles spécialisés dans les domaines du développement web,
      de l'expérience Developer (DX), de l'entrepreunariat, et des nouvelles
      technologies en général
    </Content>
    <div className="absolute right-3 bottom-[-0.75rem]">
      <Button label="En savoir plus" href="/about" />
    </div>
  </Section>
)

export default Intro

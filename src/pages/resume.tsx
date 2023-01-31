import { Button, Link as NextUiLink } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import SeoHelper from '../components/seo-helper'
import opquastLogo from '../../public/images/opquast-expert-badge.png'
import { RESUME } from '../lib/constants'
import { useContactModal } from '../contexts/ContactModalProvider'

const ResumeIntro = () => {
  const { contactModalShowHandler } = useContactModal()
  return (
    <section>
      <h1>Curriculum Vitae</h1>
      <p>
        Pour des raisons de confidentialités, les noms des personnes, écoles, et
        entreprises ne sont pas communiqués.
      </p>
      <p>
        Si vous souhaitez en apprendre plus sur moi, n'hésitez pas à me
        contacter !
      </p>
      <Button onPress={contactModalShowHandler} css={{ zIndex: '100' }}>
        Contact
      </Button>
    </section>
  )
}

const ResumeSkills = () => (
  <section>
    <h2>Compétences</h2>
    <h3>Front-End</h3>
    <ul>
      {RESUME.skills.frontEnd.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h3>Back-End</h3>
    <ul>
      {RESUME.skills.backEnd.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h3>CMS</h3>
    <ul>
      {RESUME.skills.CMS.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h3>Outils de Développement</h3>
    <ul>
      {RESUME.skills.devTools.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
)

const ResumeExperiences = () => (
  <section>
    <h2>Expériences</h2>
    {RESUME.experiences.map(
      (
        { startDate, endDate, company, title, duration, missions, type },
        index,
      ) => (
        <div key={index}>
          <h3>
            <span>
              {startDate} {endDate ? `- ${endDate}` : ''}:{' '}
            </span>
            {title}
          </h3>
          <p>
            {company} - {type} - {duration}
          </p>
          <ul>
            {missions.map((mission, missionIndex) => (
              <li key={missionIndex}>{mission}</li>
            ))}
          </ul>
        </div>
      ),
    )}
  </section>
)

const ResumeDiplomas = () => (
  <section>
    <h2>Diplômes</h2>
    {RESUME.diplomas.map(({ title, year, type }, index) => (
      <div key={index}>
        <h3>
          <span>{year}: </span>
          {type}
        </h3>
        <p>{title}</p>
      </div>
    ))}

    <Image
      priority
      src={opquastLogo}
      height={76}
      width={100}
      alt="opquast expert badge"
    />
  </section>
)

const ResumeInterests = () => (
  <section>
    <h2>Interêts</h2>
    <ul>
      {RESUME.interests.map((interest, index) => (
        <li key={index}>{interest}</li>
      ))}
      <li>
        Pleins d'autres sujets que vous pourrez découvrir sur{' '}
        <Link href="/blog">
          <NextUiLink>mon blog</NextUiLink>
        </Link>
      </li>
    </ul>
  </section>
)

const ResumeOutro = () => (
  <section>
    <p>
      Si vous le souhaitez, vous pouvez téléchargez une copie de mon C.V. au
      format PDF
    </p>
    <div>
      <Button
        as="a"
        onPress={() => {
          window.open('Curriculum_Vitae_2022_gBoole01.pdf')
        }}
      >
        Télécharger
      </Button>
    </div>
  </section>
)

const Resume = () => (
  <>
    <SeoHelper title="Curriculum Vitae" description="Le CV de gBoole01" />

    <ResumeIntro />
    <ResumeSkills />
    <ResumeExperiences />
    <ResumeDiplomas />
    <ResumeInterests />
    <ResumeOutro />
  </>
)

export default Resume

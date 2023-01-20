import Layout from '../components/layout'
import Meta from '../components/head'
import ResumeIntro from '../components/resume-intro'
import ResumeSkills from '../components/resume-skills'
import ResumeExperiences from '../components/resume-experiences'
import ResumeDiplomas from '../components/resume-diplomas'
import ResumeInterests from '../components/resume-interests'
import ResumeOutro from '../components/resume-outro'

const Resume = () => (
  <Layout>
    <Meta title="Curriculum Vitae" description="Le CV de gBoole01" />

    <ResumeIntro />
    <ResumeSkills />
    <ResumeExperiences />
    <ResumeDiplomas />
    <ResumeInterests />
    <ResumeOutro />
  </Layout>
)

export default Resume

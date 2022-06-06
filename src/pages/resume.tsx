import Head from 'next/head';
import Layout from '../components/layout';
import { SITENAME } from '../lib/constants';
import ResumeIntro from '../components/resume-intro';
import ResumeSkills from '../components/resume-skills';
import ResumeExperiences from '../components/resume-experiences';
import ResumeDiplomas from '../components/resume-diplomas';
import ResumeInterests from '../components/resume-interests';
import ResumeOutro from '../components/resume-outro';

const Resume = () => (
    <Layout>
      <Head>
        <title>Curriculum Vitae | {SITENAME}</title>
      </Head>

      <ResumeIntro/>
      <ResumeSkills />
      <ResumeExperiences />
      <ResumeDiplomas />
      <ResumeInterests />
      <ResumeOutro/>
    </Layout>
  )

export default Resume

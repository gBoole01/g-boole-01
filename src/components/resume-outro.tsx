// import tw from 'tailwind-styled-components';

const Section = tw.section`flex gap-1 flex-col before:absolute before:bg-blue-1 before:top-0 before:content-[''] before:left-2 before:right-2 before:h-px my-2 pt-2 relative`
const Button = tw.a`bg-blue-1 border border-blue-2 text-blue-2 text-xs font-bold rounded-xl w-[150px] py-1 px-4 shadow`

const ResumeOutro = () => (
  <Section>
    <p>
      Si vous le souhaitez, vous pouvez téléchargez une copie de mon C.V. au
      format PDF
    </p>
    <div className="self-end pr-3 mb-2">
      <Button download href="Curriculum_Vitae_2022_gBoole01.pdf">
        Télécharger
      </Button>
    </div>
  </Section>
)

export default ResumeOutro

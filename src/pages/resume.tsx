import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';

const Resume: NextPage = () => (
    <Layout>
      <h1>Curriculum Vitae</h1>
      <p> Si vous le souhaitez, vous pouvez conserver mon CV au format PDF en cliquant sur&nbsp;
        <Link href="/">
          <a>ce lien</a>
        </Link>
      </p>
      <p>Ou vous pouvez également me contacter en cliquant sur &nbsp;
        <Link href="/contact">
          <a>ce lien</a>
        </Link> 
      </p>
    </Layout>
  )

export default Resume

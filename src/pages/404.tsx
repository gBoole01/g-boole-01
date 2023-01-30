import Link from 'next/link'
import SeoHelper from '../components/seo-helper'

const Custom404 = () => (
  <>
    <SeoHelper
      title="Page non trouvée"
      description="Page non référencée du site web de gBoole01"
    />

    <section>
      <h1>Erreur 404</h1>
      <p>Oups, cette page semble ne plus exister !</p>
      <Link href="/">Retour à l'accueil </Link>
    </section>
  </>
)

export default Custom404

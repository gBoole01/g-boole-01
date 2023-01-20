import { Button, Modal, Text } from '@nextui-org/react'
import { LEGALS_PROPS } from '../lib/constants'

type LegalsModalProps = {
  visible: boolean
  closeHandler: () => void
}

const LegalsModal = ({ visible, closeHandler }: LegalsModalProps) => (
  <Modal
    width="75%"
    closeButton
    scroll
    blur
    aria-labelledby="legals-modal-title"
    open={visible}
    onClose={closeHandler}
  >
    <Modal.Header>
      <Text b size="$3xl" id="legals-modal-title">
        Mentions Légales
      </Text>
    </Modal.Header>
    <Modal.Body>
      <Text b size="$2xl" css={{ textAlign: 'center' }}>
        En vigueur au {new Date().toLocaleDateString('fr')}
      </Text>
      <Text>
        Conformément aux dispositions des Articles 6-III et 19 de la Loi
        n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., il est porté à la connaissance des utilisateurs et
        visiteurs, ci-après l'<b>« Utilisateur »</b>, du site{' '}
        {LEGALS_PROPS.siteUrl} , ci-après le <b>« Site »</b>, les présentes
        mentions légales.
      </Text>
      <Text>
        La navigation sur le Site par l'Utilisateur implique acceptation
        intégrale et sans réserve des présentes mentions légales.
      </Text>
      <Text>
        Ces dernières sont accessibles sur le Site à la rubrique « Mentions
        légales ».
      </Text>
      <Text b size="$2xl">
        Article 1 - l'Editeur
      </Text>
      <Text>
        L'édition et la direction de la publication du Site est assurée par{' '}
        {LEGALS_PROPS.editorName}, dont l'adresse e-mail est{' '}
        {LEGALS_PROPS.editorMail}.
      </Text>
      <Text>
        ci-après l'<b>«Editeur»</b>.
      </Text>
      <Text b size="$2xl">
        Article 2 - l'Hebergeur
      </Text>
      <Text>
        L'hébergeur du Site est la société {LEGALS_PROPS.publisherName}, dont le
        siège social est situé au « {LEGALS_PROPS.publisherAddress} », et dont
        l'adresse mail est {LEGALS_PROPS.publisherMail}
      </Text>
      <Text b size="$2xl">
        Article 3 - Accès au site
      </Text>
      <Text>
        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force
        majeure, interruption programmée ou non et pouvant découlant d'une
        nécessité de maintenance.
      </Text>
      <Text>
        En cas de modification, interruption ou suspension du Site, l'Editeur ne
        saurait être tenu responsable.
      </Text>
      <Text b size="$2xl">
        Article 4 - Collecte des données
      </Text>
      <Text>
        Le site est exempté de déclaration à la Commission Nationale
        Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune
        donnée concernant les utilisateurs.
      </Text>
      <Text>
        Toute utilisation, reproduction, diffusion, commercialisation,
        modification de toute ou partie du Site, sans autorisation de l'Editeur
        est prohibée et pourra entraînée des actions et poursuites judiciaires
        telles que notamment prévues par le Code de la propriété intellectuelle
        et le Code civil.
      </Text>
    </Modal.Body>
    <Modal.Footer>
      <Button auto onPress={closeHandler}>
        Fermer
      </Button>
    </Modal.Footer>
  </Modal>
)

export default LegalsModal

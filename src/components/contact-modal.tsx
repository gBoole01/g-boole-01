import { Button, Grid, Input, Modal, Text, Textarea } from '@nextui-org/react'
import { SetStateAction, SyntheticEvent, useState } from 'react'
import { RiMailFill, RiUserFill } from 'react-icons/ri'
import { useContactModal } from '../contexts/ContactModalProvider'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    emailFormat: false,
    message: false,
  })

  const [buttonText, setButtonText] = useState('Envoyer')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    const tempErrors = {
      name: false,
      email: false,
      emailFormat: false,
      message: false,
    }
    let isValid = true

    if (name.length <= 0) {
      tempErrors.name = true
      isValid = false
    }

    if (email.length <= 0) {
      tempErrors.email = true
      isValid = false
    }

    if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)) {
      tempErrors.emailFormat = true
      isValid = false
    }

    if (message.length <= 0) {
      tempErrors.message = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    setShowSuccessMessage(false)
    setShowFailureMessage(false)
    const isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Envoi en cours...')

      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      const { error } = await response.json()
      if (error) {
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText('Envoyer')
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Envoyer')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid.Container gap={2} justify="center" css={{ marginBottom: '$3' }}>
        <Grid xs={12}>
          {showSuccessMessage && (
            <div>
              <Text color="success" b size="$2xl">
                Votre message a bien été envoyé
              </Text>
              <Text>Je vous apporterai une réponse dès que possible !</Text>
            </div>
          )}

          {showFailureMessage && (
            <div>
              <Text color="error" b size="$2xl">
                Un problème est survenu lors de l'envoi de votre message..
              </Text>
              <Text>Veuillez réessayer ultérieurement</Text>
            </div>
          )}
        </Grid>
        <Grid xs={12} sm={6} css={{ margin: '$sm 0' }}>
          <Input
            fullWidth
            underlined
            color="primary"
            labelPlaceholder="Votre Nom"
            contentLeft={<RiUserFill fill="currentColor" />}
            onChange={(e) => setName(e.target.value)}
            value={name}
            helperText={
              errors.name ? 'Le nom ne peut pas être vide' : undefined
            }
            helperColor={errors.name ? 'error' : undefined}
            status={errors.name ? 'error' : undefined}
          />
        </Grid>
        <Grid xs={12} sm={6} css={{ margin: '$sm 0' }}>
          <Input
            fullWidth
            underlined
            color="primary"
            labelPlaceholder="Votre E-mail"
            contentLeft={<RiMailFill fill="currentColor" />}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            helperText={
              errors.email
                ? "L'adresse mail ne peut pas être vide"
                : errors.emailFormat
                ? "L'adresse mail n'est pas au bon format"
                : undefined
            }
            helperColor={
              errors.email || errors.emailFormat ? 'error' : undefined
            }
            status={errors.email || errors.emailFormat ? 'error' : undefined}
          />
        </Grid>
        <Grid xs={12} css={{ margin: '$xl 0' }}>
          <Textarea
            underlined
            fullWidth
            color="primary"
            labelPlaceholder="Votre Message"
            rows={6}
            onChange={(e: { target: { value: SetStateAction<string> } }) => {
              setMessage(e.target.value)
            }}
            value={message}
            helperText={
              errors.message ? 'Le message ne peut pas être vide' : undefined
            }
            helperColor={errors.message ? 'error' : undefined}
            status={errors.message ? 'error' : undefined}
          />
        </Grid>

        <Button css={{ width: '80%' }} type="submit">
          {buttonText}
        </Button>
      </Grid.Container>
    </form>
  )
}

const ContactModal = () => {
  const { contactModalVisible, contactModalCloseHandler } = useContactModal()

  return (
    <Modal
      width="75%"
      fullScreen
      closeButton
      scroll
      blur
      aria-labelledby="contact-modal-title"
      open={contactModalVisible}
      onClose={contactModalCloseHandler}
    >
      <Modal.Header>
        <Text b size="$3xl" id="contact-modal-title" color="primary">
          Contact
        </Text>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  )
}

export default ContactModal

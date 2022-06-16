import tw from 'tailwind-styled-components';
import type { NextPage } from 'next';
import { SetStateAction, SyntheticEvent, useState } from 'react';
import Layout from '../components/layout';
import Meta from '../components/meta';

const Section = tw.section`flex flex-col gap-2 pb-4`
const ContactIntro = tw.div`pt-2 pb-2 relative after:absolute after:z-[-1] after:content[''] after:shadow-md after:bg-blue-2/20 after:rounded-r-lg after:right-[-0.25rem] after:left-[-2.25rem] after:top-0 after:bottom-0`
const PageTitle = tw.h1`text-2xl text-blue-1 font-bold uppercase`
const Form = tw.form`flex flex-col gap-2`
const Label = tw.label`flex flex-col`
const LabelRequired = tw.span`text-red font-bold`
const Input = tw.input`mt-2 p-2 border border-gray-3 rounded-md shadow-sm focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50`
const InputError = tw.p`text-red italic`
const Textarea = tw.textarea`mt-2 p-2 w-full border border-gray-3 rounded-md shadow-sm resize-none focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50`
const InputSubmit = tw.input`mt-2 p-2 w-full border-2 border-blue-2 text-white font-bold bg-blue-1 rounded-md shadow focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50`
const SuccessMessage = tw.div`px-4 py-2 text-blue-1 rounded-md bg-blue-3 border-2`
const FailureMessage= tw.div`px-4 py-2 text-red rounded-md bg-red/40 border-2`
const MessageTitle = tw.p`font-bold text-center`

const Contact: NextPage = () => {
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
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        const tempErrors = {
            name: false,
            email: false,
            emailFormat: false,
            message: false,
        };
        let isValid = true;

        if (name.length <= 0) {
            tempErrors.name = true;
            isValid = false;
        }
        
        if (email.length <= 0) {
            tempErrors.email = true;
            isValid = false;
        }
        
        if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            tempErrors.emailFormat = true;
            isValid = false;
        }

        if (message.length <= 0) {
            tempErrors.message = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    }

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        setShowSuccessMessage(false);
        setShowFailureMessage(false);
        const isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText('Envoi en cours...');
            
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
            });

            const { error } = await response.json();
            if (error) {
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText('Envoyer');
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText('Envoyer');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <Layout>
            <Meta
                title="Contact"
                description="Entrez en contact avec gBoole01"
            />

            <Section>
                <ContactIntro>
                    <PageTitle>Contact</PageTitle>
                    <p>Si vous souhaitez échanger sur n'importe quel sujet, vous pouvez m'envoyer un message avec le formulaire suivant.</p>
                </ContactIntro>
                <Form onSubmit={handleSubmit}>
                    <Label htmlFor="name">
                        <span>Votre Nom <LabelRequired>*</LabelRequired></span>
                        <Input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="George Boole"
                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => { setName(e.target.value) }}
                            value={name}
                        />
                        {errors?.name && (<InputError>Le nom ne peut pas être vide</InputError>)}
                    </Label>

                    <Label htmlFor="email">
                        <span>Votre E-mail <LabelRequired>*</LabelRequired></span>
                        <Input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder="george.boole@exemple.fr"
                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => { setEmail(e.target.value) }}
                            value={email}
                        />
                        {errors?.email && (<InputError>L'adresse mail ne peut pas être vide</InputError>)}
                        {!errors?.email && errors?.emailFormat && (<InputError>L'adresse mail n'est pas au bon format</InputError>)}
                    </Label>

                    <Label htmlFor="message">
                        <span>Votre Message <LabelRequired>*</LabelRequired></span>
                        <Textarea 
                            name="message"
                            id="message"
                            rows={4}
                            placeholder="De quoi voulez-vous parler ?"
                            onChange={(e: { target: { value: SetStateAction<string>; }; }) => { setMessage(e.target.value) }}
                            value={message}
                        />
                        {errors?.message && (<InputError>Le message ne peut pas être vide</InputError>)}
                    </Label>

                    <InputSubmit type="submit" value={buttonText} />
                </Form>

            {showSuccessMessage && (
                <SuccessMessage>
                    <MessageTitle> Votre message a bien été envoyé</MessageTitle>
                    <p>Je vous apporterai une réponse dès que possible !</p>
                </SuccessMessage>
            )}

            {showFailureMessage && (
                <FailureMessage>
                    <MessageTitle>Un problème est survenu lors de l'envoi de votre message..</MessageTitle>
                    <p>Veuillez réessayer ultérieurement</p>
                </FailureMessage>
            )}
            </Section>

        </Layout>
    )
}

export default Contact

import type { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';
import Layout from '../components/layout';
import Meta from '../components/meta';

const Contact: NextPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
    })

    const [buttonText, setButtonText] = useState('Envoyer')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        const tempErrors = {
            name: false,
            email: false,
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

            <h1 className="mt-6 mb-4 text-2xl text-blue-1 font-bold uppercase">Contact</h1>

            <section>
                <p>Si vous souhaitez échanger sur n'importe quel sujet, vous pouvez m'envoyer un message avec le formulaire suivant.</p>
                <p>N'oubliez pas de renseigner une adresse e-mail valide afin que je puisse vous apporter une réponse !</p>
                <form className="flex flex-col gap-2 mt-6" onSubmit={handleSubmit}>
                    <label className="flex flex-col" htmlFor="name">
                        <span>Votre Nom <span className="text-red font-bold">*</span></span>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="George Boole"
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                            className="mt-2 p-2 border border-gray-3 rounded-md shadow-sm focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50" 
                        />
                        {errors?.name && (<p className="text-red italic">Le nom ne peut pas être vide</p>)}
                    </label>

                    <label className="flex flex-col" htmlFor="email">
                        <span>Votre E-mail <span className="text-red font-bold">*</span></span>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="george.boole@exemple.fr"
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            className="mt-2 p-2 border border-gray-3 rounded-md shadow-sm focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50" 
                        />
                        {errors?.email && (<p className="text-red italic">L'adresse mail ne peut pas être vide</p>)}
                    </label>

                    <label className="flex flex-col" htmlFor="message">
                        <span>Votre Message <span className="text-red font-bold">*</span></span>
                        <textarea 
                            name="message"
                            id="message"
                            rows={4}
                            placeholder="De quoi voulez-vous parler ?"
                            onChange={(e) => { setMessage(e.target.value) }}
                            value={message}
                            className="mt-2 p-2 w-full border border-gray-3 rounded-md shadow-sm resize-none focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50" 
                        />
                        {errors?.message && (<p className="text-red italic">Le message ne peut pas être vide</p>)}
                    </label>

                    <input 
                        type="submit"
                        value={buttonText}
                        className="p-2 w-full border-2 border-blue-2 text-white font-bold bg-blue-1 rounded-md shadow-md focus:border-blue-2 focus:ring focus:ring-blue-2 focus:ring-opacity-50" 
                    />
                </form>
            </section>

            {showSuccessMessage && (
                <p className="text-blue-1 font-bold">
                    Votre message a bien été envoyé !
                </p>
            )}

            {showFailureMessage && (
                <p className="text-red font-bold">
                    Un problème est survenu lors de l'envoi de votre message..
                </p>
            )}

        </Layout>
    )
}

export default Contact

import type { NextPage } from 'next';
import Head from 'next/head';
import { SyntheticEvent, useState } from 'react';
import Layout from '../components/layout';
import { SITENAME } from '../lib/constants';

const Contact: NextPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const data = {
            name,
            email,
            message,
        }

        const response = await fetch('/api/contact-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        setSubmitted(true);
        const result = await response.json();
        if (response.status !== 200) {
            setError(true);
            setErrorMessage(result.data);
        } else {
            setError(false);
            setErrorMessage('');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <Layout>
            <Head>
                <title>Contact | {SITENAME}</title>
            </Head>

            <h1 className="mt-6 mb-4 text-2xl text-blue-1 font-bold uppercase">Contact</h1>

            {submitted && error && (<p>{errorMessage}</p>)}

            {submitted && !error && (
                <>
                    <p>Votre message a bien été envoyé !</p>
                    <p>Je vous apporterai une réponse dès que possible</p>
                </>
            )}

            <section>
                <form className="flex flex-col gap-2 items-center mt-6" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={(e) => { setName(e.target.value) }} value={name} className="border p-1" />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" onChange={(e) => { setEmail(e.target.value) }} value={email} className="border p-1" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" onChange={(e) => { setMessage(e.target.value) }} value={message} className="border w-full p-2" />

                    <button type="submit">Envoyer</button>
                </form>
            </section>

        </Layout>
    )
}

export default Contact

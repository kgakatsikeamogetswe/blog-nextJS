import { Fragment } from 'react';
import Head from 'next/head'

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
    return <Fragment>
        <Head>
            <title>Conatat Me</title>
            <meta name='description' content='send me your messages!' />
        </Head>
        <ContactForm />
        </Fragment>
    
}

export default ContactPage;


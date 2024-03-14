import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageLayout from "@/Layouts/PageLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FaUserAlt,
    FaRoad,
    FaCreditCard,
    FaShoppingCart,
} from "react-icons/fa";
import { IoCart, IoExit, IoMail } from "react-icons/io5";

export default function Dashboard(props) {
    return (
        <PageLayout
            user={props.auth.user}
            errors={props.errors}
        >
            <section>
            <Head>
                    <title>Privacy Policy - Furnicisual</title>
            </Head>
                <div className="mx-auto max-w-7xl p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
                    <p>The Privacy Policy below defines the rules for saving and accessing data on User Devices using the Service for the purpose of providing electronic services by the Administrator and the rules for collecting and processing personal data of Users, which they have provided personally and voluntarily through the tools available in the Service.</p>
                    <p>The Privacy Policy below is an integral part of the Website Regulations, which sets out the rules, rights and obligations of Users using the Service.</p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">§1 Definitions</h2>
                    <ul>
                        <li><strong>Website</strong> – websites of partners, service providers or clients cooperating with the Administrator</li>
                        <li><strong>External Website</strong> – The Website Administrator and Data Administrator (hereinafter referred to as the Administrator) is the company “Erynek sp. z o. o.”, conducting business activity at the address: 30-698 Kraków ul. Szybisko 26, with tax identification number (NIP): 6793014045, providing electronic services via the Website</li>
                        <li><strong>Website Administrator / Data Administrator</strong> – The Website Administrator and Data Administrator (hereinafter referred to as the Administrator) is the company “Erynek sp. z o. o.”, conducting business activity at the address: 30-698 Kraków ul. Szybisko 26, with tax identification number (NIP): 6793014045, providing electronic services via the Website</li>
                        <li><strong>User </strong> – a natural person to whom the Administrator provides electronic services via the Website.</li>
                        <li><strong>Device </strong> – an electronic device with software through which the User accesses the Website</li>                    
                        <li><strong>Cookies </strong> – text data collected in the form of files placed on the User’s Device</li>
                        <li><strong>GDPR </strong> – Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)</li>
                        <li><strong>Personal data</strong> – means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person</li>
                        <li><strong>Processing </strong> – means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;</li>
                        <li><strong>Restriction of processing</strong> – means the marking of stored personal data with the aim of limiting their processing in the future</li>                    
                        <li><strong>Profiling </strong> – means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements</li>
                        <li><strong>Consent </strong> – of the data subject means any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her</li>
                        <li><strong>Personal data breach</strong> – means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed</li>
                        <li><strong>Pseudonymisation</strong> – means the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person</li>
                        <li><strong>Anonymization</strong> – Anonymization of data is an irreversible process of operations on data that destroys/overwrites “personal data” making identification or linking a given record to a specific user or individual impossible.</li>                    
                    
                    </ul>
                </div>

            </section>
        </PageLayout>
    );
}

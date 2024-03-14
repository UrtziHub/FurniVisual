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
            <section className="mx-8 md:mx-32 lg:mx-52 xl:mx-80">
                <Head>
                    <title>Privacy Policy - Furnicisual</title>
                </Head>
                <div className="mx-auto max-w-4xl p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">Privacy Policy</h1>
                    <p>The Privacy Policy below defines the rules for saving and accessing data on User Devices using the Service for the purpose of providing electronic services by the Administrator and the rules for collecting and processing personal data of Users, which they have provided personally and voluntarily through the tools available in the Service.</p>
                    <p>The Privacy Policy below is an integral part of the Website Regulations, which sets out the rules, rights and obligations of Users using the Service.</p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">§1 Definitions</h2>
                    <ul className="list-disc pl-6 space-y-2">
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
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">§2 Data Protection Officer</h2>
                    <p>Based on Art. 37 GDPR, the Administrator has not appointed a Data Protection Officer.</p>
                    <p>In matters regarding data processing, including personal data, contact the Administrator directly.</p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">§3 Types of Cookies Files</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Internal cookies</strong> – files placed and read from the User’s Device by the Website’s IT system</li>
                        <li><strong>External cookies</strong> – files placed and read from the User’s Device by external Websites’ IT systems. Scripts of external Websites that may place their own cookies on Users’ Devices have been consciously placed in the Website through scripts and services made available and installed on the Website</li>
                        <li><strong>Session cookies</strong> – files that are placed on and read from the User’s Device by the Website for the duration of one session of that Device. The files are deleted from the User’s Device after the session ends.</li>
                        <li><strong>Persistent cookies</strong> – files placed on and read from the User’s Device by the Website until they are manually deleted. The files are not automatically deleted once the User’s Device session ends unless the configuration of the User’s Device is set to delete Cookie files after the end of the Device session.</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">§4 Data Storage Security</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Cookie storage and read mechanisms</strong> – Cookie data storage, reading and exchange mechanisms between Cookies stored on the User’s Device and the Website are implemented through standard mechanisms of internet browsers and do not allow for retrieving any other data from the User’s Device or data from other websites visited by the User, including personal data or confidential information. Transfer of viruses, Trojan horses and other malware to the User’s Device is also virtually impossible.</li>
                        <li><strong>Internal cookies</strong> – the Cookies used by the Administrator are safe for Users’ Devices and do not contain scripts, content or information that could pose a threat to the security of personal data or the security of the Device used by the User.</li>
                        <li><strong>External cookies</strong> – The Administrator makes every effort to verify and select website partners in terms of user security. However, it does not have full control over the content of Cookies originating from external partners. The Administrator is not responsible, to the fullest extent permitted by law, for the security of Cookies, their content and their compliant use under the license by Scripts originating from External Websites installed in the Website.</li>
                        <li>
                            <strong>Cookie control</strong>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The User may, at any time, independently change the settings regarding saving, deleting and accessing data of stored Cookie files by each website</li>
                                <li>Information on how to disable Cookie files in the most popular computer browsers is available at: how to disable cookies or from one of the indicated providers:
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Google Chrome</li>
                                        <li>Microsoft Edge</li>
                                        <li>Mozilla Firefox</li>
                                        <li>Microsoft Internet Explorer</li>
                                        <li>Opera</li>
                                        <li>Apple Safari</li>
                                    </ul>
                                </li>
                                <li>The User may, at any time, delete all Cookies saved so far using the User’s Device tools through which the User uses the Website’s services.</li>
                            </ul>
                        </li>
                        <li><strong>Threats on the User’s side</strong> – The Administrator employs all available technical means to ensure the security of data placed in Cookie files. However, it should be noted that ensuring the security of such data depends on both parties including the User’s actions. The Administrator is not responsible for intercepting such data, impersonating the User’s session or deleting them as a result of the User’s conscious or unconscious activities, viruses, Trojans and other spy software that may infect or could have infected the User’s Device. To protect against these threats, Users should adhere to the safe web use principles.</li>                    
                        <li><strong>Storage of personal data</strong> – The Administrator ensures that every effort is made to ensure that the processed personal data provided voluntarily by Users is secure, access to it is restricted and carried out in accordance with their intended purpose and processing objectives. The Administrator also ensures that every effort is made to secure the personal data held against loss through the use of appropriate physical and organisational safeguards.</li>
                        <li><strong>Storage of passwords</strong> – The Administrator declares that passwords are stored in encrypted form using the latest standards and guidelines in this regard. Decryption of account access passwords provided in the Website is virtually impossible.</li>
                    </ul>
                </div>
            </section>
        </PageLayout>
    );
}

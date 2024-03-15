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
        <PageLayout user={props.auth.user} errors={props.errors}>
            <section className="mx-8 md:mx-32 lg:mx-52 xl:mx-80">
                <Head>
                    <title>Privacy Policy - Furnicisual</title>
                </Head>
                <div className="mx-auto max-w-6xl p-6 bg-white rounded-md shadow-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">
                        Privacy Policy
                    </h1>
                    <p>
                        The Privacy Policy below defines the rules for saving
                        and accessing data on User Devices using the Service for
                        the purpose of providing electronic services by the
                        Administrator and the rules for collecting and
                        processing personal data of Users, which they have
                        provided personally and voluntarily through the tools
                        available in the Service.
                    </p>
                    <p>
                        The Privacy Policy below is an integral part of the
                        Website Regulations, which sets out the rules, rights
                        and obligations of Users using the Service.
                    </p>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        I. General Definitions
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <strong>Terms </strong> – these terms and conditions
                        </li>
                        <li>
                            <strong>Service </strong> – the internet service
                            “furnivisual.com,” operating at
                            https://furnivisual.com/
                        </li>{" "}
                        <li>
                            <strong>Service Provider </strong> – the company
                            “Erynek Ltd.” with the registered address: 30-698
                            Kraków ul. Szybisko 26, NIP: 6793014045,
                        </li>{" "}
                        <li>
                            <strong>Service User </strong> – any natural person
                            accessing the Service and using services provided
                            through the Service by the Service Provider.
                        </li>
                        <li>
                            <strong>Electronic Communication</strong> –
                            Communication between parties via electronic mail
                            (email) and contact forms available on the website.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        II. General Provisions
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            The Terms define the rules for the functioning and
                            use of the Service, as well as specify the scope of
                            rights and obligations of Service Users and the
                            Service Provider related to the use of the Service.
                        </li>
                        <li>
                            The Service Provider’s services involve providing
                            free tools in the form of the Service, enabling
                            Service Users to access content in the form of
                            posts, articles, audiovisual materials, or web
                            applications and electronic forms.
                        </li>
                        <li>
                            Any content, articles, and information containing
                            features of tips or advice published on the Service
                            are only a general collection of information and are
                            not directed to individual Service Users. The
                            Service Provider is not responsible for their use by
                            Service Users.
                        </li>
                        <li>
                            Service Users take full responsibility for the way
                            they use materials provided within the Service,
                            including their use in accordance with applicable
                            legal regulations.
                        </li>
                        <li>
                            The Service Provider does not provide any warranty
                            regarding the usefulness of materials posted on the
                            Service.
                        </li>
                        <li>
                            The Service Provider is not responsible for any
                            damages incurred by Service Users of the Service or
                            third parties in connection with the use of the
                            Service. The Service User using the Service assumes
                            all risks associated with its use, especially with
                            the use and utilization of information posted on the
                            Service.{" "}
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        III. Terms of Service Use
                    </h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            Use of the Service by each Service User is free and
                            voluntary.{" "}
                        </li>
                        <li>
                            Service Users are obligated to familiarize
                            themselves with the Terms and other documents that
                            constitute its integral part, and they must fully
                            accept its provisions to continue using the Service.
                        </li>
                        <li>
                            Service Users may not use any data obtained on the
                            Service for marketing purposes.{" "}
                        </li>
                        <li>
                            Technical requirements for using the Service:
                            <ul>
                                <li>
                                    Device with a display for viewing web pages,
                                </li>
                                <li>Internet connection,</li>
                                <li>
                                    Any web browser that displays web pages in
                                    accordance with the standards and provisions
                                    of the W3C Consortium and supports websites
                                    provided in HTML5,
                                </li>
                                <li>Enabled support for JavaScript scripts,</li>
                                <li>Enabled support for Cookie files.</li>
                            </ul>
                        </li>
                        <li>
                            To ensure the security of the Service Provider,
                            Service Users, and other Service Users using the
                            Service, all Service Users should adhere to
                            generally accepted network security principles,{" "}
                        </li>
                        <li>
                            Prohibited actions performed personally by Service
                            Users or using software:
                            <ul>
                                <li>
                                    Without written consent, decompilation and
                                    analysis of the source code,
                                </li>
                                <li>
                                    Without written consent, actions causing
                                    excessive server load of the Service,
                                </li>
                                <li>
                                    Without written consent, attempts to detect
                                    vulnerabilities in the Service’s security
                                    and server configuration,
                                </li>
                                <li>
                                    Attempts to upload or inject code, scripts,
                                    and software into the server and database
                                    that could harm the Service’s software,
                                    other Service Users, or the Service Provider
                                    without written consent,
                                </li>
                                <li>
                                    Attempts to upload or inject code, scripts,
                                    and software into the server and database
                                    that could track or steal data of Service
                                    Users or the Service Provider without
                                    written consent,
                                </li>
                                <li>
                                    Any actions aimed at damaging, blocking the
                                    operation of the Service or preventing the
                                    achievement of the Service’s purpose.
                                </li>
                            </ul>
                        </li>
                        <li>
                            In case of detecting the occurrence or potential
                            occurrence of a Cybersecurity incident or violation
                            of GDPR, Service Users should first report this to
                            the Service Provider to quickly resolve the
                            issue/threat and secure the interests of all Service
                            Users of the Service.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        IV. Conditions and Rules of Registration
                    </h2>
                    <ul>
                        <li>
                            Service Users can use the Service without the need
                            for registration.
                        </li>
                        <li>
                            Service Users must be registered and have an account
                            on the Service to access additional services
                            provided in the Service, available only to
                            registered Service Users.
                        </li>
                        <li>Registration on the Service is voluntary.</li>
                        <li>Registration on the Service is free.</li>
                        <li>
                            Each Service User can have only one account on the
                            Service.
                        </li>
                        <li>
                            Technical requirements related to account
                            registration:
                            <ul>
                                <li>Having an individual email account,</li>
                            </ul>
                        </li>
                        <li>
                            Service Users registering on the Service consent to
                            the processing of their personal data by the Service
                            Provider to the extent that they were entered into
                            the Service during the registration process and
                            their subsequent changes or deletion.
                        </li>
                        <li>
                            The Service Provider has the right to suspend or
                            delete Service User accounts at its discretion,
                            thereby preventing or restricting access to
                            individual or all Service services, content,
                            materials, and resources, especially if the Service
                            User violates the Terms, applicable legal
                            regulations, principles of social coexistence, or
                            acts to the detriment of the Service Provider or
                            other Service Users, the legitimate interests of the
                            Service Provider, and third parties cooperating or
                            not with the Service Provider.
                        </li>
                        <li>
                            All Service offerings may be changed in terms of
                            content and scope, added or subtracted, and may also
                            be temporarily suspended or access to them may be
                            restricted according to the Service Provider’s
                            discretionary decision, without the possibility of
                            objection in this regard by Service Users.
                        </li>
                        <li>
                            Additional security rules regarding account use:
                            <ul>
                                <li>
                                    Registered Service Users are prohibited from
                                    sharing their login and password for their
                                    account with third parties.
                                </li>
                                <li>
                                    The Service Provider has no right and will
                                    never ask the Service User for the password
                                    to their chosen account.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Account deletion:
                            <ul>
                                <li>
                                    Each Service User with an account on the
                                    Service has the possibility to independently
                                    delete their account from the Service.
                                </li>
                                <li>
                                    Service Users can do this by logging into
                                    the Service panel.
                                </li>
                                <li>
                                    Deleting an account results in the removal
                                    of all Service User identification data and
                                    the anonymization of the username and email
                                    address.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        V. Terms of Newsletter Service
                    </h2>
                    <ul>
                        <li>
                            Service Users can use the Service without the need
                            to subscribe to the Newsletter.
                        </li>
                        <li>
                            Subscribing to the Newsletter service is voluntary.
                        </li>
                        <li>Subscribing to the Newsletter service is free.</li>
                        <li>
                            Technical requirements related to the Newsletter
                            service:
                            <ul>
                                <li>Having an individual email account,</li>
                            </ul>
                        </li>
                        <li>
                            Terms of the Newsletter service:
                            <ul>
                                <li>
                                    Providing an individual email account in the
                                    electronic form,
                                </li>
                                <li>
                                    Verification of the provided email account
                                    by activating the link sent to it,
                                </li>
                                <li>
                                    Expressing consent to receive email
                                    notifications,
                                </li>
                            </ul>
                        </li>
                        <li>
                            Scope of the Newsletter service:
                            <ul>
                                <li>
                                    Notifying about new updates, posts,
                                    contests, and other promotional activities
                                    related to the services of the Service,
                                </li>
                                <li>
                                    Notifying about promotional activities of
                                    Service partners (Marketing messages),
                                </li>
                            </ul>
                        </li>
                        <li>
                            Unsubscribing from the Newsletter service:
                            <ul>
                                <li>
                                    Each Service User subscribed to the
                                    Newsletter service has the possibility to
                                    independently unsubscribe from the
                                    Newsletter service.
                                </li>
                                <li>
                                    Service Users can do this by clicking the
                                    link in the email received from the Service.
                                </li>
                                <li>
                                    Unsubscribing from the Newsletter service
                                    results in the removal of the provided email
                                    address from the Service Provider’s
                                    database.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-6 mb-2 text-center">
                        VI. Terms of Communication and Provision of Other
                        Services on the Service
                    </h2>
                    <ul>
                        <li>
                            The Service provides services and tools that allow
                            Service Users to interact with the Service in the
                            form of:
                            <ul>
                                <li>Contact form</li>
                                <li>Commenting on posts and articles</li>
                            </ul>
                        </li>
                        <li>
                            The Service provides contact information in the form
                            of:
                            <ul>
                                <li>Email address</li>
                            </ul>
                        </li>
                        <li>
                            In the event of contact by Service Users with the
                            Service Provider, the personal data of Service Users
                            will be processed in accordance with the “Privacy
                            Policy,” which is an integral part of the Terms.
                        </li>
                    </ul>
                </div>
            </section>
        </PageLayout>
    );
}

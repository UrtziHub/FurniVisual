import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";

export default function PageLayout({user, children, className = "", headTitle}) {
    return (
        <div className={`${className}`}>
            <Head title={headTitle}/>
            <Header user={user}/>
            {children}
            <Footer/>
        </div>
    );
}

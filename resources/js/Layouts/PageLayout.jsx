import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function PageLayout({user, children, className = ""}) {
    return (
        <div className={`${className}`}>
            <Header user={user}/>
            {children}
            <Footer/>
        </div>
    );
}

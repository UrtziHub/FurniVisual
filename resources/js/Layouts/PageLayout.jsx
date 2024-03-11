import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

export default function PageLayout({ user, children }) {
    return (
        <div className="min-h-screen">
            <Header user={user}/>
            {children}
            <Footer />
        </div>
    );
}
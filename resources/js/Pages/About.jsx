import PageLayout from "@/Layouts/PageLayout";

export default function About({auth}) {
    return (
        <PageLayout user={auth.user} >
            <h1 className="text-xl">About us <a href="/" className="underline">go home</a></h1>
        </PageLayout>
    );
}
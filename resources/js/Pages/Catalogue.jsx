import PageLayout from "@/Layouts/PageLayout";

export default function Catalogue({auth}){
    return(
        <PageLayout user={auth.user} >
            <h1 className="text-xl">Catalogue <a href="/" className="underline">go home</a></h1>
        </PageLayout>
    )
}
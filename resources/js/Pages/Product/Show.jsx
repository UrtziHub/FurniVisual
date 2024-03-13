import PageLayout from "@/Layouts/PageLayout";

export default function Show({auth}){
    return(
        <PageLayout user={auth.user}>

        </PageLayout>
    )
}
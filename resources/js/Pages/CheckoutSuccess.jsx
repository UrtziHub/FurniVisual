import PageLayout from "@/Layouts/PageLayout";

export default function CheckoutSuccess({auth}) {

    return (
        <PageLayout user={auth.user} headTitle={"Success"}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-center mt-8 sm:mt-32">Ole!</h1>
        </PageLayout>
    );
}

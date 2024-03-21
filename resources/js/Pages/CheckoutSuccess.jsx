import PageLayout from "@/Layouts/PageLayout";

export default function CheckoutSuccess({customer}) {
    return (
        <PageLayout>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-center mt-8 sm:mt-32">Ole! {customer?.name}</h1>
        </PageLayout>
    );
}

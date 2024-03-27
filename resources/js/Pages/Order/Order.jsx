import PageLayout from "@/Layouts/PageLayout";
import "../../../css/scroll.css"
import OrdersTable from "@/Components/OrdersTable";

export default function Order({auth, orders}) {
    console.log(orders);

    if (!orders || orders.length === 0) {
        return (
            <PageLayout user={auth.user} className="bg-slate-100" headTitle={"Orders"}>
                <div className="mx-4 xl:mx-64 py-4">
                    <p>No Orders found.</p>
                </div>
            </PageLayout>
        );
    }
    return (
        <PageLayout user={auth.user} className="bg-slate-100" headTitle={"Orders"}>
            <div className="mx-4 xl:mx-64 py-4">
                <div className="text-9xl font-black font-mono text-center">
                    <span className="bg-clip-text text-transparent bg-center bg-[url('/images/catalogue.webp')]">
                        Orders
                    </span>
                </div>
                <section id="myScrollableSection">
                    <OrdersTable
                        key={user.id}
                        data={orders}
                        thead={["number", "status", "price", "email", "created_at", "actions"]}
                    ></OrdersTable>
                </section>
            </div>
        </PageLayout>
    );
}

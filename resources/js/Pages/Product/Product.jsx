import ProductTable from "@/Components/ProductTable";
import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";
import "../../../css/scroll.css";
export default function Product({ auth, products }) {

    if (!products || products.length === 0) {
        return (
            <PageLayout user={auth.user} className="bg-slate-100">
                <div className="mx-4 xl:mx-64 py-4">
                    <p>No products found.</p>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="mx-4 xl:mx-64 py-4">
                <div class="text-9xl font-black font-mono text-center">
                    <span class="bg-clip-text text-transparent bg-center bg-[url('/images/catalogue.webp')]">
                        Products
                    </span>
                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    Hello world
  </span>
                </div>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link href={route("admin.product.create")}>Create Product</Link>
                </button>
                <section id="myScrollableSection">
                    <ProductTable
                        data={products}
                        thead={["action", "name","price", "action","desription"]}
                    ></ProductTable>
                </section>
            </div>
        </PageLayout>
    );
}

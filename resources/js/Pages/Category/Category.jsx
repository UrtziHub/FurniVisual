import PageLayout from "@/Layouts/PageLayout";
import {Link, useForm} from "@inertiajs/react";
import "../../../css/scroll.css"
import ProductTable from "@/Components/ProductTable";
import CategoryTable from "@/Components/CategoryTable";

export default function Category({auth, categories}) {
    if (!categories || categories.length === 0) {
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
                        Categories
                    </span>
                </div>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link href={route("category.create")}>Create Category</Link>
                </button>
                <section id="myScrollableSection">
                    <CategoryTable
                        data={categories}
                        thead={["action", "name", "description", "image"]}
                    ></CategoryTable>
                </section>
            </div>
        </PageLayout>
    );
}

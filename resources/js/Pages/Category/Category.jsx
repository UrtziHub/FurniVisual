import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";
import "../../../css/scroll.css"
import CategoryTable from "@/Components/CategoryTable";

export default function Category({auth, categories}) {

    if (!categories || categories.length === 0) {
        return (
            <PageLayout user={auth.user} className="bg-slate-100">
                <div className="mx-4 xl:mx-64 py-4">
                    <p>No categories found.</p>
                </div>
            </PageLayout>
        );
    }
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="mx-4 xl:mx-64 py-4">
                <div className="text-9xl font-black font-mono text-center">
                    <span className="bg-clip-text text-transparent bg-center bg-[url('/images/catalogue.webp')]">
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

import Toggle from "@/Components/Toggle";
import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";

export default function Product({ auth, products }) {
    console.log(products);
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <section className=" mx-4 xl:mx-64 py-4 grid gap-4 md:grid-cols-2 grid-cols-1 md:text-nowrap">
                {products.map((product, index) => (
                    <Link key={index} >
                        <img
                            src={product.image}
                            alt=""
                            className="rounded-t-md"
                        />
                        <div className="bg-white rounded-b-md px-6 py-4 shadow-xl">
                            <h1 className="font-bold text-xl mb-2">
                                {product.name}
                            </h1>
                            <p className="text-gray-700 text-wrap">
                                {product.price}
                            </p>
                        </div>
                    </Link>
                ))}
            </section>
        </PageLayout>
    );
}

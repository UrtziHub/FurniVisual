import Toggle from "@/Components/Toggle";
import PageLayout from "@/Layouts/PageLayout";
import { Link, useForm } from "@inertiajs/react";

export default function Product({ auth, products }) {
    const { delete: handleDelete } = useForm();

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
                <h1 className="font-bold text-xxl flex justify-center">
                    Products
                </h1>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link href={route("product.create")}>Create Product</Link>
                </button>
                <section className="mt-4">
                    <div className="overflow-auto h-[700px]">
                        <table className="min-w-full table-auto border-collapse  border-gray-300 shadow-md rounded-lg">
                            <thead className="sticky top-0 bg-gray-200">
                                <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">
                                        Short Description
                                    </th>
                                    <th className="px-4 py-2">
                                        Full Description
                                    </th>
                                    <th className="px-4 py-2">Gallery</th>
                                    <th className="px-4 py-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.id}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            <img
                                                src={`/storage/products/${product.image}`}
                                                alt=""
                                                className="rounded-md max-w-xs w-48"
                                            />
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.name}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.price}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.shortDescription}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.fullDescription}
                                        </td>
                                        <td className="px-4 py-2 border border-gray-300">
                                            {product.gallery &&
                                                Array.isArray(
                                                    product.gallery
                                                ) &&
                                                product.gallery.map(
                                                    (image, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={`/storage/products/${image}`}
                                                            alt=""
                                                            className="max-w-xs h-auto mb-2 mr-2"
                                                            style={{
                                                                maxHeight:
                                                                    "100px",
                                                            }}
                                                        />
                                                    )
                                                )}
                                        </td>
                                        <td className="sm:px-4 py-2 border border-gray-300">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                                    <Link
                                                        href={route(
                                                            "product.edit",
                                                            product
                                                        )}
                                                    >
                                                        Edit
                                                    </Link>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                                    onClick={() =>
                                                        handleDelete(
                                                            route(
                                                                "product.destroy",
                                                                product
                                                            )
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}

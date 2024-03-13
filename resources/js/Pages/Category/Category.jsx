import Toggle from "@/Components/Toggle";
import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";

export default function Product({ auth, categories }) {
    console.log(categories);
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="mx-4 xl:mx-64 py-4">
                <h1 className="font-bold text-xxl flex justify-center">
                    Categories
                </h1>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link href={route("category.create")}>Create Product</Link>
                </button>
                <section className="mt-4">
                    <div className="overflow-auto h-[700px]">
                        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md ">
                        <thead className="sticky top-0 bg-gray-200">
                        <tr>
                                    <th className="px-4 py-2">ID</th>
                                    <th className="px-4 py-2">Image</th>
                                    <th className="px-4 py-2">Name</th>
                                    <th className="px-4 py-2">
                                        description
                                    </th>
                                    <th className="px-4 py-2">Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-gray-100"
                                                : "bg-white"
                                        }
                                    >
                                        <td className="sm:px-4 py-2 border border-gray-300">
                                            {category.id}
                                        </td>
                                        <td
                                            className="sm:px-4 py-2 border border-gray-300"
                                            style={{ width: "auto" }}
                                        >
                                            <img
                                                src={`/storage/categories/${category.image}`}
                                                alt=""
                                                className="rounded-md max-w-xs w-48"
                                                style={{ maxHeight: "200px" }}
                                            />

                                        </td>
                                        <td className="sm:px-4 py-2 border border-gray-300">
                                            {category.name}
                                        </td>
                                        <td className="sm:px-4 py-2 border border-gray-300">
                                            {category.description}
                                        </td>
                                        <td className="sm:px-4 py-2 border border-gray-300">
                                            <div className="flex items-center justify-center gap-2">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                                                    <Link
                                                        href={route(
                                                            "category.edit",
                                                            category
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
                                                                "category.destroy",
                                                                category
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

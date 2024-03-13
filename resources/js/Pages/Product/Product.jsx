import Toggle from "@/Components/Toggle";
import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";

export default function Product({auth, products}) {
    console.log(products);
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <section className="mx-4 xl:mx-64 py-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">ID</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Image</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Name</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Price</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Short Description
                            </th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Full Description</th>
                            <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-left">Gallery</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="px-4 py-2 border border-gray-300">{product.id}</td>
                                <td className="px-4 py-2 border border-gray-300" style={{width: 'auto'}}>
                                    <img src={product.image} alt="" className="rounded-t-md max-w-xs"
                                         style={{maxHeight: '200px'}}/>
                                </td>
                                <td className="px-4 py-2 border border-gray-300">{product.name}</td>
                                <td className="px-4 py-2 border border-gray-300">{product.price}</td>
                                <td className="px-4 py-2 border border-gray-300">{product.shortDescription}</td>
                                <td className="px-4 py-2 border border-gray-300">{product.fullDescription}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {product.gallery.map((image, idx) => (
                                        <img key={idx} src={image} alt="" className="max-w-xs h-auto mb-2 mr-2"
                                             style={{maxHeight: '100px'}}/>
                                    ))}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <button type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                <Link href={route('product.create')}>
                    <a className="flex flex-col h-full">
                        Create Product
                    </a>
                </Link>
            </button>

        </PageLayout>
    );
}

import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";
import {IoCartOutline, IoHeartOutline, IoStar} from "react-icons/io5";

export default function Catalogue({auth, products}) {
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-10 lg:mx-32 mx-8">
                {products.data.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white p-2 rounded shadow-lg border"
                    >
                        <div className="relative">
                            <IoHeartOutline className="absolute text-white text-xl top-2 left-2"/>
                            <Link href={route('product.show', product)} className="w-full h-auto rounded-lg">
                                <img
                                    src={"/images/catalogue.webp"}
                                    alt={product.name}

                                    width={1920}
                                    height={1080}
                                />
                            </Link>
                        </div>
                        <div className="py-4 px-2 flex flex-col gap-3">
                            <h1 className="text-xl font-bold">
                                {product.name}
                            </h1>
                            <p>{product.short_description}</p>
                            <div className="flex justify-between">
                                <div className="flex gap-1 items-center">
                                    <p className="bg-yellow-300 font-bold p-1 rounded-lg">
                                        {product.averageRate}
                                    </p>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-2xl font-bold">
                                    {product.price} $
                                </p>
                                <button
                                    className="bg-black font-bold flex items-center gap-2 text-white px-8 py-2 rounded-xl">
                                    <IoCartOutline className="text-2xl "/>
                                    Add to card
                                </button>
                            </div>
                            {" "}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {products.links.map((link, index) => {
                            const Component = link.url ? Link : "span";

                            return (
                                <Component
                                    key={index}
                                    href={link.url}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    className={`px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 rounded- ${
                                        link.active
                                            ? "bg-gray-900 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 hover:text-black"
                                    }`}
                                />
                            );
                        })}
                    </nav>
                </div>
            </div>
        </PageLayout>
    );
}

import PageLayout from "@/Layouts/PageLayout";
import { Link } from "@inertiajs/react";
import { IoHeartOutline, IoStar } from "react-icons/io5";

export default function Catalogue({ auth, products }) {
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="grid grid-cols-2 gap-4 py-10 mx-32">
                {products.data.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white p-2 rounded shadow-lg border"
                    >
                        <div className="relative">
                            <IoHeartOutline className="absolute text-white text-xl top-2 left-2" />
                            <img
                                src={"/images/catalogue.webp"}
                                alt={product.name}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="py-4 px-2 flex flex-col gap-3">
                            <h1 className="text-xl font-bold">
                                {product.name}
                            </h1>
                            <p>{product.shortDescription}</p>
                            <div className="flex justify-between">
                            <div className="flex gap-1 items-center">
                                    <p className="bg-yellow-300 font-bold p-1 rounded-lg">
                                        {product.averageRate}
                                    </p>{" "}
                                    <IoStar className="text-yellow-300 text-2xl" />
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                    <IoStar className="text-yellow-300 text-2xl"/>
                                </div>
                                <p className="text-2xl font-bold">
                                    {product.price} $
                                </p>
                                
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-black text-white px-8 py-2 rounded-xl">
                                    Add to card
                                </button>
                            </div>{" "}
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
                                            ? "bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
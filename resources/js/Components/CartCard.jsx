import {useForm} from "@inertiajs/react";
import {IoTrashOutline} from "react-icons/io5";

export default function CartCard({product}) {
    const {delete: handleDelete} = useForm();

    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded shadow-lg">
            <div className="w-48">
                <img src={`/storage/products/${product.image}`} alt="" className="rounded-md"/>
            </div>
            <div className="flex-1">
                <h1 className="text-2xl">{product.name}</h1>
                <h1 className="text-gray-500">
                    Price per product: {product.price}$
                </h1>
                <h1>
                    Enter number of products: {product.pivot.products_number}
                </h1>
                <h1>
                    Enter number of visualizations: {product.pivot.perspective}
                </h1>
                <h1>
                    I have my own 3D model: {product.pivot.model ? "NO" : "YES"}
                </h1>
            </div>
            <div
                className="flex items-center gap-1 bg-red-500 p-2 rounded-xl text-white font-bold cursor-pointer hover:bg-red-600">
                {/* <h1>{product.price}</h1> */}
                <IoTrashOutline className="font-black text-xl"/>
                <button
                    onClick={() =>
                        handleDelete(route("cart.destroy.product", product))
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

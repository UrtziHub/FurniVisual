import { IoTrashOutline } from "react-icons/io5";

export default function CartCard({ product }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-white rounded shadow-lg">
            <div className="w-48">
                <img src={product.image} alt="" className="rounded-md" />
            </div>
            <div className="flex-1">
                <h1 className="text-2xl">{product.name}</h1>
                <h1 className="text-gray-500">
                    Price per product: {product.price}$
                </h1>
                Enter number of products:: 2 Enter number of visualizations:: 2
                Choose 1st image: 2 Choose 2nd image: 3 I have my own 3D model:
                YES
            </div>
            <div className="flex items-center gap-1 bg-red-500 p-2 rounded-xl text-white font-bold">
                {/* <h1>{product.price}</h1> */}
                <IoTrashOutline className="font-black text-xl" />
                <button> Delete</button>
            </div>
        </div>
    );
}

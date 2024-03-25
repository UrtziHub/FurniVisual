import {Link} from "@inertiajs/react";
import {IoHeartOutline} from "react-icons/io5";
import Rate from "./Rate";

export default function ProductCard({product}) {
    const isSecure = product.image.startsWith('https://');
    return (
        <Link
            href={route("product.show", product)}
            key={product.id}
            className="relative bg-white p-2 rounded shadow-lg border hover:bg-neutral-50 transition-colors ease-in-out duration-300"
        >
            <div className="relative">
                <IoHeartOutline className="absolute text-white text-xl top-2 left-2"/>
                <div className="w-full h-auto rounded-lg">
                    <img
                        src={`${isSecure?product.image:'/storage/products/'+product.image}`}
                        alt={product.name}
                        width={1920}
                        height={1080}
                    />
                </div>
            </div>
            <div className="py-4 px-2 flex flex-col gap-3">
                <h1 className="text-xl font-bold">{product.name}</h1>
                <p>{product.short_description}</p>
                <div className="flex justify-between">
                    <div className="flex gap-1 items-center">
                        <p className="bg-yellow-300 font-bold p-1 rounded-lg">
                            {product.averageRate > 0 ? product.averageRate:'0.0'}
                        </p>
                        <Rate totalStars={5} initialValue={product.averageRate} disabled={true} />
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold">{product.price} $</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

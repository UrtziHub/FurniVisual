import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CantidadSelector({
    cantidadInicial,
    onCantidadChange,
    maxCantidad = 10,
    ...props
}) {
    const [cantidad, setCantidad] = useState(cantidadInicial || 1);

    const restarCantidad = (e) => {
        e.preventDefault();
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            onCantidadChange && onCantidadChange(cantidad - 1);
        }
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = parseInt(inputValue, 10);

        if (!isNaN(numericValue)) {
            if (numericValue <= maxCantidad) {
                setCantidad(numericValue);
                onCantidadChange && onCantidadChange(numericValue);
            } else {
                setCantidad(maxCantidad);
                onCantidadChange && onCantidadChange(maxCantidad);
            }
        }
    };

    const sumarCantidad = (e) => {
        e.preventDefault();
        if (cantidad < maxCantidad) {
            setCantidad(cantidad + 1);
            onCantidadChange && onCantidadChange(cantidad + 1);
        }
    };

    return (
        <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
            <div className="flex items-center gap-x-1.5">
                <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={restarCantidad}
                    disabled={cantidad <= 1}
                    data-hs-input-number-decrement
                >
                    <FaMinus />
                </button>
                <input
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                    type="text"
                    value={cantidad}
                    onChange={handleInputChange}
                    min={1}
                    data-hs-input-number-input
                    {...props}
                />
                <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={sumarCantidad}
                    disabled={cantidad >= maxCantidad}
                    data-hs-input-number-increment
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
}

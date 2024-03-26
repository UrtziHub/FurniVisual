import {useState} from "react";
import {FaMinus, FaPlus} from "react-icons/fa";

export default function QuantitySelector({
                                             initialQuantity,
                                             onQuantityChange,
                                             maxQuantity = 10,
                                             ...props
                                         }) {
    // State variable for the quantity. It is initialized with the initialQuantity or 1 if initialQuantity is not provided.
    const [quantity, setQuantity] = useState(initialQuantity || 1);

    // Handler for decreasing the quantity. It prevents the default event action, then checks if the quantity is greater
    // than 1. If it is, it decreases the quantity by 1 and calls the onQuantityChange function with the new quantity.
    const decreaseQuantity = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange && onQuantityChange(quantity - 1);
        }
    };

    // Handler for changing the quantity. It gets the input value and converts it to a number. If the input value is a
    // number, and it is less than or equal to the maxQuantity, it sets the quantity to the input value. If the input
    // value is greater than the maxQuantity, it sets the quantity to the maxQuantity. In both cases, it then calls the
    // onQuantityChange function with the new quantity.
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = parseInt(inputValue, 10);

        if (!isNaN(numericValue)) {
            if (numericValue <= maxQuantity) {
                setQuantity(numericValue);
                onQuantityChange && onQuantityChange(numericValue);
            } else {
                setQuantity(maxQuantity);
                onQuantityChange && onQuantityChange(maxQuantity);
            }
        }
    };

    // Handler for increasing the quantity. It prevents the default event action, then checks if the quantity is less
    // than the maxQuantity. If it is, it increases the quantity by 1 and calls the onQuantityChange function with the
    // new quantity.
    const increaseQuantity = (e) => {
        e.preventDefault();
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
            onQuantityChange && onQuantityChange(quantity + 1);
        }
    };

    return (
        <div
            className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
            data-hs-input-number>
            <div className="flex items-center gap-x-1.5">
                <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    data-hs-input-number-decrement
                >
                    <FaMinus/>
                </button>
                <input
                    className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                    type="text"
                    value={quantity}
                    onChange={handleInputChange}
                    min={1}
                    data-hs-input-number-input
                    {...props}
                />
                <button
                    type="button"
                    className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={increaseQuantity}
                    disabled={quantity >= maxQuantity}
                    data-hs-input-number-increment
                >
                    <FaPlus/>
                </button>
            </div>
        </div>
    );
}

import { useState } from "react";
import TextInput from "./TextInput";

const ProductTable = ({ data,thead }) => {
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        // Handle checkbox changes
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between">
                {/* Dropdown button */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Last 30 days
                    </button>
                </div>
                {/* Search input */}

                <TextInput
                    type="text"
                    value={search}
                    onChange={handleSearchChange}
                    placeholder="Search for items"
                />
            </div>
            {/* Table */}
            <div className="relative overflow-x-auto shadow-md rounded-lg border">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {/* Table header */}
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={handleCheckboxChange}
                            />
                        </th>
                        {thead.map((name,index)=>(
                            <th key={index} scope="col" className="px-6 py-3">{name}</th>
                        ))}
                        {/* Other table headers */}
                    </tr>
                </thead>
                {/* Table body */}
                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                            <td className="w-4 p-4">
                                <input
                                    id={`checkbox-table-search-${item.id}`}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    onChange={handleCheckboxChange}
                                />
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <img src={`/storage/products/${item.image}`} alt={item.name} />
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.shortDescription}
                            </td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.fullDescription}
                            </td>
                            {/* Other table cells */}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ProductTable;

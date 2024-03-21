import { useState } from "react";
import TextInput from "./TextInput";
import { router, useForm } from "@inertiajs/react";
import Toggle from "./Toggle";

const UserTable = ({ auth, data, thead, success }) => {
    const [search, setSearch] = useState("");
    const { delete: handleDelete } = useForm();
    const [checkedItems, setCheckedItems] = useState({});

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleCheckboxChange = (e) => {
        // Handle checkbox changes
    };

    const handleToggleChange = (item) => {
        const newIsAdmin = !item.is_admin;
        router.post(route("changeStatus", { user: item }), { is_admin: newIsAdmin })
    };

    return (
        <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between">
                {/* Dropdown button */}
                <div>
                    <button
                        type="button"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2"
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
            <div
                id="myScrollableSection"
                className="relative overflow-x-auto shadow-md rounded-lg border h-[600px]"
            >
                <table className="w-full text-sm text-left text-gray-500">
                    {/* Table header */}
                    <thead className="text-xs uppercase bg-black text-white sticky top-0">
                        <tr>
                            {/* <th scope="col" className="p-4">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                onChange={handleCheckboxChange}
                            />
                        </th> */}
                            {thead.map((name, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="px-6 py-3"
                                >
                                    {name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                        {data.map((item) => (
                            <tr
                                key={item.id}
                                className={`border-b hover:bg-gray-50 ${
                                    item.id % 2 === 0
                                        ? "bg-gray-100"
                                        : "bg-white"
                                }`}
                            >
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    <div className="flex gap-4 font-bold">
                                        <Toggle
                                            initialChecked={item.is_admin}
                                            value={item}
                                            onChange={() =>
                                                handleToggleChange(item)
                                            }
                                        ></Toggle>
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.email}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {item.phone}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
{
    /* <td className="w-4 p-4">
    <input
        id={`checkbox-table-search-${item.id}`}
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        onChange={handleCheckboxChange}
    />
</td> */
}

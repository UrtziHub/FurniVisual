import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import PageLayout from "@/Layouts/PageLayout";
import { useForm } from "@inertiajs/react";

export default function ProductCreate({ auth, categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        shortDescription: "",
        fullDescription: "",
        image: null,
        gallery: [],
        category: categories[0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData((prevData) => ({
            ...prevData,
            image: file,
        }));
    };

    const handleGalleryChange = (e) => {
        const files = e.target.files;
        const galleryArray = Array.from(files);
        setData((prevData) => ({
            ...prevData,
            gallery: galleryArray,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("admin.product.store"))
    };

    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="mx-4 xl:mx-64 py-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-md px-6 py-4 shadow-xl"
                >
                    <h1 className="font-bold text-xl mb-2">Add New Product</h1>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Name:
                        </label>
                        <TextInput
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="price"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Price:
                        </label>
                        <TextInput
                            type="number"
                            id="price"
                            name="price"
                            value={data.price}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <InputError message={errors.price} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="shortDescription"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Short Description:
                        </label>
                        <TextArea
                            id="shortDescription"
                            name="shortDescription"
                            value={data.shortDescription}
                            onChange={handleChange}
                            rows="4"
                            className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        ></TextArea>
                        <InputError
                            message={errors.shortDescription}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="fullDescription"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Full Description:
                        </label>
                        <TextArea
                            id="fullDescription"
                            name="fullDescription"
                            value={data.fullDescription}
                            onChange={handleChange}
                            rows="6"
                            className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        ></TextArea>
                        <InputError
                            message={errors.fullDescription}
                            className="mt-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="image"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Image:
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                        <InputError message={errors.image} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="gallery"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Gallery (multiple files):
                        </label>
                        <input
                            type="file"
                            id="gallery"
                            name="gallery"
                            onChange={handleGalleryChange}
                            accept="image/*"
                            multiple
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <InputError message={errors.gallery} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="gallery"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Categories:
                        </label>

                        <select 
                        name="category" 
                        id="category"
                        onChange={handleChange}
                        value={data.category}
                        >
                            {categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={processing}
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </PageLayout>
    );
}

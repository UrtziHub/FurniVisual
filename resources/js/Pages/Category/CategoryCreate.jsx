import PageLayout from "@/Layouts/PageLayout";
import {useForm} from "@inertiajs/react";

export default function CategoryCreate({ auth }) {
    const {data, setData, post} = useForm({
        name: '',
        description: '',
        image: null,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', data);
        post(route("category.store"))
        // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor.


        // También puedes reiniciar el estado del formulario después de enviar los datos.
        setData({
            name: '',
            description: '',
            image: null,
        });
    };

    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <div className="mx-4 xl:mx-64 py-4">
                <form onSubmit={handleSubmit} className="bg-white rounded-md px-6 py-4 shadow-xl">
                    <h1 className="font-bold text-xl mb-2">Add New Category</h1>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                            Description:
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleChange}
                            rows="4"
                            className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
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
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Category
                    </button>
                </form>
            </div>
        </PageLayout>
    );
}
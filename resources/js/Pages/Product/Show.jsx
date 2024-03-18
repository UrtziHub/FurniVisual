import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import PageLayout from "@/Layouts/PageLayout";
import { useForm } from "@inertiajs/react";
import { IoCalendarOutline } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Show({ auth, product }) {
    const { data, setData, post, processing, errors } = useForm({
        product_id: product.id,
        images: [],
        products_number: 1,
        prespective: 1,
        model: [],
        deadline: null,
        information: "",
    });

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleImagesChange = (event) => {
        setData("images", Array.from(event.target.files));
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("cart.store"));
    };
    return (
        <PageLayout user={auth.user}>
            <section className="flex flex-col lg:flex-row py-8 lg:px-32 px-8 bg-gray-100">
                <div className="flex-1 bg-white p-4">
                    <Carousel
                        showArrows={false}
                        showStatus={false}
                        showThumbs={true}
                        showIndicators={false}
                        swipeable={true}
                    >
                        {product.gallery.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={`/storage/products/${image}`}
                                    alt={`product-${index}`}
                                    className="rounded-md"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="flex-1 text-lg flex flex-col gap-2 bg-white p-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <h1 className="text-2xl">{product.price}$</h1>
                    <div>
                        <h1 className="font-semibold">Description: </h1>
                        <p>{product.full_description}</p>
                    </div>
                    <form onSubmit={submit} className="flex flex-col gap-2 ">
                        <div>
                            <h1 className="font-semibold">
                                Enter number of products{" "}
                                <span className="text-red-500">*</span>
                            </h1>
                            <TextInput
                                type="number"
                                name="products_number"
                                value={data.products_number}
                                id="products_number"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                            <InputError
                                message={errors.products_number}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                (enter the number of products you want to
                                include in the arrangement (you can add several
                                product variants to one arrangement/view))
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Enter number of products{" "}
                                <span className="text-red-500">*</span>
                            </h1>
                            <TextInput
                                type="number"
                                name="prespective"
                                value={data.prespective}
                                id="prespective"
                                onChange={handleOnChange}
                            />
                            <InputError
                                message={errors.prespective}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                (enter the number of visualizations you choose)
                                When you choose the number of visualizations
                                also choose the number of the visualization you
                                want us to use (please only choose as many
                                visualizations as there are images on the
                                product)
                            </p>
                        </div>
                        <div>
                            <h1 className="font-bold">
                                Enter number of products{" "}
                                <span className="text-red-500">*</span>
                            </h1>
                            <div className="flex items-center gap-2 uppercase text-base">
                                <TextInput
                                    type="radio"
                                    name="model"
                                    id=""
                                    value={true}
                                />
                                yes
                                <TextInput
                                    type="radio"
                                    name="model"
                                    id=""
                                    value={false}
                                />
                                no
                            </div>
                            <InputError
                                message={errors.model}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                (Mark YES if you have your own 3D model of the
                                product, mark NO if you do not have a 3D model.
                                NOTE: If you do not have a model, please send
                                photos, drawings, design or reference.)
                            </p>
                        </div>
                        <div>
                            <p className="font-bold">I have a deadline</p>
                            <div className="flex items-center space-x-2">
                                <label
                                    htmlFor="deadline"
                                    className="text-gray-600"
                                >
                                    <IoCalendarOutline className="text-xl" />
                                </label>
                                <TextInput
                                    type="date"
                                    name="deadline"
                                    onChange={handleOnChange}
                                    id="deadline"
                                    className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <InputError
                                message={errors.deadline}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                (We do not work on weekends.)
                            </p>
                        </div>
                        <div>
                            <p className="font-bold">
                                Description of the product
                            </p>
                            <TextArea
                               name="information"
                               value={data.information}
                               id="information"
                               onChange={handleOnChange}
                                rows="10"
                                className="border-gray-300 rounded-md w-full"
                                placeholder="Explain your idea of product..."
                            ></TextArea>
                             <InputError
                                message={errors.information}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <TextInput
                                type="file"
                                name="images"
                                id="images"
                                onChange={handleImagesChange}
                                className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-black file:text-white
                                hover:file:bg-neutral-800 file:cursor-pointer
                                "
                                multiple={true}
                            />
                             <InputError
                                message={errors.images}
                                className="mt-2"
                            />
                        </div>
                        <p>Category:</p>
                        <button>Add to cart</button>
                    </form>
                </div>
            </section>
            <section className="lg:px-32 px-8 bg-white">
                <h1>asdasd</h1>
            </section>
        </PageLayout>
    );
}

import CantidadSelector from "@/Components/CantidadSelector";
import InputError from "@/Components/InputError";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import PageLayout from "@/Layouts/PageLayout";
import {useForm} from "@inertiajs/react";
import {useEffect, useState} from "react";
import {IoCalendarOutline} from "react-icons/io5";
import {Carousel} from "react-responsive-carousel";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReviewForm from "@/Components/ReviewForm";

export default function Show({auth, product, reviews}) {
    console.log(reviews);
    const [hasModel, setHasModel] = useState(false);

    const {data, setData, post, processing, errors} = useForm({
        product_id: product.id,
        images: [],
        products_number: 1,
        perspective: 1,
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
    const handleModelChange = (event) => {
        setData("model", Array.from(event.target.files));
    };
    //Para cuando el usuario cambie el valor del modelo
    useEffect(() => {
        const updateModel = async () => {
            await setData("model", hasModel ? [] : null);
        };
        updateModel();
    }, [hasModel]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("cart.store"));
    };
    return (
        <PageLayout user={auth.user} headTitle={"Show"}>
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
                        <div className="mb-4">
                            <h1 className="font-semibold">
                                Upload samples:
                                <span className="text-red-500"> *</span>
                            </h1>
                            <input
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
                        <div className="mb-4">
                            <h1 className="font-semibold">
                                Enter number of furnitures:
                                <span className="text-red-500"> *</span>
                            </h1>

                            <CantidadSelector
                                value={data.products_number}
                                cantidadInicial={1}
                                onCantidadChange={(number) =>
                                    setData("products_number", number)
                                }
                            ></CantidadSelector>
                            <InputError
                                message={errors.products_number}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                Enter number of products you want to include in
                                the arrangement (you can add several product
                                variants to one arrangement)
                            </p>
                        </div>
                        <div className="mb-4">
                            <h1 className="font-bold">
                                Enter number of prespectives:
                                <span className="text-red-500"> *</span>
                            </h1>
                            <CantidadSelector
                                value={data.perspective}
                                cantidadInicial={1}
                                maxCantidad={product.gallery.length}
                                onCantidadChange={(number) =>
                                    setData("perspective", number)
                                }
                            ></CantidadSelector>
                            <InputError
                                message={errors.perspective}
                                className="mt-2"
                            />
                            <p className="text-base text-gray-600">
                                Enter the number of scenes you want
                            </p>
                        </div>
                        <div className="mb-4">
                            <h1 className="font-bold">3D Model:</h1>
                            <div className="flex items-center gap-2 uppercase text-base">
                                <input
                                    type="radio"
                                    name="radio"
                                    id=""
                                    value={false}
                                    onChange={() => setHasModel(true)}
                                />
                                yes
                                <input
                                    type="radio"
                                    name="radio"
                                    id=""
                                    value={true}
                                    onChange={() => setHasModel(false)}
                                />
                                no
                            </div>
                            <InputError
                                message={errors.model}
                                className="mt-2"
                            />
                            {hasModel !== null && hasModel === true && (
                                <div>
                                    <label
                                        htmlFor="fileInput"
                                        className="block uppercase text-base mt-2"
                                    >
                                        Upload File:
                                    </label>
                                    <input
                                        type="file"
                                        id="model"
                                        name="model"
                                        onChange={handleModelChange}
                                        multiple
                                        className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-black file:text-white
                                        hover:file:bg-neutral-800 file:cursor-pointer
                                        "
                                    />
                                </div>
                            )}
                            <p className="text-base text-gray-600">
                                Mark YES if you have your own 3D model of the
                                product, mark NO if you do not have a 3D model.
                                NOTE: If you do not have a model, please send
                                photos, drawings, design or reference.
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">I have a deadline:</p>
                            <div className="flex items-center space-x-2">
                                <label
                                    htmlFor="deadline"
                                    className="text-gray-600"
                                >
                                    <IoCalendarOutline className="text-xl"/>
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
                                Enter your deadline. NOTE: we do not work on
                                weekends
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="font-bold">
                                Any additional information:
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
                        <p>Category: {product.category.name}</p>
                        <div className="flex justify-center">
                            <button
                                className="bg-black font-bold flex items-center gap-2 text-white px-8 py-2 rounded-xl text-center">
                                Add to cart
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="lg:px-32 px-8 bg-white py-8 flex">
                <div className="w-1/2 pr-4">
                    <h2 className="text-2xl font-bold mb-2">Description</h2>
                    <hr className="mb-4"/>
                    <p className="text-lg">{product.full_description}</p>
                    <h2 className="text-2xl font-bold mb-2">Gallery</h2>
                    <div className="flex flex-wrap">
                        {product.gallery.map((image, index) => (
                            <div key={index} className="w-1/2 p-2">
                                <img
                                    src={`/storage/products/${image}`}
                                    alt={`product-${index}`}
                                    className="rounded-md w-full object-cover cursor-pointer"
                                    onClick={() =>
                                        openModal(`/storage/products/${image}`)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/2 pl-4">
                    <h2 className="text-2xl font-bold mb-2">Make a review</h2>
                    <hr className="mb-4"/>
                    <ReviewForm
                        product={product}
                        user={auth.user}/>
                </div>
            </section>
            {reviews.length > 0 && (
                <section className="lg:px-32 px-8 bg-white py-8">
                    <h2 className="text-2xl font-bold mb-2">Reviews</h2>
                    <hr className="mb-4"/>
                    {reviews.map((review, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <h3 className="text-lg font-bold">{review.user.name}</h3>
                            <p>{review.comment}</p>
                            <p>{review.rate}</p>
                        </div>
                    ))}
                </section>
            )}

            <div className="items-center justify-center text-center border-0">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="h-screen w-1/2 flex items-center justify-center mx-auto border-0"
                >
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-auto"
                    />
                </Modal>
            </div>
        </PageLayout>
    );
}

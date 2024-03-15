import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import PageLayout from "@/Layouts/PageLayout";
import {FaCalendarAlt} from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

export default function Catalogue({ auth, categories }) {
    console.log(categories);
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <section
                style={{
                    backgroundImage: "url('/images/categories/fireplaces.jpg')",
                }}
                className="text-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-10 bg-[center_bottom_12rem] bg-cover bg-fixed bg-no-repeat"
            >
                <h1 className="text-6xl font-bold mb-10 underline underline-offset-8">
                    Contact Us
                </h1>
                <p className="text-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-[500px] font-bold">
                    Your comfort and satisfaction are our priority. If you have
                    any questions, concerns or need support, please do not
                    hesitate to contact us. We are here to help you!
                </p>
            </section>
            <section className="flex flex-col md:flex-row justify-around p-10">
                <div className="flex flex-col gap-7 justify-start px-4 md:px-36">
                    <div className="flex flex-row gap-7 justify-start mt-16">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaLocationDot className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        <p className="font-bold text-3xl text-left">
                            ul. Szybisko 26 98 Krakow
                        </p>
                    </div>
                    <div className="flex flex-row gap-7 justify-start">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaCalendarAlt  className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        <p className="font-bold text-3xl">
                            Monday – Friday 8:00am – 4:00pm
                        </p>
                    </div>
                    <div className="flex flex-row gap-7 justify-start">
                        <h2 className="text-2xl font-bold mb-2">
                            <FaPhoneVolume  className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        <p className="font-bold text-3xl">
                            TEL: (+48)504-999-310
                        </p>
                    </div>
                    <div className="flex flex-row gap-7 justify-start">
                        <h2 className="text-2xl font-bold mb-2">
                            <MdEmail className="inline-block text-3xl mb-4 scale-150" />
                        </h2>
                        <p className="font-bold text-3xl">
                            office@furnivisual.com
                        </p>
                    </div>
                </div>
                <div className="mt-10 md:mt-0">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0875020232234!2d19.94021817719616!3d49.99096892034027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471642d601218f91%3A0xda4bfff7795cee47!2sSzybisko%2026%2C%2030-698%20Krak%C3%B3w!5e0!3m2!1ses!2spl!4v1710500764030!5m2!1ses!2spl"
                        width="600"
                        height="450"
                        className="rounded-lg border-2 border-gray-200"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
            <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient mx-auto"
                            style={{
                                height: "3  px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
            <section className="mx-36 ">
                <form className="flex flex-col gap-5 justify-center px-4 md:px-36 py-10">
                    <h1 className="text-4xl font-bold mb-10 underline underline-offset-8">
                        Contact Form
                    </h1>
                    <div className="flex flex-row gap-5 ">
                        <div className="flex flex-col gap-5 w-full">
                            <label
                                htmlFor="name"
                                className="text-2xl font-bold"
                            >
                                Name
                            </label>
                            <TextInput
                                type="text"
                                id="name"
                                name="name"
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-5 w-full">
                            <label
                                htmlFor="email"
                                className="text-2xl font-bold"
                            >
                                Email
                            </label>
                            <TextInput
                                type="email"
                                id="email"
                                name="email"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="message" className="text-2xl font-bold">
                            Message
                        </label>
                        <TextArea
                            id="message"
                            name="message"
                            className="w-full"
                        ></TextArea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-60  text-center justify-center mx-auto"
                    >
                        Send
                    </button>
                </form>
            </section>
        </PageLayout>
    );
}

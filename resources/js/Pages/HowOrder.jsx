import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PageLayout from "@/Layouts/PageLayout";
import { Head, Link } from "@inertiajs/react";
import {
    FaUserAlt,
    FaRoad,
    FaCreditCard,
    FaShoppingCart,
} from "react-icons/fa";
import { IoCart, IoExit, IoMail } from "react-icons/io5";

export default function Dashboard(props) {
    return (
        <PageLayout
            user={props.auth.user}
            errors={props.errors}
        >
            <section className=" mx-8 md:mx-32 lg:mx-52 xl:mx-80">
                <h1 className="text-4xl md:text-5xl font-bold text-center py-4">
                    How To Order?
                </h1>
                <div className="flex justify-between items-center border-b pb-4 pt-3 mb-4">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold">
                            Choose Your Style
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient text-right"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p className="text-xl pr-10">
                            We invite you to discover our diverse designs and
                            inspirations. Choose the style that inspires you the
                            most or create your own design.
                        </p>
                    </div>
                    <div className="w-1/4 mx-4">
                        <img src="images/01.png" alt="Imagen" />
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="w-1/4">
                        <img src="images/02.png" alt="Imagen" />
                    </div>
                    <div className="w-3/4 text-xl text-right lg:text-center">
                        <h2 className="text-3xl font-bold">
                            Customize to Your Needs
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient mx-auto"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p>
                            Now you can personalize the arrangement of your
                            choice.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 pt-3 mb-4">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold">
                            Know the cost and lead time
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient text-right"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p className="text-xl pr-10">
                            We invite you to discover our diverse designs and
                            inspirations. Choose the style that inspires you the
                            most or create your own design.
                        </p>
                    </div>
                    <div className="w-1/4 mx-4">
                        <img src="images/03.png" alt="Imagen" />
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="w-1/4">
                        <img src="images/04.png" alt="Imagen" />
                    </div>
                    <div className="w-3/4 text-xl text-right">
                        <h2 className="text-3xl font-bold">
                            Confirm the order
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient ml-auto"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p>
                            By accepting the quote, you will proceed to the
                            payment by issuing a PROFORMA invoice. This is also
                            the moment of accepting the terms and conditions of
                            the order.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 pt-3 mb-4">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold">
                            Start of production{" "}
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient text-right"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p className="text-xl pr-10">
                            Once your payment is approved, we proceed to process
                            your order.
                        </p>
                    </div>
                    <div className="w-1/4 mx-4">
                        <img src="images/05.png" alt="Imagen" />
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <div className="w-1/4">
                        <img src="images/06.png" alt="Imagen" />
                    </div>

                    <div className="w-3/4 text-xl text-right">
                        <h2 className="text-3xl font-bold">
                            See the preview of the project{" "}
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient ml-auto"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p>
                            You will get a “Prevka” of the visualization. If you
                            have any suggestions or changes, now you can report
                            them.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 pt-3 mb-4">
                    <div className="w-3/4">
                        <h2 className="text-3xl font-bold">
                            Confirm the final design
                        </h2>
                        <hr
                            class="w-3/4 md:w-1/2 lg:w-1/3 my-4 gradient text-right"
                            style={{
                                height: "9px",
                                background:
                                    "linear-gradient(to right, black, #FFB900)",
                            }}
                        />
                        <p className="text-xl pr-10">
                            After making any revisions, you accept the final
                            design. This is the moment when we issue a VAT
                            invoice confirming your order.
                        </p>
                        <p className="text-xl pr-10">
                            With these steps, we can provide you with
                            comprehensive service at every stage of your order,
                            making sure you get the furniture exactly as you
                            expect. We are ready to help you create the perfect
                            interior!
                        </p>
                    </div>
                    <div className="w-1/4 mx-4">
                        <img src="images/07.png" alt="Imagen" />
                    </div>
                </div>
                <div className="flex justify-between items-center border-b pb-4 pt-3 mt-7 mb-4">
                    <div>
                        <p className="text-xl pr-10 text-center  ">
                            With these steps, we can provide you with
                            comprehensive service at every stage of your order,
                            making sure you get the furniture exactly as you
                            expect. We are ready to help you create the perfect
                            interior!
                        </p>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}

import PageLayout from "@/Layouts/PageLayout";

export default function Catalogue({ auth }) {
    return (
        <PageLayout user={auth.user} className="bg-slate-100">
            <section
                style={{ backgroundImage: "url('/images/catalogue.webp')" }}
                className="text-white px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-10 bg-center"
            >
                <h1 className="text-6xl font-bold mb-10 underline underline-offset-8">
                    Catalogue
                </h1>
                <p className="text-lg w-[500px]">
                    Our catalog offers a wide selection that allows you to
                    tailor the interior to your individual needs. We are
                    committed to ensuring that you find something in our
                    proposals that will perfectly meet your expectations.
                </p>
            </section>
            <section className=" mx-4 xl:mx-64 py-4 grid gap-4 md:grid-cols-2 grid-cols-1 md:text-nowrap">
                <div className="flex flex-col w-full">
                    <button className="bg-black text-white text-2xl px-6 py-2 rounded-t-xl">
                        Tables and Chairs
                    </button>
                    <div className="">
                        <img
                            src="/images/catalogue.webp"
                            alt=""
                            className="rounded-b-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="">
                        <img
                            src="/images/catalogue.webp"
                            alt=""
                            className="rounded-xl relative z-10"
                        />
                        <div className="relative bg-white rounded-b-xl -top-2 shadow-xl px-6 py-4">
                            <h1 className="text-2xl font-bold">
                                Tables and Chairs
                            </h1>
                            <p>100$</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="/images/catalogue.webp"
                        alt=""
                        className="rounded-t-md"
                    />
                    <div className="bg-white rounded-b-md px-6 py-4 shadow-xl">
                        <h1 class="font-bold text-xl mb-2">
                            Tables And Chairs
                        </h1>
                        <p class="text-gray-700 text-wrap">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptatibus quia, nulla! Maiores et
                            perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="bg-white p-3 rounded-xl flex gap-4">
                    <div className="w-3/4">
                        <img
                            src="/images/catalogue.webp"
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex items-center">
                        <h1 class="text-md font-bold">Tables And Chairs</h1>
                    </div>
                </div> <div className="bg-white p-3 rounded-xl flex gap-4">
                    <div className="w-3/4">
                        <img
                            src="/images/catalogue.webp"
                            alt=""
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex items-center">
                        <h1 class="text-md font-bold">Tables And Chairs</h1>
                    </div>
                </div>
               
            </section>
            <h1 className="text-xl">
                Catalogue
                <a href="/" className="underline">
                    go home
                </a>
            </h1>
        </PageLayout>
    );
}

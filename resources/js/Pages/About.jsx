import PageLayout from "@/Layouts/PageLayout";

export default function About({auth}) {
    return (
        <PageLayout user={auth.user}>
            <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-center mt-8 sm:mt-32">About Us</h1>
            <div className="flex flex-col items-center gap-8 sm:gap-20 mx-4 sm:mx-20 md:mx-8">
                <div className="flex flex-col md:flex-row mx-4 sm:mx-8 rounded-lg bg-gray-100 ">
                    <div
                        className="w-full md:w-1/2 p-4 sm:p-8 rounded-t-lg md:rounded-l-lg shadow-lg flex justify-center items-center">
                        <p className="text-sm sm:text-lg text-gray-700">
                            Welcome to our Graphic Studio nestled in the picturesque city of Kraków. We specialize in
                            turning your ideas into stunning visualizations, focusing on interiors, furniture, and
                            equipment. Our team is dedicated to utilizing 3D modeling and animations to breathe life
                            into pre-existing concepts.
                            At our studio, we are not artists in the traditional sense, nor do we consider ourselves
                            designers or architects. Instead, we take pride in being meticulous craftsmen who transform
                            ready-made projects provided by our clients into captivating visual stories. Our role is to
                            elevate the materials handed to us, infusing them with life and vibrancy through our
                            technical expertise.
                        </p>
                    </div>
                    <img src="images/image1.jpg" alt="Company Logo"
                         className="w-full md:w-1/2 md:rounded-r-lg shadow-lg"/>
                </div>
                <div className="flex flex-col-reverse md:flex-row mx-4 sm:mx-8">
                    <img src="images/image2.jpg" alt="Company Logo"
                         className="w-full md:w-1/2 md:rounded-l-lg shadow-lg"/>
                    <div
                        className="w-full md:w-1/2 bg-gray-100 p-4 sm:p-8 rounded-b-lg md:rounded-r-lg shadow-lg flex justify-center items-center ">
                        <p className="text-sm sm:text-lg text-gray-700">
                            Punctuality is our promise. We understand the importance of deadlines, and our commitment to
                            delivering on time is unwavering. The quality of our work is a reflection of our dedication
                            to excellence. Each visualization, animation, and project we undertake is executed with
                            precision and an unwavering focus on high standards.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-center items-center bg-gray-100 mx-4 sm:mx-8 md:mx-40 rounded-t-lg shadow-lg pb-4 sm:pb-10">
                    <h1 className="pt-4 sm:pt-10 text-2xl sm:text-3xl">Our Team</h1>
                    <p className="px-2 sm:px-4 md:px-52 py-4 sm:py-10 text-center sm:text-lx">Our Graphic Design
                        Team, although not traditional artists, is a group of skilled professionals dedicated to
                        enhancing your projects. We take pride in our after-sales support, ensuring your satisfaction
                        with the final result.
                        Step into our studio, where we don’t just work on projects; we transform them into visual
                        masterpieces. At our Graphic Studio, your concepts find a home where technical prowess meets
                        reliability, and client-provided materials evolve into captivating visual narratives. Welcome to
                        a space where quality, punctuality, and client satisfaction are our guiding principles.</p>
                    <div className="flex items-center justify-center w-full md:w-{200px}">
                        <img src="images/group.png" alt="" className="rounded-b-lg w-40"/>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

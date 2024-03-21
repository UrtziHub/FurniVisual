import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { Head } from '@inertiajs/react';
import ReactCompareImage from 'react-compare-image';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Welcome({props, auth}) {
    return (
        <>
        <Head title="Home page"></Head>
            <Header user={auth.user}></Header>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <ReactCompareImage leftImage="images/compare1.webp" rightImage="images/compare2.jpg"/>
            </section>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <img className="w-full h-auto" src="images/order-setup-jpg.webp" alt="order"/>
                </div>
            </section>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img className="w-full h-auto" src="images/image1.jpg" alt=""/>
                    </div>
                    <div>
                        <img className="w-full h-auto" src="images/compare1.webp" alt=""/>
                    </div>
                    <div>
                        <img className="w-full h-auto" src="images/compare2.jpg" alt=""/>
                    </div>
                </Carousel>
            </section>
            <Footer></Footer>
        </>
    );
}
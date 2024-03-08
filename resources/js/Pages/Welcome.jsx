import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import ReactCompareImage from 'react-compare-image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Welcome(props) {
    return (
        <>
            <Header></Header>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <ReactCompareImage leftImage="images/compare1.webp" rightImage="images/compare2.jpg"/>
            </section>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <img src="images/order-setup-jpg.webp" alt="order" />
            </section>
            <section className="flex justify-center items-center py-10 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64">
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <img src="images/logo.png" alt=""/>
                    </div>
                    <div>
                        <img src="images/compare1.webp" alt=""/>
                    </div>
                    <div>
                        <img src="images/compare2.jpg" alt=""/>
                    </div>
                </Carousel>
            </section>
            <Footer></Footer>
        </>
    );
}
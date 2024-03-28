import PageLayout from "@/Layouts/PageLayout";
import {Link} from "@inertiajs/react";
import CategoryTable from "@/Components/CategoryTable";
import "../../../css/scroll.css"

export default function Category({auth, categories}) {
    if (!categories || categories.length === 0) {
        return (
            <PageLayout user={auth.user} className="bg-slate-100" headTitle={"Category"}>
            <div className="mx-4 xl:mx-64 py-4 flex flex-col justify-center items-center" style={{ height: '400px' }}>
                <p className="text-center text-lg md:text-2xl mb-8">No categories found.</p>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="100pt" height="100pt" viewBox="0 0 512.000000 512.000000"
                     preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                       fill="#333333" stroke="none">
                        <path d="M593 5102 c-100 -35 -171 -115 -193 -216 -8 -36 -10 -508 -8 -1626 l3 -1575 21 -46 c28 -60 87 -119 150 -150 47 -23 59 -24 306 -29 l257 -5 -459 -430 c-252 -236 -470 -448 -485 -470 -62 -96 -71 -231 -22 -338 92 -201 346 -279 521 -159 33 23 269 267 611 632 306 327 562 599 569 604 9 6 23 2 43 -12 96 -68 313 -155 464 -186 454 -93 972 35 1285 317 l51 46 529 3 529 3 57 28 c69 34 121 91 148 164 20 53 20 76 20 1633 0 1557 0 1580 -20 1633 -27 73 -79 130 -148 164 l-57 28 -2060 2 c-1957 2 -2063 2 -2112 -15z m4142 -194 c48 -22 55 -52 55 -228 l0 -160 -835 0 c-908 0 -877 2 -903 -55 -15 -33 -15 -57 0 -90 26 -57 -5 -55 903 -55 l835 0 0 -1296 0 -1296 -34 -34 -34 -34 -416 0 -415 0 56 83 c102 149 181 339 220 533 27 134 24 423 -5 560 -64 299 -201 559 -406 772 -214 222 -458 359 -759 424 -87 19 -133 22 -307 22 -174 0 -220 -3 -307 -22 -294 -64 -523 -190 -738 -406 -223 -224 -359 -476 -427 -790 -18 -84 -22 -133 -22 -291 0 -206 14 -299 70 -462 28 -82 110 -256 144 -303 11 -16 20 -32 20 -37 0 -5 -20 -25 -44 -46 l-45 -37 -341 0 -342 0 -34 34 -34 34 0 1296 0 1296 835 0 c625 0 841 3 860 12 29 13 55 55 55 88 0 33 -26 75 -55 88 -19 9 -235 12 -860 12 l-835 0 0 166 0 166 34 34 34 34 2026 0 c1549 0 2031 -3 2051 -12z m-1788 -1077 c282 -58 509 -182 693 -378 454 -486 454 -1300 -1 -1787 -211 -226 -500 -362 -845 -396 -645 -65 -1252 396 -1381 1047 -21 109 -24 355 -4 463 88 493 456 901 931 1032 190 53 410 59 607 19z m-1304 -2478 l-66 -74 -84 83 -84 83 73 67 73 67 77 -76 77 -76 -66 -74z m-293 -138 l84 -85 -50 -52 c-28 -29 -220 -234 -428 -455 -403 -431 -407 -434 -488 -419 -106 20 -169 137 -123 226 13 26 901 870 915 870 3 0 43 -38 90 -85z"/>
                        <path d="M2644 4509 c-25 -13 -54 -60 -54 -89 0 -51 49 -100 100 -100 51 0 100 49 100 99 0 73 -80 122 -146 90z"/>
                        <path d="M2305 3320 c-11 -4 -101 -90 -200 -189 -236 -237 -234 -207 -27 -414 l152 -152 -140 -140 c-146 -146 -176 -188 -165 -233 8 -34 338 -369 381 -388 17 -7 42 -10 55 -7 13 3 93 73 177 157 l152 151 153 -151 c83 -84 163 -154 176 -157 13 -3 35 -1 50 4 40 15 379 358 386 391 10 46 -19 87 -165 233 l-140 140 152 152 c207 208 210 176 -32 418 -115 115 -194 186 -210 190 -47 10 -83 -14 -228 -158 l-142 -141 -143 141 c-169 168 -185 178 -242 153z m185 -384 c147 -147 174 -165 228 -151 16 4 85 64 175 153 l147 146 87 -87 88 -87 -153 -153 c-133 -135 -152 -157 -152 -186 0 -18 5 -42 11 -54 6 -12 75 -86 152 -165 l142 -142 -87 -87 -88 -88 -153 153 c-151 149 -154 152 -197 152 -43 0 -46 -3 -197 -152 l-153 -153 -87 87 -87 87 152 155 c149 150 152 155 152 197 0 42 -3 46 -152 196 l-152 153 84 85 c47 47 87 85 89 85 3 0 71 -65 151 -144z"/>
                    </g>
                </svg>
            </div>
        </PageLayout>
        
        );
    }

    return (
        <PageLayout user={auth.user} className="bg-slate-100" headTitle={"Category"}>
            <div className="mx-4 xl:mx-64 py-4">
                <div className="text-9xl font-black font-mono text-center">
                    <span className="bg-clip-text text-transparent bg-center bg-[url('/images/catalogue.webp')]">
                        Categories
                    </span>
                </div>
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    <Link href={route("admin.category.create")}>Create Category</Link>
                </button>
                <section id="myScrollableSection">
                    <CategoryTable
                        data={categories}
                        thead={["action", "name", "description", "image"]}
                    ></CategoryTable>
                </section>
            </div>
        </PageLayout>
    );
}

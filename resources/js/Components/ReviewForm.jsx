import MainButton from "@/Components/MainButton";
import InputError from "@/Components/InputError";
import TextArea from "./TextArea";
import { useForm } from "@inertiajs/react";
import Rate from "@/Components/Rate";


export default function ReviewForm({product,user}) {
    const { data, setData, post, processing, errors }  = useForm({
        product_id: product.id,
        user_id: user.id,
        comment: "",
        rate: ""
    })
    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };
    const handleRate = (rate) =>{
        setData('rate',rate)
    }
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("reviews.store"));
    };
    return (
        <form onSubmit={submit} className="flex flex-col gap-4">
            <div>
                <h3 className="text-xl font-semibold">
                    Review for the product: {product.name}
                </h3>
            </div>
            <div>
                <TextArea
                    placeholder="Enter the comment"
                    className="w-full p-2 border rounded"
                    name="comment"
                    value={data.comment}
                    onChange={handleOnChange}
                />
                <InputError/>
            </div>
            <div>
                <Rate totalStars={5} name="rate" onChange={handleRate}/>
            </div>
            <div>
                <MainButton type="submit" disabled={processing} className="py-2 px-4 rounded text-white font-bold">
                    Send message
                </MainButton>
            </div>
        </form>
    );
}

import { IProduct } from "../interfaces";
import { numberWithCommas, txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";

interface IProps {
    product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
    const { title, description, imageURL, price, colors, category } = product;

    /* ------- RENDER -------  */
    const renderProductColors = colors.map(color => <CircleColor key={color} color={color} />);

    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
            <Image imageURL={imageURL} alt={"Product Name"} className="rounded-md h-52 w-full lg:object-cover" />

            <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
            <p className="text-sm text-gray-500 break-words">{txtSlicer(description, 30)}</p>

            <div className="flex items-center flex-wrap space-x-1">
                {!colors.length ? (
                    <p className="min-h-[20px]">Not available colors!</p>
                ) : (
                    renderProductColors
                )}
            </div>

            <div className="flex items-center justify-between">
                <span className="text-lg text-indigo-600 font-semibold">
                    ${numberWithCommas(price.toString())}
                </span>
                <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold">{category.name}</span>
                    {/* <Image
                        imageURL={category.imageURL}
                        alt={category.name}
                        className="w-10 h-10 rounded-full object-bottom"
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

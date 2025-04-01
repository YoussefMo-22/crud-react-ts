import { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/functions"
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
    // Define any props you need here
    product: IProduct
}
const ProductCard = ({product}:IProps) => {
    return (
        <>
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
            <Image imageUrl={product.imageUrl} altText="product" className="rounded-md mb-2"/>
            <h3>{product.title}</h3>
            <p>{txtSlicer(product.description,50)}</p>
            <div className="flex items-center my-4 space-x-2">
                <span className="w-5 h-5 rounded-full cursor-pointer bg-indigo-600"/>
                <span className="w-5 h-5 rounded-full cursor-pointer bg-yellow-600"/>
                <span className="w-5 h-5 rounded-full cursor-pointer bg-red-600"/>
            </div>
            <div className="flex items-center justify-between">
            <span>${product.price}</span>
            <Image imageUrl={product.category.imageUrl} altText={product.category.name} className="w-10 h-10 rounded-full object-cover"/>
            </div>
            <div className="flex items-center justify-between my-4 space-x-2">
                <Button className="bg-indigo-700" width="w-full">EDIT</Button>
                <Button className="bg-red-700">DELETE</Button>
            </div>
        </div>
        </>
    )
}

export default ProductCard
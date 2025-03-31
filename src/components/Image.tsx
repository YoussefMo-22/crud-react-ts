interface IProps {
    // Define any props you need here
    imageUrl: string;
    altText: string;
    className?: string;
}
const Image = ({imageUrl,altText,className}:IProps) => {
    return (
        <img src={imageUrl} alt={altText} className={className} />
    )
}

export default Image
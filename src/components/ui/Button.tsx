interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    // Define any props you need here
    children: React.ReactNode;
    className?: string;
    width?: "w-full" | "w-fill";
}
const Button = ({children,className,width="w-full", ...rest}:IProps) => {
    return (
        <button className={`p-2 rounded-md text-white ${width} ${className}`} {...rest}>{children}</button>
    )
}

export default Button
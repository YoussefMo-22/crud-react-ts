interface IProps extends React.HTMLProps<HTMLSpanElement> {
    // Define any props you need here
    color:string;

}
const CircleColor = ({color,...rest}:IProps) => {
    return (
        <span className={`block w-5 h-5 rounded-full cursor-pointer`} style={{backgroundColor: color}} {...rest}/>
    )
}

export default CircleColor
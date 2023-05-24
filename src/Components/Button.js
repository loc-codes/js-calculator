
const Button = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.text)
    }

    return (
        <button onClick={handleClick}>
            <p>{props.text}</p>
        </button>
    )
}

export default Button
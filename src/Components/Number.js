
const Number = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.text)
        props.pressed(props.text)
    }

    return (
        <button onClick={handleClick}>
            <p>{props.text}</p>
        </button>
    )
}

export default Number

const Number = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.number)
        props.pressed(props.number, props.display)
    }

    return (
        <button onClick={handleClick}>
            <p>{props.number}</p>
        </button>
    )
}

export default Number
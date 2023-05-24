
const Operator = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.operator)
        props.pressed(props.operator)
    }

    return (
        <button onClick={handleClick}>
            <p>{props.operator}</p>
        </button>
    )
}

export default Operator
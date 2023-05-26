
const Operator = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.operator)
        props.pressed(props.operator)
    }

    return (
        <button id={props.id} onClick={handleClick}>{props.operator}</button>
    )
}

export default Operator

const Number = (props) => {
    const handleClick = () => {
        console.log('you clicked ' + props.number)
        props.pressed(props.number, props.display)
    }

    return (
        <button className="number button" id={props.id} onClick={handleClick}>{props.number}</button>
    )
}

export default Number
const Clear = (props) => {
    const handleClick = () => {
        console.log('you clicked AC')
        props.pressed()
    }

    return (
        <button className="button" id={props.id} onClick={handleClick}>AC</button>
    )
}

export default Clear
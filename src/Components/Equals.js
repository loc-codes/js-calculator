const Equals = (props) => {
    const handleClick = () => {
        console.log('you clicked =')
        props.pressed()
    }

    return (
        <button className="button" id={props.id} onClick={handleClick}>=</button>
    )
}

export default Equals
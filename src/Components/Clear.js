const Clear = (props) => {
    const handleClick = () => {
        console.log('you clicked AC')
        props.pressed()
    }

    return (
        <button onClick={handleClick}>
            <p>AC</p>
        </button>
    )
}

export default Clear
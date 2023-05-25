const Equals = (props) => {
    const handleClick = () => {
        console.log('you clicked =')
        props.pressed()
    }

    return (
        <button onClick={handleClick}>
            <p>=</p>
        </button>
    )
}

export default Equals
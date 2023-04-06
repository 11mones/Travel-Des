function Tours(props) {
    console.log(props);
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.image} alt={props.name + " place"} />
        </div>
    );
}

export default Tours;
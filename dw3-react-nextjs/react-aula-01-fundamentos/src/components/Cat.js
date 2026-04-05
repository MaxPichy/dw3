const Cat = (props) => {
    return(
        <>
            <p>O nome do gato é: {props.nome}</p>
            <p>A raça do gato é: {props.raca}</p>
            <p>A idade do gato é: {props.idade}</p>
            <p>O nome do humano do gato é: {props.humano}</p>
        </>
    );
}

export default Cat;
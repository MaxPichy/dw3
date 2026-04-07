const Dog = (props) => {
    return(
        <>
            <p>O nome do pet é: {props.nome}</p>
            <p>A raça do pet é: {props.raca}</p>
            <p>A idade do pet é: {props.idade}</p>
        </>
    );
}

export default Dog;
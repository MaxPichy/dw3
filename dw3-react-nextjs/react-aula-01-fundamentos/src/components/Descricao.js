const Descricao = (props) => {
    return(
        <>
            <p>A cidade do usuário é: {props.cidade}.</p>
            <p>A idade do usuário é: {props.idade} anos.</p>
        </>
    );
}

export default Descricao;
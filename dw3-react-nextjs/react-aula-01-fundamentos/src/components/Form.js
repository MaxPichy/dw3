import { useState } from "react";

const Form = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');

    // Criando a função que irá lidar com a submissão do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Aqui os dados serão enviados
        console.log(nome);
        console.log(sobrenome);
        console.log(email);

        // Aqui seria enviada uma requisição POST para API com as informações a serem cadastradas
    }

    return(
        <>
            <br />
            <h1>Formulário de cadastro: </h1>

            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Insira seu nome' value={nome}
                onChange={(event) => setNome(event.target.value)} />
                <input type="text" placeholder='Insira seu sobrenome'value={sobrenome}
                onChange={(event) => setSobrenome(event.target.value)} />
                <input type="text" placeholder='Insira seu email' value={email}
                onChange={(event) => setEmail(event.target.value)} />

                <button type='submit'>Enviar</button>
            </form>

            <br />

            {nome} <br />
            {sobrenome} <br />
            {email} <br />
        </>
    );
}

export default Form;
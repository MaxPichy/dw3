// Importando o Service
import gameService from "../services/gameService.js";
// Importando o ObjectId
import {ObjectId} from 'mongodb';

// Função para tratar a requisição de LISTAR os jogos
const getAllGames = async(req, res) => {
    try{
        const games = await gameService.getAll();
        res.status(200).json({games: games});
        // Cod. 200 (OK): Requisição feita com sucesso
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível listar os jogos.'})
    }
}

// Função para tratar a requisição de CADASTRAR um jogo
const createGame = async(req, res) => {
    try{
        // DESTRUCTION
        const{title, year, price, descriptions} = req.body; // coletando os dados do corpo da requisição
        await gameService.Create(title, year, price, descriptions);

        res.status(201).json({message: 'O jogo foi cadastrado com sucesso!'});
        // 201 = created.
        
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível cadastrar o jogo.'});
    }
}

// Função para DELETAR um jogo
const deleteGame = async(req, res) => {
    try{
        // Coletando a id
        const id = req.params.id;

        // Validação do id
        if (ObjectId.isValid(id)){
            await gameService.Delete(id);
            // Cod.204 (NO CONTENT)
            res.status(204).json({message: 'O jogo foi excluído com sucesso!'});
        } else{
            res.status(400).json({error: 'Ocorreu um erro na validação da id.'});
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível deletar o jogo.'})
    }
}

// Função para ALTERAR um jogo
const updateGame = async (req, res) => {
    try{
        const id = req.params.id;

        if(ObjectId.isValid(id)){
            const {title, year, price, descriptions} = req.body;
            const game = await gameService.Update(id, title, year, price, descriptions);
            // Cod. 200 OK
            res.status(200).json({message: 'Jogo atualizado com sucesso!', game: game});
        } else{
            res.status(400).json({error: 'Ocorreu um erro na validação da id.'});
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível atualizar o jogo.'});
    }
}

// Função para BUSCAR um jogo ÚNICO
const getOneGame = async (req, res) => {
    try{
        const id = req.params.id;
        
        if(ObjectId.isValid(id)){
            const game = await gameService.getOne(id);
            res.status(200).json({game});
        } else{
            res.status(400).json({error: 'A id informada é inválida.'});
        }

        // Verificando se o jogo foi encontrado
        if(!game){
            res.status(404).json({error: 'O jogo buscado não foi encontrado.'});
        }
    } catch(error){
        console.log(error);
        res.status(500).json({error: 'Erro interno do servidor. Não foi possível listar o jogo.'});
    }
}

export default {getAllGames, createGame, deleteGame, updateGame, getOneGame};
// Importando o Model
import Game from "../models/Games.js";

class gameService{
    // MÉTODO (SERVIÇO) para buscar todos os registros no banco

    // Funções assíncronas são não-bloqueantes
    async getAll(){
        // try trata o sucesso, catch a falha
        try{
            // .find() -> é o método do mongoose para buscar registros no banco
            const games = await Game.find();
            return games;
        } catch(error){
            console.log(error);
        }
    }

    // Médoto para cadastrar um game
    async Create(title, platform, year, price){
        try{
            const newGame = new Game({
                // Desestruturação (titled: title)
                title,
                platform,
                year,
                price
            })
            // Gravando no banco
            await newGame.save(); // .save() -> método do mongoose para cadastrar no bd
        } catch(error){
            console.log(error);
        }
    }

    // Método para excluir um game
    async Delete(id){
        try{
            // Excluindo o jogo pela id
            await Game.findByIdAndDelete(id);
            console.log(`Game com a id ${id} foi deletado.`);
        } catch(error){
            console.log(error);
        }
    }

    // Método para alterar um game
    async Update(id, title, platform, year, price){
        try{
            const updatedGame = await Game.findByIdAndUpdate(id, {
                title,
                platform, 
                year,
                price
            },
            {new: true});

            console.log(`Game com a id ${id} foi alterado.`);
            return updatedGame;
        } catch(error){
            console.log(error);
        }
    }

    // Método para listar um game único
    async getOne(id){
        try{
            const game = await Game.findOne({_id: id});
            return game;
        } catch(error){
            console.log(error);
        }
    }
}
// Exportando a classe
export default new gameService();
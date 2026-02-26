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
}
// Exportando a classe
export default new gameService();
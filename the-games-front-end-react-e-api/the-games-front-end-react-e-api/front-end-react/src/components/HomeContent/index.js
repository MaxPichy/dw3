import styles from "@/components/HomeContent/HomeContent.module.css";
import Loading from "../Loading";
// O use effect é executado asism que o compenente é renderizado
import { useState, useEffect } from "react";
import axios from "axios"; // Biblioteca de consumo de api

const HomeContent = () => {
  // Criando um estado para a lista de jogos
  const [games, setGames] = useState([]); // Estado inicial: array vazio

  // Criando um estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  // Hook use effect -> efeito colateral do componente
  useEffect(() => {
    // Função para buscar os jogos na API
    const fetchGames = async() => {
      try{
        const response = await axios.get("http://localhost:4000/games");
        // console.log(response);

        // Passando a lista de jogos para o estado
        setGames(response.data.games);

      } catch(error){
        console.log(error);

      } finally{
        setTimeout(() => setLoading(false), 3000);
      }
    }

    fetchGames();

  }, []) // Dependência do use effect

  return (
    <>
      <div className={styles.homeContent}>
        {/* CARD LISTA DE JOGOS */}
        <div className={styles.listGamesCard}>
          {/* TITLE */}
          <div className={styles.title}>
            <h2>Lista de jogos</h2>
          </div>

          {loading ? ( <Loading loading={loading} />

          ) : (

          <div className={styles.games} id={styles.games}>
            {/* Lista de jogos irá aqui */}
            {/* Percorrendo a lista de jogos */}
            {games.map(game => (
              <ul className={styles.listGames} key={game._id}>
                <div className={styles.gameImg}>
                  <img src="images/game_cd_cover.png" alt="Jogo em estoque" />
                </div>

                <div className={styles.gameInfo}>
                  <h3>{game.title}</h3>
                  <li>Plataforma: {game.descriptions.platform}</li>
                  <li>Gêneros: {game.descriptions.genre}</li>
                  <li>Classificação: {game.descriptions.rating}</li>
                  <li>Ano: {game.year}</li>
                  <li>Preço: {game.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  })}</li>
                </div>
              </ul>
            ))}
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeContent;

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [erorr, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GamesResponse>("/games")
      .then((response) => setGames(response.data.results)) //data reads the response
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {erorr && <Text color="red">{erorr}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;

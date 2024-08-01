import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [erorr, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<GamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results)) //data reads the response
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, erorr };
};

export default useGames;

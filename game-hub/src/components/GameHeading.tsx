import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  // Games
  // Action Games
  // Xbox Games
  // Xbox Action Games (if a user selects all three for filtering)

  const heading = `${gameQuery.platform?.name || ""}
   ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;

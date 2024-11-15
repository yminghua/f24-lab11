interface GameState {
  cells: Cell[];
  currPlayer: number | null;
  winner: number;
}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }
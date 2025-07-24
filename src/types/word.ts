export interface WordData {
  text: string;
  count: number;
  timestamp: string;
}

export interface WordDisplay extends WordData {
  size: number;
  color: string;
  x: number;
  y: number;
}
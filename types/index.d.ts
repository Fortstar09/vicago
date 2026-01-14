type BallBackground =
  | { type: "color"; value: string }
  | { type: "gradient"; value: string }
  | { type: "image"; value: string };

export interface StatBall {
  id: string;
  title: string; // "81M+"
  subtitle: string; // "Hectares Planted"
  size: number; // diameter in px
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  textClassName: string;
  subTextClassName?: string;
  background: BallBackground;
}

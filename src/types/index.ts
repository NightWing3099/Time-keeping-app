export type Timeframe = 'daily' | 'weekly' | 'monthly';

export interface TimeframeData {
  current: number;
  previous: number;
}

export interface Activity {
  title: string;
  timeframes: Record<Timeframe, TimeframeData>;
}

export interface ActivityColor {
  bg: string;
  icon: string;
}
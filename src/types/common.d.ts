export type Unit = 'year' | 'month' | 'day';
export type DynamicRecord = Record<string, any>;
export type ObjectWithStringKey<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export interface Option {
  value: string;
  label: string;
}

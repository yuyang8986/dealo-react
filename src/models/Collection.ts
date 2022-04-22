// TODO update this to reflect backend models

import { IStandardItem } from "./StandardItem";

export interface Collection {
  id: number;
  name: string;
  creator: string;
  lastUpdated: string;
  items: IStandardItem[];
}

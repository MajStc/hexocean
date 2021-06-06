import { BaseData } from "./baseData";

export interface PizzaData extends BaseData {
  no_of_slices: number;
  diameter: number;
}

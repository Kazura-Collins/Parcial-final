import { Receta } from "./recetas";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta[];
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "recetas">;
}

export type Actions = XAction;

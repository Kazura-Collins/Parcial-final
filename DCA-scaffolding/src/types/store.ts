export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  recetas: Receta{};
};

export enum SomeActions {
  "X" = "X",
}

export interface XAction {
  action: SomeActions.X;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;

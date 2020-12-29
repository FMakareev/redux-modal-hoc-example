import { defaultMemoize } from "reselect";

const modalsSelector = (state: any) => state.modals;

export const modalsStateSelector = {
  getOpenModals: defaultMemoize(modalsSelector)
};

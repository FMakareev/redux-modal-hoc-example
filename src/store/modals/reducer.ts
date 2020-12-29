import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { has as _has } from "lodash";

export enum ModalsView {
  ConfirmModal = "ConfirmModal"
}

export interface ModalsState<TProps extends {}> {
  currentModal?: ModalsView;
  modalProps?: TProps;
}

export const defaultModalsState: ModalsState<any> = {
  currentModal: undefined,
  modalProps: undefined
};

export const modalsStateSlice = createSlice({
  name: "modals",
  initialState: defaultModalsState,
  reducers: {
    openModal: (
      state: ModalsState<any>,
      { payload }: PayloadAction<ModalsState<any>>
    ) => {
      if (!payload || !_has(payload, ["currentModal"])) {
        return;
      }
      state.currentModal = payload.currentModal;
      state.modalProps = payload.modalProps;
    },
    closeModal: (state: ModalsState<any>) => {
      state.currentModal = undefined;
      state.modalProps = undefined;
    }
  }
});

export type ModalsStateActions = {
  openModal: <TProps>(payload: ModalsState<TProps>) => any;
  closeModal: () => any;
};

export const modalsStateActions: ModalsStateActions = modalsStateSlice.actions;

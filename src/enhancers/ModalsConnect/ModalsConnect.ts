import { connect } from "react-redux";
import { ModalsState, modalsStateActions } from "../../store/modals/reducer";
import { modalsStateSelector } from "../../store/modals/selectors";

export interface MapStateToProps<TProps> {
  currentOpenModal?: ModalsState<TProps>;
}
export interface MapDispatchToProps<TProps> {
  openModal: (state: ModalsState<TProps>) => void;
  closeModal: () => void;
}

export type ModalsConnectType<TProps> = MapStateToProps<TProps> &
  MapDispatchToProps<TProps>;

export const ModalsConnect = connect<
  MapStateToProps<any>,
  MapDispatchToProps<any>
>(
  (state) => ({
    currentOpenModal: modalsStateSelector.getOpenModals(state)
  }),
  (dispatch) => ({
    openModal: (state: ModalsState<any>) =>
      dispatch(modalsStateActions.openModal(state)),
    closeModal: () => dispatch(modalsStateActions.closeModal())
  })
);

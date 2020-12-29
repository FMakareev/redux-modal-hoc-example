import * as React from "react";
import { JSXElementConstructor } from "react";
import {
  ModalsConnect,
  ModalsConnectType
} from "../ModalsConnect/ModalsConnect";
import { ModalsView } from "../../store/modals/reducer";
import { isBoolean } from "lodash";

type Props = {
  children: JSXElementConstructor<ConfirmModalHOCAPI>;
  [k: string]: any;
} & ModalsConnectType<any>;

export type ConfirmModalHOCAPI = {
  confirm: (action: () => any, options: any) => void;
};

export class ConfirmModalHOCRender extends React.Component<Props> {
  action: Function | undefined;

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (prevProps.currentOpenModal?.modalProps?.isConfirm === undefined) {
      if (isBoolean(this.props.currentOpenModal?.modalProps?.isConfirm)) {
        if (this.props.currentOpenModal?.modalProps?.isConfirm) {
          if (this.action) {
            this.action();
          } else {
            console.info("ConfirmModalHoc: this.action in not define");
          }
        }
        this.closeModal();
      }
    }
  }

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  confirm = (action: () => any, options: any) => {
    const { openModal } = this.props;
    this.action = action;
    openModal({
      currentModal: ModalsView.ConfirmModal,
      modalProps: { ...options, isConfirm: undefined }
    });
  };

  render() {
    const { children: WrapperComponent } = this.props;
    return <WrapperComponent {...this.props} confirm={this.confirm} />;
  }
}

export const ConfirmModalHOC = (WrapperComponent) =>
  ModalsConnect((props) => (
    <ConfirmModalHOCRender {...props}>{WrapperComponent}</ConfirmModalHOCRender>
  ));

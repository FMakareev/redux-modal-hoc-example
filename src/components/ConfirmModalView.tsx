import React from "react";
import { ModalsHOC, ModalsHOCProps } from "../enhancers/ModalsHOC/ModalsHOC";
import { ModalsView } from "../store/modals/reducer";

type Props = ModalsHOCProps<{
  isConfirm: boolean;
  header?: string;
  message?: string;
}>;

export const ConfirmModalViewRender = (props: Props) => {
  console.log(props.currentOpenModal?.modalProps);
  return (
    <div
      style={{
        minWidth: "100px",
        position: "fixed",
        padding: "16px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        backgroundColor: "#ffffff",
        boxShadow:
          "0px 0px 5px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
        zIndex: 10
      }}
    >
      <div>{props.currentOpenModal?.modalProps?.header}</div>
      <div>{props.currentOpenModal?.modalProps?.message}</div>
      <div>
        <button
          onClick={() => {
            props.closeModal();
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            props.openModal({
              currentModal: ModalsView.ConfirmModal,
              modalProps: {
                isConfirm: true
              }
            });
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export const ConfirmModalView = ModalsHOC({
  modalName: ModalsView.ConfirmModal
})(ConfirmModalViewRender);

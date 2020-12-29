import React from "react";
import { ConfirmModalView } from "../components/ConfirmModalView";
import {
  ConfirmModalHOC,
  ConfirmModalHOCAPI
} from "../enhancers/ConfirmModalHOC/ConfirmModalHOC";

export const ConfirmExample = ConfirmModalHOC((props: ConfirmModalHOCAPI) => {
  const action = () => {
    console.log("CALL ACTION");
  };
  return (
    <div>
      <button
        onClick={() => {
          props.confirm(action, {
            header: "Delete?",
            message: "You are sure?"
          });
        }}
      >
        Open Confirm modal
      </button>
      <ConfirmModalView />
    </div>
  );
});

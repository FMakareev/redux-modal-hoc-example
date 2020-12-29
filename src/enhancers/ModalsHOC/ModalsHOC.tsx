import * as React from "react";
import { ComponentClass, ComponentType } from "react";
import {
  ModalsConnect,
  ModalsConnectType
} from "../ModalsConnect/ModalsConnect";
import { ModalsView } from "../../store/modals/reducer";

export interface ModalsHOCProps<TProps extends {}>
  extends ModalsConnectType<TProps> {
  show: boolean;
  [k: string]: any;
}

type Props = {
  modalName: ModalsView;
  isDebugShow?: boolean;
};

export const ModalsHOC = <TChildProps extends {}>({
  modalName,
  isDebugShow
}: Props) => (
  WrapperComponent: ComponentType<TChildProps & ModalsHOCProps<any>>
): ComponentClass<any> => {
  class ModalsHOCContainer extends React.Component<
    TChildProps & ModalsHOCProps<any> & ModalsConnectType<any>
  > {
    static displayName = "ModalsHOC";

    componentWillUnmount() {
      this.props.closeModal();
    }

    isShow = () => {
      const { currentOpenModal } = this.props;
      return currentOpenModal?.currentModal === modalName;
    };

    render() {
      const show = this.isShow();
      if (!show) {
        return null;
      }
      return <WrapperComponent {...this.props} show={show} />;
    }
  }

  return ModalsConnect(ModalsHOCContainer) as any;
};

export interface AvatarState {
  top: string;
  bottom: string;
  shoes: string;
  jacket?: string;
  accessories?: string;
}

import topImage from "../assets/tops/c626bf854510ca17aec1c095a15e83ca.png";
import bottomImage from "../assets/bottoms/243b64173ef714a2ad9fac8480a1299b.png";
import shoesImage from "../assets/shoes/3dcc6ca4afcc15d225c567a53ef3fbc9.png";

export const defaultAvatarState: AvatarState = {
  top: topImage,
  bottom: bottomImage,
  shoes: shoesImage,
  jacket: undefined,
  accessories: undefined,
};

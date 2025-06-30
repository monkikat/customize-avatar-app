export interface AvatarState {
  top: string;
  bottom: string;
  shoes: string;
  jacket?: string;
  accessories?: string;
}

import { assetCategories } from "../utils/assetImports";

export const defaultAvatarState: AvatarState = {
  top: assetCategories.tops[1].src, // Using top2 (c626bf854510ca17aec1c095a15e83ca.png)
  bottom: assetCategories.bottoms[0].src, // Using bottom1 (243b64173ef714a2ad9fac8480a1299b.png)
  shoes: "", // Shoes are now permanent and not customizable
  jacket: undefined,
  accessories: undefined,
};

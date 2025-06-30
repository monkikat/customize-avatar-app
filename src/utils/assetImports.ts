// Import all tops
import top1 from "../assets/tops/a5f4129765c149980630c8ed8f146d73.png";
import top2 from "../assets/tops/c626bf854510ca17aec1c095a15e83ca.png";
import top3 from "../assets/tops/CROPPED7c8afcbcd0f008cca9f520f131954038.png";
import top4 from "../assets/tops/CROPPED45d53705860e5ef583e902d2ea956d41.png";
import top5 from "../assets/tops/CROPPED59a8f04811a1e413c7032df11415f2da.png";
import top6 from "../assets/tops/CROPPEDbf281fceb51a894d84c82f8abf69f601.png";
import top7 from "../assets/tops/CROPPEDd164caecaf28c8d38dafc50148aebc32.png";
import top8 from "../assets/tops/CROPPEDe875ae4c9c61589f7c7d5939acf3167a.png";
import top9 from "../assets/tops/CROPPEDfa8a110352d64bdcf39f8aae79296c35.png";

// Import all bottoms
import bottom1 from "../assets/bottoms/243b64173ef714a2ad9fac8480a1299b.png";
import bottom2 from "../assets/bottoms/733a8c96d1d4e0d677c43c642a2b528e.png";
import bottom3 from "../assets/bottoms/6901adc6549faace81f674b488e3208a.png";
import bottom4 from "../assets/bottoms/croppede1d0c3b1006e125d142b50f8159f663b.png";
import bottom5 from "../assets/bottoms/CROPPEDf9d9feb78a70f2f5fd9ef4073b2c08b1.png";

// Import all shoes
import shoes1 from "../assets/shoes/3dcc6ca4afcc15d225c567a53ef3fbc9.png";
import shoes2 from "../assets/shoes/8c092a505aaa946ecebb4aed8883bffe.png";
import shoes3 from "../assets/shoes/70295472d161ca481626223344e1b679.png";

export const assetCategories = {
  tops: [top1, top2, top3, top4, top5, top6, top7, top8, top9],
  bottoms: [bottom1, bottom2, bottom3, bottom4, bottom5],
  shoes: [shoes1, shoes2, shoes3]
};

export type AssetCategory = keyof typeof assetCategories;

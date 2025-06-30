// Import all tops
import top2 from "../assets/tops/c626bf854510ca17aec1c095a15e83ca.png";
import top3 from "../assets/tops/CROPPED7c8afcbcd0f008cca9f520f131954038.png";
import top4 from "../assets/tops/CROPPED45d53705860e5ef583e902d2ea956d41.png";
import top5 from "../assets/tops/CROPPED59a8f04811a1e413c7032df11415f2da.png";
import top6 from "../assets/tops/CROPPEDbf281fceb51a894d84c82f8abf69f601.png";
import top8 from "../assets/tops/Group 1.png";

// Import all outerwear
import outerwear1 from "../assets/outerwear/CROPPEDd164caecaf28c8d38dafc50148aebc32.png";
import outerwear2 from "../assets/outerwear/CROPPEDe875ae4c9c61589f7c7d5939acf3167a.png";
import outerwear3 from "../assets/outerwear/CRP[[ED80cb8f5f7286e9b71e4b7ea27c81ab87.png";

// Import all bottoms
import bottom1 from "../assets/bottoms/243b64173ef714a2ad9fac8480a1299b.png";
import bottom2 from "../assets/bottoms/733a8c96d1d4e0d677c43c642a2b528e.png";
import bottom3 from "../assets/bottoms/6901adc6549faace81f674b488e3208a.png";
import bottom5 from "../assets/bottoms/CROPPEDf9d9feb78a70f2f5fd9ef4073b2c08b1.png";

// Import all shoes
import shoes1 from "../assets/shoes/3dcc6ca4afcc15d225c567a53ef3fbc9.png";
import shoes2 from "../assets/shoes/8c092a505aaa946ecebb4aed8883bffe.png";
import shoes3 from "../assets/shoes/70295472d161ca481626223344e1b679.png";

// Import all accessories
import accessory1 from "../assets/accessories/3b5a63abfffccdd2572d8a909e6f1652.png";
import accessory2 from "../assets/accessories/8e15435ce9ac0edc7338b93f08f5344d.png";
import accessory3 from "../assets/accessories/362a21a97131543ec5a19bf64c1c75c1.png";
import accessory4 from "../assets/accessories/3487b429734e18dbcd96a959155dff73.png";
import accessory5 from "../assets/accessories/838205c6238fdfbf7b98686705bfe6a2.png";
import accessory6 from "../assets/accessories/69369071adb5cd73c1288981bb3c750a.png";
import accessory7 from "../assets/accessories/CROPPED307c46b23e4f6de78dfde87bb5c3ffe2.png";
import accessory8 from "../assets/accessories/cropped1901d53c2592588d3dd2e97a356dddf5.png";
import accessory9 from "../assets/accessories/d4741f8ee9d7ebf108b7126a5ddd80a8.png";
import accessory10 from "../assets/accessories/e111847a46509cac5c1b589bb2081402.png";

export interface AssetItem {
  src: string;
  className: string;
}

export const assetCategories = {
  tops: [
    { src: top2, className: "absolute h-2/11 hover:cursor-pointer -translate-y-7/8 hover:scale-105 z-10" },
    { src: top3, className: "absolute h-1/5 hover:cursor-pointer -translate-y-5/6 -translate-x-0.5 hover:scale-105 z-10" },
    { src: top4, className: "absolute h-2/11 hover:cursor-pointer -translate-y-8/9 hover:scale-105 z-10" },
    { src: top5, className: "absolute h-3/17 hover:cursor-pointer -translate-y-full hover:scale-105 z-10" },
    { src: top6, className: "absolute h-2/11 hover:cursor-pointer -translate-y-7/8 hover:scale-105 z-10" },
    { src: top8, className: "absolute h-4/16 hover:cursor-pointer -translate-y-8/15 hover:scale-105 z-10" }
  ],
  bottoms: [
    { src: bottom1, className: "absolute w-4/5 translate-y-1/3 translate-x-1 hover:cursor-pointer hover:scale-105 z-0" },
    { src: bottom2, className: "absolute w-4/5 translate-y-1/4 translate-x-1 hover:cursor-pointer hover:scale-105 z-0" },
    { src: bottom3, className: "absolute w-4/5 translate-y-1/5 hover:cursor-pointer hover:scale-105 z-0" },
    { src: bottom5, className: "absolute w-8/11 translate-y-1/3 hover:cursor-pointer hover:scale-105 z-0" }
  ],
  accessories: [
    { src: accessory1, className: "absolute h-1/5 hover:cursor-pointer -translate-x-3/5 translate-y-4/7 hover:scale-105 z-25" },
    { src: accessory2, className: "absolute h-1/20 hover:cursor-pointer top-1/8 -translate-x-3/4 hover:scale-105 z-25" },
    { src: accessory3, className: "absolute h-1/7 hover:cursor-pointer -translate-x-4/5 translate-y-4/7 hover:scale-105 z-25" },
    { src: accessory4, className: "absolute h-2/11 hover:cursor-pointer -translate-x-4/5 translate-y-4/7 hover:scale-105 z-25" },
    { src: accessory5, className: "absolute h-1/6 hover:cursor-pointer -translate-x-7/6 translate-y-5/8 hover:scale-105 z-25" },
    { src: accessory6, className: "absolute h-1/6 hover:cursor-pointer -translate-x-2/5 translate-y-5/7 hover:scale-105 z-25" },
    { src: accessory7, className: "absolute w-2/7 top-2/15 hover:cursor-pointer hover:scale-105 z-25" },
    { src: accessory8, className: "absolute w-2/7 top-2/12 hover:cursor-pointer hover:scale-105 z-25" },
    { src: accessory9, className: "absolute h-1/4 hover:cursor-pointer -translate-x-9/10 translate-y-4/7 hover:scale-105 z-25" },
    { src: accessory10, className: "absolute h-1/8 hover:cursor-pointer -translate-x-5/6 translate-y-3/4 hover:scale-105 z-25" }
  ],
  jackets: [
    { src: outerwear1, className: "absolute h-3/10 hover:cursor-pointer -translate-y-2/5 hover:scale-105 z-15" },
    { src: outerwear2, className: "absolute h-3/10 hover:cursor-pointer -translate-y-4/12 translate-x-0.5 hover:scale-105 z-15" },
    { src: outerwear3, className: "absolute h-3/11 hover:cursor-pointer -translate-y-5/11 hover:scale-105 z-15" }
  ]
};

export type AssetCategory = keyof typeof assetCategories;

// Helper function to get asset items as simple string array (for backward compatibility)
export const getAssetSources = (category: AssetCategory): string[] => {
  return assetCategories[category].map(item => item.src);
};

// Helper function to get asset item by source
export const getAssetItem = (category: AssetCategory, src: string): AssetItem | undefined => {
  return assetCategories[category].find(item => item.src === src);
};

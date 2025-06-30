import React from "react";
import avatar from "../assets/avatar.png";
import shoes1 from "../assets/shoes/3dcc6ca4afcc15d225c567a53ef3fbc9.png";
import type { AvatarState } from "../types/avatar";
import { getAssetItem } from "../utils/assetImports";

interface AvatarProps {
  avatarState: AvatarState;
  onItemClick?: (itemType: keyof AvatarState) => void;
}

const Avatar: React.FC<AvatarProps> = ({ avatarState, onItemClick }) => {
  const handleItemClick = (itemType: keyof AvatarState) => {
    if (onItemClick) {
      onItemClick(itemType);
    }
    console.log(`${itemType} clicked`);
  };

  // Get asset items with their custom styling
  const topAsset = getAssetItem('tops', avatarState.top);
  const bottomAsset = getAssetItem('bottoms', avatarState.bottom);
  const accessoriesAsset = avatarState.accessories ? getAssetItem('accessories', avatarState.accessories) : null;
  const jacketAsset = avatarState.jacket ? getAssetItem('jackets', avatarState.jacket) : null;

  return (
    <div className="h-full w-fit flex items-center justify-center relative">
      <img src={avatar} className="h-3/4" alt="Avatar base" />
      
      {/* Top positioned absolutely on top of avatar */}
      <img 
        src={avatarState.top}
        className={topAsset?.className || "absolute h-2/11 hover:cursor-pointer -translate-y-7/8 hover:scale-105 z-10"}
        onClick={() => handleItemClick('top')}
        alt="Top"
      />
      
      {/* Jacket positioned absolutely (optional) */}
      {avatarState.jacket && (
        <img 
          src={avatarState.jacket}
          className={jacketAsset?.className || "absolute h-2/10 hover:cursor-pointer hover:scale-105 z-15"}
          onClick={() => handleItemClick('jacket')}
          alt="Jacket"
        />
      )}
      
      {/* Bottom positioned absolutely on top of avatar */}
      <img 
        src={avatarState.bottom}
        className={bottomAsset?.className || "absolute w-3/4 translate-y-1/3 translate-x-1 hover:cursor-pointer hover:scale-105 z-0"}
        onClick={() => handleItemClick('bottom')}
        alt="Bottom"
      />
      
      {/* Shoes positioned absolutely - permanent default */}
      <img 
        src={shoes1}
        className="absolute w-1/2 hover:cursor-pointer translate-x-1 translate-y-5/9 hover:scale-105 -z-10"
        alt="Shoes"
      />
      
      {/* Accessories positioned absolutely (optional) */}
      {avatarState.accessories && (
        <img 
          src={avatarState.accessories}
          className={accessoriesAsset?.className || "absolute h-20 hover:cursor-pointer hover:scale-105 z-25"}
          onClick={() => handleItemClick('accessories')}
          alt="Accessories"
        />
      )}
    </div>
  );
};

export default Avatar;

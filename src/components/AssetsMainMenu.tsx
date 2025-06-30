import React, { useState } from "react";
import AssetsItems from "./AssetsItems";
import type { AssetCategory } from "../utils/assetImports";

interface AssetsMainMenuProps {
  onItemClick: (category: AssetCategory, asset: string) => void;
}

const AssetsMainMenu: React.FC<AssetsMainMenuProps> = ({ onItemClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>("tops");

  return (
    <div className="w-3/5 h-full flex items-center justify-center scale-80 sm:scale-90 lg:scale-100 sm:w-2/5 lg:w-2/5">
        <div className="w-fit rounded-2xl border-espresso-600 border-2 h-3/4 flex sm:w-8/9">
          <ul className="h-full w-fit bg-creme-200 text-[3vh] border-r-2 sm:text-xs lg:text-sm rounded-tl-2xl rounded-bl-2xl sm:w-2/7">
            <li 
              className={`border-b-2 border-espresso-600 px-4 py-2 hover:cursor-pointer hover:bg-pinky-200 ${selectedCategory === 'tops' ? 'bg-pinky-200' : ''}`}
              onClick={() => setSelectedCategory("tops")}
            >
              Tops
            </li>
            <li 
              className={`border-b-2 border-espresso-600 px-4 py-2 hover:cursor-pointer hover:bg-pinky-200 ${selectedCategory === 'bottoms' ? 'bg-pinky-200' : ''}`}
              onClick={() => setSelectedCategory("bottoms")}
            >
              Bottoms
            </li>
            <li 
              className={`border-b-2 border-espresso-600 px-4 py-2 hover:cursor-pointer hover:bg-pinky-200 ${selectedCategory === 'accessories' ? 'bg-pinky-200' : ''}`}
              onClick={() => setSelectedCategory("accessories")}
            >
              Accessories
            </li>
            <li 
              className={`px-4 py-2 hover:cursor-pointer hover:bg-pinky-200 border-b-2 border-espresso-600 ${selectedCategory === 'jackets' ? 'bg-pinky-200' : ''}`}
              onClick={() => setSelectedCategory("jackets")}
            >
              Jackets
            </li>
          </ul>
          <AssetsItems category={selectedCategory} onItemClick={onItemClick} />
        </div>
    </div>
  )
}

export default AssetsMainMenu

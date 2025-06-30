import React, { useState } from "react";
import AssetsItems from "./AssetsItems";
import type { AssetCategory } from "../utils/assetImports";

interface AssetsMainMenuProps {
  onItemClick: (category: AssetCategory, asset: string) => void;
}

const AssetsMainMenu: React.FC<AssetsMainMenuProps> = ({ onItemClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>("tops");

  return (
    <div className="w-2/5 translate-x-20 h-full flex items-center justify-center">
        <div className="w-8/9 rounded-2xl border-espresso-600 border-2 h-3/4 flex">
          <ul className="h-full bg-creme-200 w-2/7 text-sm border-r-2">
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
              className={`border-b-2 border-espresso-600 px-4 py-2 hover:cursor-pointer hover:bg-pinky-200 ${selectedCategory === 'shoes' ? 'bg-pinky-200' : ''}`}
              onClick={() => setSelectedCategory("shoes")}
            >
              Shoes
            </li>
          </ul>
          <AssetsItems category={selectedCategory} onItemClick={onItemClick} />
        </div>
    </div>
  )
}

export default AssetsMainMenu

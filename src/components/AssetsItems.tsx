import { assetCategories, type AssetCategory } from "../utils/assetImports";

interface AssetsItemsProps {
  category: AssetCategory;
  onItemClick: (category: AssetCategory, asset: string) => void;
}

const AssetsItems: React.FC<AssetsItemsProps> = ({ category, onItemClick }) => {
  const assets = assetCategories[category];

  return (
    <div className="w-fit max-h-full overflow-y-auto rounded-tr-2xl rounded-br-2xl bg-pinky-200 sm:w-full">
      <div className="grid grid-cols-1 place-items-center auto-rows-min gap-y-4 gap-x-4 p-4 lg:gap-8 sm:grid-cols-2">
        {assets.map((assetItem, index) => (
          <div key={index} className="bg-creme-200 rounded-2xl p-4 border-2 border-espresso-600">
            <img 
              src={assetItem.src} 
              className="h-12 hover:cursor-pointer hover:scale-105 lg:h-24 sm:h-20"
              alt={`${category} ${index + 1}`}
              onClick={() => onItemClick(category, assetItem.src)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetsItems;

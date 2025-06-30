import { assetCategories, type AssetCategory } from "../utils/assetImports";

interface AssetsItemsProps {
  category: AssetCategory;
  onItemClick: (category: AssetCategory, asset: string) => void;
}

const AssetsItems: React.FC<AssetsItemsProps> = ({ category, onItemClick }) => {
  const assets = assetCategories[category];

  return (
    <div className="w-full max-h-full overflow-y-auto bg-pinky-200">
      <div className="grid grid-cols-2 place-items-center auto-rows-min gap-8 p-4">
        {assets.map((assetItem, index) => (
          <div key={index} className="bg-creme-200 rounded-2xl p-4 border-2 border-espresso-600">
            <img 
              src={assetItem.src} 
              className="h-24 hover:cursor-pointer hover:scale-105"
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

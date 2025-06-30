
import { useState } from "react";
import Avatar from "../components/Avatar";
import { defaultAvatarState, type AvatarState } from "../types/avatar";
import AssetsMainMenu from "../components/AssetsMainMenu";
import unmuteIcon from "../assets/unmuteIcon.svg"
import closeIcon from "../assets/closeIcon.svg"
import { useNavigate } from "react-router-dom";


const CustomizePage = () => {
  const [avatarState, setAvatarState] = useState<AvatarState>(defaultAvatarState);
  const [isClosetOpen, setIsClosetOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleItemClick = (itemType: keyof AvatarState) => {
    console.log(`Clicked on ${itemType}`);
    setIsClosetOpen(true);
  };

  const handleAssetSelection = (category: string, asset: string) => {
    const propertyMap: { [key: string]: string } = {
      'tops': 'top',
      'bottoms': 'bottom',
      'accessories': 'accessories',
      'jackets': 'jacket'
    };
    
    const avatarProperty = propertyMap[category] || category;
    
    setAvatarState(prev => ({
      ...prev,
      [avatarProperty]: asset
    }));
  };

  return (
    <div className="h-screen flex justify-center space-x-0 items-center fade-in lg:space-x-8">
      <Avatar avatarState={avatarState} onItemClick={handleItemClick} />
      {
        isClosetOpen ? (
          <button className="absolute top-10 right-10 lg:top-12 lg:right-18 w-fit rounded-4xl py-1 px-2 hover:cursor-pointer hover:scale-105"
          onClick={() => setIsClosetOpen(false)}>
            <img src={closeIcon} alt="close" className="w-8 h-8 lg:w-10 lg:h-10"/>
          </button>
        ) : (
          <button className="bg-espresso-600 w-fit top-10 right-10 absolute text-[2.2vh] lg:top-12 lg:right-18 rounded-4xl text-creme-200 px-4 py-1 sm:text-xs lg:text-sm hover:cursor-pointer hover:scale-105"
            onClick={() => setIsClosetOpen(true)}>closet</button>
        )
      }
      <div className="absolute top-10 left-10 flex flex-col space-y-2 items-start lg:top-12 lg:left-18">
        <button className="bg-espresso-600 w-fit rounded-4xl text-creme-200 px-4 py-1 text-[2.2vh] sm:text-xs lg:text-sm hover:cursor-pointer hover:scale-105"
        onClick={() => navigate('/')}>home</button>
        <button className=" bg-creme-200 w-fit rounded-4xl py-1 px-1 place-items-center lg:px-2 border-espresso-600 border-2 hover:cursor-pointer hover:scale-105">
          <img src={unmuteIcon} alt="unmute" className="h-3 w-3 lg:w-4 lg:h-4"/>
        </button>
      </div>
      { 
        isClosetOpen && (
          <AssetsMainMenu onItemClick={handleAssetSelection}/>
        ) 
      }
    </div>
  );
};

export default CustomizePage;

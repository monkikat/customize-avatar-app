
import React, { useState } from "react";
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
    <div className="h-screen flex justify-center space-x-12 items-center fade-in">
      <Avatar avatarState={avatarState} onItemClick={handleItemClick} />
      {
        isClosetOpen ? (
          <button className="absolute top-10 right-18 w-fit rounded-4xl py-1 px-2 hover:cursor-pointer hover:scale-105"
          onClick={() => setIsClosetOpen(false)}>
            <img src={closeIcon} alt="close" className="w-10 h-10"/>
          </button>
        ) : (
          <button className="bg-espresso-600 w-fit absolute top-12 right-18 rounded-4xl text-creme-200 px-4 py-1 text-sm hover:cursor-pointer hover:scale-105"
            onClick={() => setIsClosetOpen(true)}>closet</button>
        )
      }
      <div className="absolute top-12 left-18 flex flex-col space-y-2 items-start">
        <button className="bg-espresso-600 w-fit rounded-4xl text-creme-200 px-4 py-1 text-sm hover:cursor-pointer hover:scale-105"
        onClick={() => navigate('/')}>home</button>
        <button className=" bg-creme-200 w-fit rounded-4xl py-1 px-2 border-espresso-600 border-2 hover:cursor-pointer hover:scale-105">
          <img src={unmuteIcon} alt="unmute" className="w-4 h-4"/>
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

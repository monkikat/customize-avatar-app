import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import profileImg1 from "../assets/profileImg1.png";
import profileImg2 from "../assets/profileImg2.png";
import profileImg3 from "../assets/profileImg3.png";

const ProfileRotation = () => {
  const images = [profileImg1, profileImg2, profileImg3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex items-end justify-center">
        <img src={images[currentIndex]}
            className="h-5/7 bottom-0 hover:scale-105 hover:cursor-pointer"
            style={{
              filter: 'drop-shadow(6px 0 0 #fff4e4) drop-shadow(-6px 0 0 #fff4e4) drop-shadow(0 6px 0 #fff4e4) drop-shadow(0 -6px 0 #fff4e4) drop-shadow(4px 4px 0 #fff4e4) drop-shadow(-4px -4px 0 #fff4e4) drop-shadow(4px -4px 0 #fff4e4) drop-shadow(-4px 4px 0 #fff4e4)'
            }}
            onClick={() => navigate('/customize')}/>
    </div>
  )
}

export default ProfileRotation

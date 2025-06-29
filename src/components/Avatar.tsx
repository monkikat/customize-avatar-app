import avatar from "../assets/avatar.png";
import top from "../assets/tops/c626bf854510ca17aec1c095a15e83ca.png";
import bottom from "../assets/bottoms/243b64173ef714a2ad9fac8480a1299b.png";
import boots from "../assets/shoes/3dcc6ca4afcc15d225c567a53ef3fbc9.png";

const Avatar = () => {
  const handleTopClick = () => {
    console.log("top");
  };

  const handleBottomClick = () => {
    console.log("bottom");
  };

  return (
    <div className="h-full w-fit flex items-center justify-center relative">
        <img src={avatar}
            className="h-3/4"/>
        <div className="absolute top-48 flex flex-col items-center">
            <div className="relative">
              <img src={top}
                  className="h-36 hover:cursor-pointer hover:scale-105"
                  onClick={handleTopClick}/>
            </div>
            <div className="z-20 relative">
              <img src={bottom}
                  className="w-44 hover:cursor-pointer hover:scale-105"
                  onClick={handleBottomClick}/>
            </div>
            <img src={boots}
                className="w-32 -translate-y-11/12"/>
        </div>
    </div>
  )
}

export default Avatar

import { useNavigate } from "react-router-dom"
import ProfileRotation from "../components/ProfileRotation"
import TitleCard from "../components/TitleCard"
import unmuteIcon from "../assets/unmuteIcon.svg"

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-clip w-full bg-[conic-gradient(var(--color-creme-200)_90deg,var(--color-pinky-200)_90deg_180deg,var(--color-creme-200)_180deg_270deg,var(--color-pinky-200)_270deg)] bg-[length:80px_80px] fade-in">
        <div className="h-screen flex justify-between">
          <ProfileRotation/>
          <div className="flex flex-col w-5/6 items-center justify-center space-y-10 pr-12 py-4">
            <TitleCard/>
            <div className="flex flex-col space-y-4 items-center font-semibold text-sm">
              <button onClick={() => navigate('/customize')} className="w-fit bg-creme-200 rounded-4xl py-1 px-8 border-pinky-200 border-4 hover:cursor-pointer hover:scale-105">Play</button>
              <div className="space-x-12 flex items-center">
                <button className=" bg-creme-200 rounded-4xl py-1 px-2 border-pinky-200 border-4 hover:cursor-pointer hover:scale-105">
                  <img src={unmuteIcon} alt="unmute" className="w-6 h-6"/>
                </button>
                <button className=" bg-creme-200 rounded-4xl py-1 px-4 border-pinky-200 border-4 hover:cursor-pointer hover:scale-105">About Me</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage

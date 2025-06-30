import { useState, useEffect } from "react";
import w1Img from "../assets/letters/w1.jpg";
import w2Img from "../assets/letters/w2.jpg";
import hImg from "../assets/letters/h.jpg";
import a1Img from "../assets/letters/a1.jpg";
import a2Img from "../assets/letters/a2.jpg";
import tImg from "../assets/letters/t.jpg";
import dImg from "../assets/letters/d.jpg";
import oImg from "../assets/letters/o.jpg";
import iImg from "../assets/letters/i.jpg";
import eImg from "../assets/letters/e.jpg";
import rImg from "../assets/letters/r.jpg";
import qMarkImg from "../assets/questionMark.jpg";


const TitleCard = () => {
  const [rotations, setRotations] = useState(Array(12).fill(false));

  useEffect(() => {
    const intervals = Array(12).fill(null).map((_, index) => {
      const randomTime = Math.random() * 2000 + 1000; // Random between 1000ms and 2500ms
      return setInterval(() => {
        setRotations(prev => {
          const newRotations = [...prev];
          newRotations[index] = !newRotations[index];
          return newRotations;
        });
      }, randomTime);
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const getRotationClass = (index: number) => {
    return rotations[index] ? "rotate-[-10deg]" : "rotate-[10deg]";
  };
  return (
    <div className="h-fit w-full space-y-12 text-center flex flex-col items-center">
        <div className="text-sm font-semibold bg-creme-200 rounded-4xl py-1 px-12 border-pinky-200 border-4">
            <p>monkikat presents</p>
        </div>
        <div className="text-6xl flex flex-col justify-center space-y-10 overflow-hidden">
            <div className="flex justify-center space-x-8">
              {/*
              what
               */}
              <div className="flex space-x-2">
                <img src={w1Img}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(0)}`}/>
                <img src={hImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(1)}`}/>
                <img src={a1Img}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(2)}`}/>
                <img src={tImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(3)}`}/>
              </div>
              {/*
              do
               */}
              <div className="flex space-x-2">
                <img src={dImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(4)}`}/>
                <img src={oImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(5)}`}/>
              </div>
              {/*
              i
               */}
              <div className="flex space-x-2">
                <img src={iImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(6)}`}/>
              </div>
            </div>
            <div className="flex justify-center space-x-12">
              {/*
              wear
               */}
              <div className="flex space-x-3">
                <img src={w2Img}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(7)}`}/>
                <img src={eImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(8)}`}/>
                <img src={a2Img}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(9)}`}/>
                <img src={rImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(10)}`}/>
              </div>
              <div className="flex space-x-2">
                <img src={qMarkImg}
                className={`h-20 w-20 object-contain transition-transform duration-500 ${getRotationClass(11)}`}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TitleCard

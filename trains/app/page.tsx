import Navbar from "./components/Navbar";
import Buttons from "./components/buttons";
import image from "@/public/mapEN_big.gif"
import Image from "next/image";
import Hero from "./components/hero";


export default function Home() {
  

  return (
    <div className="w-screen h-dvh">
      <div className="w-full">
        <Navbar />
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Image src={image.src} alt="image" width={500} height={500}/>
      </div>
    </div>
  );
}

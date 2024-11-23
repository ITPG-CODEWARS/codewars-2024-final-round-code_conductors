import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Buttons from "./components/buttons";



export default function Home() {
  

  return (
    <div className="w-screen h-dvh">
      <div className="w-full">
        <Navbar />
      </div>
      <div>
        <Map/>
      </div>
      <div className="w-full flex justify-center items-center">
        <Buttons/>
      </div>
    </div>
  );
}

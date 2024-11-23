import Navbar from "./components/Navbar";
import Map from "./components/Map";
import Buttons from "./components/buttons";

export default function Home() {
  return (
    <div className="w-screen h-dvh">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="w-full max-w-4xl border-2 border-red-500">
        <Map/>
      </div>
      <div className="w-full h-fit flex justify-center items-center">
        <Buttons/>
      </div>
    </div>
  );
}

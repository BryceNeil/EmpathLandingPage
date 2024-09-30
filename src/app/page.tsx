import TopPanel from "./TopPanel";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Hero from "./Hero";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <TopPanel/>
      <Hero />
      <div className="flex flex-1">
       <Gallery/>
      </div>
      
    </div>
  );
}

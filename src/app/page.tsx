import TopPanel from "./TopPanel";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-900">
      <TopPanel/>

      <div className="flex flex-1">
        <LeftPanel />
        <RightPanel  />
      </div>
      
    </div>
  );
}

import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import LeaderBoard from "./components/LeaderBoard";

export default function App() {
  return (
    <>
      <div className="bg-main-50 h-screen pb-10">
        <div className="bg-actionSecondary-50 text-basicSecondary-500 shadow-sm lg:overflow-y-visible sticky w-full z-20 top-0">
          <Navbar />
        </div>
        {/* main container */}
        <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-5 overflow-y-auto pb-5 main-container-height no-scrollbar fixed right-0 left-0">
          <LeftSidebar />
          <MainContent />
          <LeaderBoard />
        </div>
      </div>
    </>
  );
}

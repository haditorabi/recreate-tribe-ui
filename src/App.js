import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import Leaderboard from "./components/Leaderboard";

export default function App() {
  return (
    <>
      <div className="bg-main-50 min-h-screen pb-10">
        <div className="bg-actionSecondary-50 text-basicSecondary-500 shadow-sm lg:overflow-y-visible sticky w-full z-50">
          <Navbar />
        </div>
        {/* main container */}
        <div className="max-w-9xl mx-0 sm:px-0 lg:px-0 w-full grid grid-cols-12 gap-5 overflow-y-auto pb-5 h-screen">
          <LeftSidebar />
          <MainContent />
          <Leaderboard />
        </div>
      </div>
    </>
  );
}

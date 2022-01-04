import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";

export default function App() {
  return (
    <>
      <div className="bg-main-50 min-h-screen pb-10">
        <div className="bg-actionSecondary-50 text-basicSecondary-500 shadow-sm lg:overflow-y-visible">
          <Navbar />
        </div>
        {/* main container */}
        <div className="max-w-8xl  mx-auto sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-5 overflow-hidden pb-5 h-screen">
          <LeftSidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
}

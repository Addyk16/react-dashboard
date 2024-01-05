import { useContext } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Graph from "./components/Graph";
import Header from "./components/Header/Header";
import PieData from "./components/PieData";
import QueryTable from "./components/QueryTable";
import Sidebar from "./components/Sidebar/Sidebar";
import Stats from "./components/Stats/Stats";
import WeeklySale from "./components/WeeklySale";
import SidebarContext from "./context/SidebarContext";

function App() {
  const {isSidebarOpen} = useContext(SidebarContext)
  return (
    <main className="flex">
      <Sidebar />
      <div className={`flex flex-col flex-1 relative p-6 ${isSidebarOpen?"lg:ml-[260px]":""} `}>
        <Header />
        <div
          className="m-3 mb-5 grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 
        w-full gap-y-5 md:justify-items-start overflow-hidden">
          <Stats text="Impressions" numbers={988} />
          <Stats text="Total Audience" numbers={856} />
          <Stats text="Engagements" numbers={829} />
          <Stats
            text="Engaged Audience"
            numbers={813}
          />
        </div>
        <div
          className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12
          w-full md:gap-x-4 sm:gap-x-2 gap-y-3 md:gap-y-6 lg:gap-y-10 mt-5 min-h-screen grid-rows-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-8 md:row-span-4 sm:row-span-3 row-span-2">
            <Graph />
          </div>
          <div className="col-span-1 md:col-span-4 md:row-span-4 sm:row-span-3 row-span-2">
            <Bar />
          </div>
          <div className="col-span-1 md:col-span-3 md:row-span-4 sm:row-span-3 row-span-2">
            <PieData />
          </div>
          <div className="col-span-1 md:col-span-4 md:row-span-4 sm:row-span-3 row-span-2">
            <WeeklySale />
          </div>
          <div className="col-span-1 md:col-span-5 md:row-span-4 sm:row-span-3 row-span-2">
            <QueryTable />
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-12 md:row-span-4 sm:row-span-3 row-span-2">
            <QueryTable />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

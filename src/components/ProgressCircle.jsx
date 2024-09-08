import PieChart from "./PieChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const ProgressCircle = () => {
  return (
    <div id="progress">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Enga
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          gement
        </span>
      </h2> 
      <div className="flex flex-col sm:flex-row sm:justify-around">
        {/* Box for PieChart */}
        <div className="bg-[#28282B] border border-[#28282B] rounded-xl pb-6 mx-5 my-12 w-full sm:w-[30vw] flex items-center justify-center">
          <div className="h-[50vh] w-full flex items-center justify-center">
            <PieChart />
          </div>
        </div>
        
        {/* Box for BarChart */}
        <div className="bg-[#EDEADE] border border-[#28282B] rounded-xl pb-6 mx-5 my-12 w-full sm:w-[50vw] flex items-center justify-center">
          <div className="h-[50vh] w-full flex items-center justify-center">
            <BarChart />
          </div>
        </div>
      </div>
      
      {/* Box for LineChart */}
      <h2 className="text-center text-3xl font-bold">Overview</h2>
      <div className="bg-[#EDEADE] border border-[#28282B] rounded-xl pb-6 mx-5 my-12 w-full flex items-center justify-center">
        <div className="h-[50vh] w-full flex items-center justify-center">
          <LineChart />
        </div>
      </div>

      
    </div>
  );
};

export default ProgressCircle;

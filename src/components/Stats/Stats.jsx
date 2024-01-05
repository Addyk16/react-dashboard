import React from "react";
import "./Stats.css";
import { SparkAreaChart } from "@tremor/react";
import { statData } from "../../data/data";

const Stats = ({ text, numbers }) => {
  return (
    <div className="stat">
      <div className="stat-info">
        <span className="stat-text">{text}</span>
        <span className="stat-number">{numbers}</span>
      </div>

      <SparkAreaChart
        data={statData}
        categories={["value"]}
        index={"key"}
        colors={["indigo"]}
        className="h-10 w-16 md:hidden lg:block overflow-hidden"
        showAnimation={true}
        curveType="monotone"
      />
    </div>
  );
};

export default Stats;

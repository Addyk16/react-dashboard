import {
  AreaChart,
  Badge,
  BadgeDelta,
  Card,
  Title,
} from "@tremor/react";
import { graphData } from "../data/data";
import { TrendingUpIcon } from "@heroicons/react/solid";

const valueFormatter = function (number) {
  return (
    "$ " +
    new Intl.NumberFormat("us")
      .format(number)
      .toString()
  );
};

const Graph = () => {
  return (
    <div className="hover:shadow-xl">
      <div className="flex justify-start items-center gap-x-2">
        <span className="text-userColors-clr-primary font-bold">
          Revenue
        </span>
        <Badge icon={TrendingUpIcon} color={"green"}>
          +0.3%
        </Badge>
      </div>

      <AreaChart
        className="h-72 m-2"
        showAnimation={true}
        showGridLines={false}
        curveType="monotone"
        data={graphData}
        index="date"
        yAxisWidth={40}
        categories={["Course Visit", "Course Sale"]}
        colors={["indigo", "red"]}
      />
    </div>
  );
};

export default Graph;

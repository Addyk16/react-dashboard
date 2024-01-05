import {
  AreaChart,
  Badge,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
} from "@tremor/react";
import { barData } from "../data/data";
import { TrendingDownIcon } from "@heroicons/react/solid";

const Bar = () => {
  return (
    <div className="hover:shadow-xl">
      <div className="flex justify-start items-center gap-x-2">
        <span className="text-userColors-clr-primary font-bold">
          Visitors
        </span>
        <Badge icon={TrendingDownIcon} color={"red"}>
          +0.3%
        </Badge>
      </div>
      <BarChart
        className="h-72 m-2"
        categories={["Visitors"]}
        showLegend={false}
        showGridLines={false}
        showAnimation={true}
        yAxisWidth={20}
        data={barData}
        index="name"
        colors={["indigo"]}
      />
    </div>
  );
};

export default Bar;

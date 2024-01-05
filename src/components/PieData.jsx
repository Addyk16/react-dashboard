import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { pieData } from "../data/data";
import { Badge, DonutChart } from "@tremor/react";
import {
  TrendingDownIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";

const PieData = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 border-userColors-clr-black md:border-none">
      <div className="flex justify-start items-center text-userColors-clr-primary">
        <span className="font-bold mr-auto">Sale</span>
        <BsThreeDotsVertical />
      </div>
      <DonutChart
        className="mt-2"
        data={pieData}
        label={`Total Sale: 3500`}
        category="value"
        index="key"
        colors={["orange", "violet"]}
      />
      <div className="flex justify-between text-xs items-center text-userColors-clr-primary-light">
        <span>{pieData[0].key}</span>
        <span>{pieData[0].value}</span>
        <Badge
          icon={TrendingUpIcon}
          color={"green"}
          size="xs">
          +0.3%
        </Badge>
      </div>
      <div className="flex justify-between text-xs items-center text-userColors-clr-primary-light">
        <span>{pieData[1].key}</span>
        <span>{pieData[1].value}</span>
        <Badge
          icon={TrendingDownIcon}
          color={"red"}
          size="xs">
          -0.3%
        </Badge>
      </div>
    </div>
  );
};

export default PieData;

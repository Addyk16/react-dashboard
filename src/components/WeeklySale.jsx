import {
  Badge,
  List,
  ListItem,
  SparkAreaChart,
} from "@tremor/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { statData } from "../data/data";
import queryImg from "../assets/queryImg.jpg";

const WeeklySale = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 border-userColors-clr-black md:border-none">
      <div className="flex justify-start items-center text-userColors-clr-primary">
        <span className="font-bold mr-auto">
          Weekly Sales Stats
        </span>
        <BsThreeDotsVertical />
      </div>
      <SparkAreaChart
        data={statData}
        categories={["value"]}
        index={"key"}
        colors={["violet"]}
        className="h-24 w-full  overflow-hidden "
        showAnimation={true}
        curveType="monotone"
      />
      <div className="flex flex-col content-between h-full gap-3">
        <div className="flex items-center justify-between">
          <div className="img-fit-cover overflow-hidden h-10 w-10">
            <img src={queryImg} alt="data Image" />
          </div>
          <div className="flex flex-col overflow-x-clip">
            <span className="text-userColors-clr-primary font-bold text-[12px]">
              Adobe XD Part 01
            </span>
            <span className="text-userColors-clr-primary-light text-[10px]">
              UI/UX Design
            </span>
          </div>
          <Badge size="xs" color={"green"}>
            $20
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="img-fit-cover overflow-hidden h-10 w-10">
            <img src={queryImg} alt="data Image" />
          </div>
          <div className="flex flex-col">
            <span className="text-userColors-clr-primary font-bold text-[12px]">
              Adobe XD Part 01
            </span>
            <span className="text-userColors-clr-primary-light text-[10px]">
              UI/UX Design
            </span>
          </div>
          <Badge size="xs" color={"green"}>
            $20
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <div className="img-fit-cover overflow-hidden h-10 w-10">
            <img src={queryImg} alt="data Image" />
          </div>
          <div className="flex flex-col">
            <span className="text-userColors-clr-primary font-bold text-[12px]">
              Adobe XD Part 01
            </span>
            <span className="text-userColors-clr-primary-light text-[10px]">
              UI/UX Design
            </span>
          </div>
          <Badge size="xs" color={"green"}>
            $20
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default WeeklySale;

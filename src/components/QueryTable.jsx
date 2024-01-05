import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { queryData } from "../data/data";
import queryImg from "../assets/queryImg.jpg";
import { Badge } from "@tremor/react";

const QueryTable = () => {
  return (
    <div>
      <div className="flex justify-start items-center text-userColors-clr-primary ">
        <span className="font-bold mr-auto">
          Student Queries
        </span>
        <BsThreeDotsVertical />
      </div>
      {/* <div className="grid grid-cols-7 grid-rows-4 content-evenly mt-8">
        {queryData.map((query) => (
          <>
            <div className="col-span-1 img-fit-cover overflow-hidden h-10 w-10">
              <img src={queryImg} alt="query Image" />
            </div>
            <div className="flex flex-col content-between col-span-3">
              <span className="text-userColors-clr-primary font-bold text-[12px]">
                {query.title}
              </span>
              <span className="text-userColors-clr-primary-light text-[10px]">
                {query.subtitle}
              </span>
            </div>
            <Badge
              size="xs"
              color={
                query.status === "View"
                  ? "violet"
                  : "teal"
              }
              className="col-span-2">
              {query.status}
            </Badge>
            <Badge
              color={"red"}
              className="col-span-1">
              Decline
            </Badge>
          </>
        ))}
      </div> */}
      <table className="mt-8 h-64 table-auto w-full">
        <tbody>
          {queryData.map((query) => (
            <tr key={query.id}>
              <td>
                <div className="col-span-1 img-fit-cover overflow-hidden h-10 w-10">
                  <img
                    src={queryImg}
                    alt="query Image"
                  />
                </div>
              </td>
              <td>
                <div className="flex flex-col content-between ">
                  <span className="text-userColors-clr-primary font-bold text-[12px] overflow-hidden">
                    {query.title}
                  </span>
                  <span className="text-userColors-clr-primary-light text-[10px]">
                    {query.subtitle}
                  </span>
                </div>
              </td>
              <td>
                <Badge
                  className="hover:cursor-pointer"
                  size="xs"
                  color={
                    query.status === "View"
                      ? "violet"
                      : "teal"
                  }>
                  {query.status}
                </Badge>
              </td>
              <td>
                <Badge
                  className="hover:cursor-pointer"
                  color={"red"}>
                  Decline
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryTable;

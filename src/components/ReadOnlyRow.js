import React from "react";

const ReadOnlyRow = ({ setter }) => {
  return (
    <div>
      <tr className="w-[333px]">
        <td className="border border-slate-300  w-[333px]">
          {setter.destination}
        </td>
        <td className="border border-slate-300 w-[333px] ">
          {setter.distance}
        </td>
        <td className="border border-slate-300 w-[333px] ">
          {setter.travelTime}
        </td>
      </tr>
    </div>
  );
};

export default ReadOnlyRow;

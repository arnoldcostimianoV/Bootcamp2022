import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="destination"
          placeholder="Enter Planet Here"
          className="w-[300px] border-2 border-black"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="distance"
          required="required"
          placeholder="Enter Distance Here"
          className="w-[300px] border-2 border-black"
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="traveltime"
          required="required"
          placeholder="Enter Estimated Travel Time Here"
          className="w-[300px] border-2 border-black"
        ></input>
      </td>
    </tr>
  );
};

export default EditableRow;

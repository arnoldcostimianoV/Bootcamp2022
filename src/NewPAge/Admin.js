import React, { useState, Fragment } from "react";
import { planets } from "../components/Constant";
import { nanoid } from "nanoid";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

function Admin() {
  const [planet, setPlanet] = useState(planets);
  const [addFormData, setAddFormData] = useState({
    destination: "",
    distance: "",
    traveltime: "",
  });

  const [editPlanetId, setEditPlanetId] = useState(3);
  console.log();
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldname = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldname] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newPlanet = {
      id: nanoid(),
      destination: addFormData.destination,
      distance: addFormData.distance,
      travelTime: addFormData.traveltime,
    };

    const newPlanets = [...planet, newPlanet];
    setPlanet(newPlanets);
  };
  return (
    <div className="bg-mobile-admin h-screen bg-cover text-black">
      <div className="pt-[300px] flex justify-center">
        <div className="bg-white w-[1000px]">
          <h2 className="flex justify-center text-2xl">Add Planet</h2>
          <form
            onSubmit={handleAddFormSubmit}
            className="py-2 px-2 space-x-2 border-2 border-black"
          >
            <input
              type="text"
              name="destination"
              placeholder="Enter Planet Here"
              onChange={handleAddFormChange}
              className="w-[300px] border-2 border-black"
            ></input>
            <input
              type="text"
              name="distance"
              required="required"
              placeholder="Enter Distance Here"
              onChange={handleAddFormChange}
              className="w-[300px] border-2 border-black"
            ></input>
            <input
              type="text"
              name="traveltime"
              required="required"
              placeholder="Enter Estimated Travel Time Here"
              onChange={handleAddFormChange}
              className="w-[300px] border-2 border-black"
            ></input>
            <button type="submit">Add</button>
          </form>
          <form>
            <table class="border-collapse border border-slate-400 text-black">
              <thead>
                <tr>
                  <th class="border border-slate-300 w-[333px] ">Planet</th>
                  <th class="border border-slate-300 w-[333px] ">
                    Average Distance
                  </th>
                  <th class="border border-slate-300  w-[333px]">
                    Estimated Travel
                  </th>
                </tr>
              </thead>

              <tbody className=" absolute bg-white">
                {planet.map((setter) => (
                  <Fragment>
                    {editPlanetId === setter.id ? (
                      <EditableRow />
                    ) : (
                      <ReadOnlyRow setter={setter} />
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;

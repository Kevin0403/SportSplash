// PopupDialog.js

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";

const PopupDialog = ({ team, send, setOnClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedRaidPoint, setSelectedRaidPoint] = useState(0);
  const [selectedTacklePoint, setSelectedTacklePoint] = useState(0);
  const [selectedTechnicalPoint, setSelectedTechnicalPoint] = useState(0);
  const [selectedBonusPoint, setSelectedBonusPoint] = useState(0);
  const [selectedAllOutPoint, setSelectedAllOutPoint] = useState(0);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    data.updateTeam = team;
    send(data);
    // Close the popup dialog after submission
    setOnClose(false);
  };

  const selectRaidPoint = (point) => {
    setSelectedRaidPoint((prevPoint) => (prevPoint === point ? 0 : point));
    setSelectedTacklePoint(0);
  };

  const selectTacklePoint = (point) => {
    setSelectedTacklePoint((prevPoint) => (prevPoint === point ? 0 : point));
    setSelectedRaidPoint(0);
  };

  const selectTechnicalPoint = () => {
    setSelectedTechnicalPoint((prevPoint) =>
      prevPoint === 1 ? 0 : 1
    );
  };

  const selectBonusPoint = () => {
    setSelectedBonusPoint((prevPoint) =>
      prevPoint === 1 ? 0 : 1
    );
  };

  const selectAllOutPoint = () => {
    setSelectedAllOutPoint((prevPoint) =>

      prevPoint === 2 ? 0 : 2
    );
  };



  const isRaidPointSelected = (point) => {
    return selectedRaidPoint === point;
  };

  const isTacklePointSelected = (point) => {
    return selectedTacklePoint === point;
  };


  const isTechnicalPointSelected = (point) => {
    return selectedTechnicalPoint === point;
  };

  const isBonusPointSelected = (point) => {
    return selectedBonusPoint === point;
  }

  const isAllOutPointSelected = (point) => {
    return selectedAllOutPoint === point;
  }

  useEffect(() => {
    setValue(`raidPoints${team}`, selectedRaidPoint);
    setValue(`tacklePoints${team}`, selectedTacklePoint);
    setValue(`technicalPoints${team}`, selectedTechnicalPoint);
    setValue(`bonusPoints${team}`, selectedBonusPoint);
    setValue(`alloutPoints${team}`, selectedAllOutPoint);
  }, [
    selectedRaidPoint,
    selectedTacklePoint,
    selectedTechnicalPoint,
    selectedBonusPoint,
    selectedAllOutPoint,
  ]);

  // Generate raid point buttons
  const raidPointButtons = Array.from({ length: 8 }, (_, i) => i + 1).map(
    (value) => (
      <button
        key={value}
        type="button"
        className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
          isRaidPointSelected(`${value}`)
            ? "bg-green-500 text-white"
            : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
        onClick={() => selectRaidPoint(`${value}`)}
      >
        {value}
      </button>
    )
  );

  // Generate tackle point button
  const tacklePointButton = (
    <button
      key="Tackle"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isTacklePointSelected(1)
          ? "bg-green-500 text-white"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={() => selectTacklePoint(1)}
    >
      Tackle
    </button>
  );

  const technicalPointButton = (
    <button
      key="Technical"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isTechnicalPointSelected(1)
          ? "bg-green-500 text-white"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={() => selectTechnicalPoint(1)}
    >
      Technical
    </button>
  );

  const bonusPointButton = (
    <button
      key="Bonus"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isBonusPointSelected(1)
          ? "bg-green-500 text-white"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={() => selectBonusPoint(1)}
    >
      Bonus
    </button>
  );

  const allOutPointButton = (
    <button
      key="All Out"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isAllOutPointSelected(2)
          ? "bg-green-500 text-white"
          : "bg-blue-500 text-white hover:bg-blue-600"
      }`}
      onClick={() => selectAllOutPoint(2)}
    >
      All Out
    </button>
  );


  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-80">
        
        <h2 className="text-lg font-semibold mb-4">Select Kabaddi Points</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Raid Points
            </label>
            <div className="flex flex-wrap">{raidPointButtons}</div>
          </div>
          <div className="mb-2">
            {/* <label className="block text-sm font-medium text-gray-700">
              Tackle Points
            </label> */}
            <div className="flex flex-wrap">{tacklePointButton}</div>
          </div>
          <div className="mb-2">
            {/* <label className="block text-sm font-medium text-gray-700">
              Technical Points
            </label> */}
            <div className="flex flex-wrap">{technicalPointButton}</div>
          </div>
          <div className="mb-2">
            {/* <label className="block text-sm font-medium text-gray-700">
              Bonus Points
            </label> */}
            <div className="flex flex-wrap">{bonusPointButton}</div>
          </div>
          <div className="mb-2">
            {/* <label className="block text-sm font-medium text-gray-700">
              All Out Points
            </label> */}
            <div className="flex flex-wrap">{allOutPointButton}</div>
          </div>
          <Button
            type="submit"
            className="btn-wide"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PopupDialog;

// PopupDialog.js

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const PopupDialog = ({ onClose }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [selectedRaidPoint, setSelectedRaidPoint] = useState(null);
  const [selectedTacklePoint, setSelectedTacklePoint] = useState(null);
  const [selectedOtherPoint, setSelectedOtherPoint] = useState(null);
    const [selectedTechnicalPoint, setSelectedTechnicalPoint] = useState(null);

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    // Close the popup dialog after submission
    onClose();
  };

  const selectRaidPoint = (point) => {
    setSelectedRaidPoint((prevPoint) => (prevPoint === point ? null : point));
  };
  
  const selectTacklePoint = (point) => {
    setSelectedTacklePoint((prevPoint) => (prevPoint === point ? null : point));
  };

  const selectTechnicalPoint = () => {
    setSelectedTechnicalPoint((prevPoint) => (prevPoint === 'Technical' ? null : 'Technical'));
  };
  
  const selectOtherPoint = (point) => {
    setSelectedOtherPoint((prevPoint) => (prevPoint === point ? null : point));
  };
  

  const isRaidPointSelected = (point) => {
    return selectedRaidPoint === point;
  };

  const isTacklePointSelected = (point) => {
    return selectedTacklePoint === point;
  };

  const isOtherPointSelected = (point) => {
    return selectedOtherPoint === point;
  };

    const isTechnicalPointSelected = (point) => {
    return selectedTechnicalPoint === point;
    };

    useEffect(() => {
        setValue("raidPoints", selectedRaidPoint);
        setValue("tacklePoints", selectedTacklePoint);
        setValue("selectedTechnicalPoint", selectedTechnicalPoint);
        setValue("selectedOtherPoint", selectedOtherPoint);
      }, [selectedRaidPoint, selectedTacklePoint, selectedTechnicalPoint, selectedOtherPoint]);
    

  // Generate raid point buttons
  const raidPointButtons = Array.from({ length: 8 }, (_, i) => i + 1).map((value) => (
    <button
      key={value}
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isRaidPointSelected(`${value}`) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      onClick={() => selectRaidPoint(`${value}`)}
    >
      {value}
    </button>
  ));

  // Generate tackle point button
  const tacklePointButton = (
    <button
      key="Tackle"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isTacklePointSelected('Tackle') ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      onClick={() => selectTacklePoint('Tackle')}
    >
      Tackle
    </button>
  );

  const technicalPointButton = (
    <button
      key="Technical"
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isTechnicalPointSelected('Technical') ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      onClick={() => selectTechnicalPoint('Technical')}
    >
      Technical
    </button>
  );

  // Generate other point buttons
  const otherPointButtons = ['All Out', 'Bonus'].map((value) => (
    <button
      key={value}
      type="button"
      className={`py-2 px-4 rounded-md mr-2 mb-2 focus:outline-none ${
        isOtherPointSelected(value) ? 'bg-green-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
      onClick={() => selectOtherPoint(value)}
    >
      {value}
    </button>
  ));

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-80">
        <h2 className="text-lg font-semibold mb-4">Select Kabaddi Points</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Raid Points</label>
            <div className="flex flex-wrap">{raidPointButtons}</div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tackle Points</label>
            <div className="flex flex-wrap">{tacklePointButton}</div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Technical Points</label>
            <div className="flex flex-wrap">{technicalPointButton}</div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Other Points</label>
            <div className="flex flex-wrap">{otherPointButtons}</div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupDialog;

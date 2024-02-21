import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FloatingInput from "../FloatingInput";
import { useForm } from "react-hook-form";
import Button from "../Button";
import authService from "../../connection/auth";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function CreateUserMatch() {
  const game = useParams().game;
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [editDateTime, setEditDateTime] = useState(false);
  const [editTeam1, setEditTeam1] = useState(false);
  
  const navigate = useNavigate()  
  const user = useSelector((state) => state.auth.userData)
  
  const [data, setData] = useState({
    tournament : {
      isdefault : true,
      user,
      game : game.toUpperCase()
    }
  });
  const submitDateTime = (data) => {
    setData((d) => ({ ...d, ...data }));
    setEditDateTime(true);
    setStep((s) => s + 1);
  };

  const submitTeams = async (matchData) => {
    await setData((d) => ({ ...d, ...matchData }));
    try {
      const match = await authService.createUserMatch({...data,...matchData});

      if (match) {
        toast.success("Match Created Successfully");
        navigate(`/match/${game.toUpperCase()}/${match.id}`)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="m-2 mt-5">
      {step >= 1 && (
        <form
          className=" max-w-lg mx-auto"
          onSubmit={handleSubmit(submitDateTime)}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <FloatingInput
              label="Start Date"
              type="date"
              defaultValue={data.startDate}
              readonly={editDateTime}
              {...register("startDate", {
                required: "Start Date is Required",
                // validate: {
                //   matchPatern: (date) =>
                //     new Date(date) >= new Date() || "Please enter a valid date",
                // },
              })}
              error={errors.startDate}
            />
            <FloatingInput
              label="Start Time"
              type="time"
              readonly={editDateTime}
              defaultValue={data.startTime}
              {...register("startTime", {
                required: "Start Time is Required",
              })}
              error={errors.startTime}
            />
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <FloatingInput
              label="Team Size"
              type="number"
              defaultValue={data.teamSize}
              readonly={editDateTime}
              {...register("teamSize", {
                required: "Team Size is Required",
              })}
              error={errors.teamSize}
            />
            {editDateTime && (
              <Button
                type="Button"
                onClick={(e) => {
                  setEditDateTime(false);
                  setStep(1);
                }}
              >
                Edit
              </Button>
            )}
          </div>

          {editDateTime || (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          )}
        </form>
      )}

      {step >= 2 && (
        <form
          className=" max-w-lg mx-auto"
          onSubmit={handleSubmit(submitTeams)}
        >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="">
              <FloatingInput
                label="Team1"
                type="text"
                {...register("team1.name")}
                error={errors.team1?.name}
              />
              <div className="ps-5">
                {Array.from({ length: data.teamSize }, (_, index) => (
                  <FloatingInput
                    key={index}
                    label={`Player ${index + 1}`}
                    type="text"
                    {...register(`team1.players.${index}.name`)}
                    error={errors.team1?.players?.[index]?.name}
                  />
                  ))}
              </div>
            </div>
            <div>
              <FloatingInput
                label="Team2"
                type="text"
                {...register("team2.name", {
                  required: "Team Name is Required",
                })}
                error={errors.team2?.name}
              />
              <div className="ps-5">
                {Array.from({ length: data.teamSize }, (_, index) => (
                  <FloatingInput
                    key={index}
                    label={`Player ${index + 1}`}
                    type="text"
                    {...register(`team2.players.${index}.name`, {
                      required: "Player Name is Required",
                    })}
                    error={errors.team2?.players?.[index]?.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {editTeam1 || (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          )}
        </form>
      )}
    </div>
  );
}

export default CreateUserMatch;

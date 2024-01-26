import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Input, Select } from "../../index";
import authService from "../../../connection/auth";
import { ArrowRight } from "lucide-react";

function CreateMatch() {

  const location = useLocation()
  const match = location.state


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [teams, setTeams] = useState([]);
  const { tournamentId } = useParams();

  async function fetch(id) {
    try {
      const teamsData = await authService.getTeams(id);
      setTeams(teamsData);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    try {
      fetch(tournamentId);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const submit = async (data) => {
    try {
      if(!match){
        if(data.team1 === data.team2){
            throw new Error("Both Team doesn't have same value")
        }else{
            const match = authService.createBedmintanMatch(data, tournamentId)
            if(match){
              toast.success("Match Created")
            }
        }
      }
      else{
        match.team1 = {
          id : data.team1
        }
        match.team2 = {
          id : data.team2
        }
        match.startDate = data.startDate
        match.startTime = data.startTime
        const d = await authService.updateBedmintanMatch(match)
        if(d){
          toast.success("Match Updated")
        }
      }

    } catch (error) {
      console.log(error)
        toast.error(error.message)
    }
  };

  return (
    <div className="flex items-center justify-center  px-4 sm:px-6 sm:py-10 lg:px-8 ">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          {!match ? 'Create A New Match' : 'Update Match'}
        </h2>

        <form onSubmit={handleSubmit(submit)} className="mt-8">
          <div className="flex flex-row flex-wrap w-full">
            <Select
            label = 'Team 1'
            setbyid = {true}
            defaultValue = {match?.team1?.id }
            divClass = " basis-1/2 pr-2"
              options={teams.map((team) => ({
                id: team.id,
                value: team.name,
              }))}
              // label="game"
              {...register("team1", {
                required: "team1 is required",
              })}
            />
            <Select
            label = 'Team 2'
            setbyid = {true}
            defaultValue = {match?.team2?.id }
            divClass = " basis-1/2 pr-2"
              options={teams.map((team) => ({
                id: team.id,
                value: team.name,
              }))}
              {...register("team2", {
                required: "team 2 is required",
              })}
            />
          </div>

          <div className='flex flex-row flex-wrap w-full'>
            <Input 
              label = "Start-Date"
              placeholder = ""
              type = "date"
              defaultValue = {(match?.startDate) || ''}
              divClass = " basis-1/2 pr-2"
              {...register("startDate", {
                required: "Starting Date is required is required"
              })}
            />
            <Input 
              label = "Start-Time"
              placeholder = "time"
              type = 'time'
              defaultValue = {(match?.startTime)  || ''}
              divClass = "basis-1/2 "
              {...register("startTime", {
                required: "Start Time is required"
              })}
            />
          </div>
          <Button className="mt-3" type="submit" >
          {match ? 'Upadate' :'Create'} <ArrowRight className="ml-2" size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateMatch;

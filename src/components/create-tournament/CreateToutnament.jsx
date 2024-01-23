import React , {useEffect}from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Select } from '../index';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../connection/auth';
import { setData, setIsAdmin } from '../../store/tournamentslice';

function CreateTournament() {

    const { register, handleSubmit, formState: { errors} } = useForm();

    const user = useSelector((state) => state.auth.userData)

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const Games = ["Cricket", "Bedmintan", "Table Tennis"]

    const errorMessage = () =>{
      for (const error of Object.entries(errors)) {
        toast.error(error[1].message);
      }
    }

    useEffect(()=>{
      errorMessage();
    }, [errors])  


    const createTournament = async (data) => {
      try{
        const tournamentData =await authService.createTournament(data, user);
        if(tournamentData){
          dispatch(setData(tournamentData))
          dispatch(setIsAdmin(true))
          toast.success("Tournament Created Successfully");
          navigate(`/tournament/${tournamentData.id}`);
        }
      }
      catch(error){
        toast.error(error.message);
      }
    }


    return (
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
        Create Your Own Tournament
        </h2>
        
        <form onSubmit={handleSubmit(createTournament)} className="mt-8">

        <Select
            options={Games}
            // label="game"
            {...register("game", {
              required: "Game is required is required",
            })}
          />
          <Input 
          label="Tourament Name"
          placeholder="Tournament Name"
          type="tournamentName"
          {...register("tournamentName", {
              required: "Tournament Name is required",
          })}
          />

          {/* <Input
            label="Banner :"
            placeholder= "Upload Banner"
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("banner", { required: "Banner is required"})}
          /> */}

          <div className='flex flex-row flex-wrap w-full'>
            <Input 
              label = "Start-Date"
              placeholder = "Start-Date"
              type = "date"
              divClass = " basis-1/2 pr-2"
              {...register("startDate", {
                required: "Start Date is required"
              })}
            />
            <Input 
              label = "End-Date"
              placeholder = "End-Date"
              type = "date"
              divClass = "basis-1/2"
              {...register("endDate", {
                required: "End Date is required"
              })}
            />
          </div>
          <div className='flex flex-row flex-wrap w-full mt-2'>
            <Input 
            divClass = "basis-1/2 pr-2"
            label="Number of Teams"
            placeholder="Number of Teams"
            type="number"
            {...register("teams", {
                required: "Number of Teams is required",  
                validate: {
                    matchPatern: (value) => value >= 2 ||
                    "Number of teams must be more than one",
                }
            })}
            />
            <Input 
            divClass = "basis-1/2"
            label="Team Size"
            placeholder="Players per Team"
            type="number"
            {...register("teamSize", {
                required: "Number of players per team is required",
                validate: {
                    matchPatern: (value) => value >= 2 ||
                    "Number of players per team must be more than one",
                }
            })}
            />
          </div>
          
          <Button className="mt-3" type="submit" onClick = {errorMessage}>
            Create Tournament
          </Button>
        </form>
      </div>
    </div>
    );
}   

export default CreateTournament;
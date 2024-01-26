import React, { useState, useEffect } from "react";
import Players from "../Players/Players";
import Button from "../../Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FilePenLine, Save, X } from "lucide-react";
import { Input } from "../../index";
import { useSelector } from "react-redux";
import authService from '../../../connection/auth'
import { useParams } from "react-router-dom";

function Team({ id, name, isNew, setData }) {
  const [show, setShow] = useState(false);

  const isAdmin = useSelector((state) => (state.tournament.isAdmin))
  const {tournamentId} = useParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      id: id,
    },
  });

  const [isEditable, setIsEditable] = useState(isNew);


// foe toogle the players
  const toogle = () => {
    if (!isEditable) {
      setShow((show) => !show);
    }
  };

  // It will called whenever form is submited
  async function submit(data) {
    toogle();
    if(!isEditable)
      return
    try {
      //TODO : Call method for add team in database :: also handle the isNew submission.
      if(isNew){
        const teamData = await authService.createTeam(data, tournamentId) 
        setData((data) => data.map((data) => {
          if(data.id === id){
            return teamData
          }
          return data
        }))
      toast.success("Team Created Successfully");
      }
      else{
        //TODO : Call method for change team in database
        const updatedVal = {
          id,
          name : data.name,
          tournament : {
            id : tournamentId
          }
        }
        const teamData = await authService.updateTeam(updatedVal)
        setData((data) => data.map((data) => {
          if(data.id === id){
            return teamData
          }
          return data
        }))
        
        toast.success("team Updated Successfully")
      }


      setIsEditable(false);
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  }

  //  It will called when user want to edit the details
  function editTeam(e) {
    toogle();
    setIsEditable(true);
  }

  //   It will called when user want to delete the player
  async function deleteTeam() {
    toogle();
    try {
      //TODO : Call method for add team in database
      if(!isNew){
      await authService.deleteTeam(id)
    }
      setData((data) => data.filter((data) => data.id !== id))
      toast.success("Team Deleted Successfully")

    } catch (error) {
      toast.error(error);
    }
  }

  const errorMessage = () =>{  
    for (const error of Object.entries(errors)) {
      toast.error(error[1].message);
    }
  }

  useEffect(()=>{
    errorMessage();
  }, [errors])

  return (
    <div>
      <div onClick={toogle} className="flex flex-row ">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex-grow flex flex-row items-center"
        >
          <Input
            divClass="inline-block flex-grow"
            className=" "
            placeholder="Enter Team name"
            defaultValue={name}
            readOnly={!isEditable}
            {...register("name", {
              required: "Team name is required",
              validate: {
                matchPatern: (value) => /^[a-zA-Z0-9\s\-_]+$/.test(value) ||
                "Enter a valid name",
            }
            })}
          />

          {isAdmin && isEditable && (
            <Button type="submit" className="w-max" onClick={errorMessage} divClass="inline-block">
              <Save />
            </Button>
          )}
        </form>
        <div>
          {isAdmin &&
            (isEditable || (
              <Button
                placeholder="Enter Team Name"
                type="button"
                onClick={editTeam}
                className=" w-max"
                divClass="inline-block"
              >
                <FilePenLine />
              </Button>
            ))}
          {isAdmin && (
            <Button
              type="button"
              onClick={deleteTeam}
              className="w-max "
              divClass="inline-block"
            >
              <X />
            </Button>
          )}
        </div>
      </div>
      {show && <Players isAdmin={isAdmin} id={id} />}
    </div>
  );
}

export default Team;

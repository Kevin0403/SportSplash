import React, { useState, useEffect } from "react";
import { Button, Input } from "../../index";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FilePenLine, Save, X } from "lucide-react";
import { useSelector } from "react-redux";
import authService from "../../../connection/auth";
import { useParams } from "react-router-dom";

function Player({ team, name, id, isNew = false, setData }) {
  const isAdmin = useSelector((state) => state.tournament.isAdmin);
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

  // It will called whenever form is submited
  async function submit(data) {
    if (!isEditable) return;
    try {
      //TODO : Call method for add team in database
      if (isNew) {
        const playerData = await authService.createPlayer(data, team.id);
        setData((data) =>
          data.map((data) => {
            if (data.id === id) {
              console.log(playerData);
              return playerData;
            }
            return data;
          })
        );
        toast.success("Player Created Successfully");
      } else {
        //TODO : Call method for change team in database
        // const playerData = await authService.updatePlayer(data, teamId)
        // setData((data) => data.map((data) => {
        //   if(data.id === id){
        //     return playerData
        //   }
        //   return data
        // }))
      }

      setIsEditable(false);
    } catch (error) {
      toast.error(error);
    }
  }

  //  It will called when user want to edit the details
  function editPlayer(e) {
    setIsEditable(true);
  }

  //   It will called when user want to delete the player
  async function deletePlayer() {
    try {
      //TODO : Call method for add team in database
      if (!isNew) {
        await authService.deletePlayer(id);
      }
      setData((data) => data.filter((data) => data.id !== id));
      toast.success("Player Deleted Successfully");
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
    <div className="flex flex-row m-2  items-center">
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-row items-center"
      >
        <Input
          divClass="inline-block"
          placeholder="Enter player name"
          defaultValue={name}
          readOnly={!isEditable}
          {...register("name", {
            required: "Name is required",
          })}
        />

        {isAdmin && isEditable && (
          <Button type="submit" onClick= {errorMessage} className="w-max" divClass="inline-block">
            <Save />
          </Button>
        )}
      </form>
      <div>
        {isAdmin &&
          (isEditable || (
            <Button
              type="button"
              onClick={editPlayer}
              className=" w-max"
              divClass="inline-block"
            >
              <FilePenLine />
            </Button>
          ))}
        {isAdmin && (
          <Button
            type="button"
            onClick={deletePlayer}
            className="w-max "
            divClass="inline-block"
          >
            <X />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Player;

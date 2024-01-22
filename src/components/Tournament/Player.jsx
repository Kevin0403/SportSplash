import React, { useState } from "react";
import { Button, Input } from "../index";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { FilePenLine, Save, X } from "lucide-react";

function Player({teamId, name, id, isNew = false , isAdmin = true}) {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: name,
      id: id,
    }
  });



  const [isEditable, setIsEditable] = useState(isNew);


// It will called whenever form is submited
  async function submit(data) {
    if(!isEditable)
      return
    try {
      //TODO : Call method for add team in database


      toast.success("Player Created Successfully")
      setIsEditable(false)
    } catch (error) {
      toast.error(error);
    }
  }

//  It will called when user want to edit the details
  function editPlayer(e) {
    setIsEditable(true)
  }

//   It will called when user want to delete the player
  async function deletePlayer() {
    try {
      //TODO : Call method for add team in database
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="flex flex-row m-2  items-center">
      <form onSubmit={handleSubmit(submit)} className="flex flex-row items-center">
        <Input
        divClass = "inline-block"
          placeholder="Enter player name"
          defaultValue={name}
          readOnly={!isEditable}
          {...register("name", {
            required: "Name is required",
          })}
        />

        {isAdmin && isEditable && <Button type="submit" className="w-max" divClass="inline-block"><Save /></Button>}
        
      </form>
      <div>
      {isAdmin && (isEditable || <Button type="button" onClick= {editPlayer} className=" w-max" divClass="inline-block"><FilePenLine /></Button>)}
      {isAdmin && (  <Button type="button" onClick= {deletePlayer} className="w-max " divClass="inline-block"><X /></Button>)}
      </div>
    </div>
  );
}

export default Player;

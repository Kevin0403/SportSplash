import React, { useState } from "react";
import { Button, Input } from "../index";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function Player({teamId, name, id, updatable = false , isAdmin}) {
    
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



  const [isEditable, setIsEditable] = useState(updatable);
  const [admin, setAdmin] = useState(false);


// It will called whenever form is submited
  async function submit() {
    updatable = false
    try {
      //TODO : Call method for add team in database


      setIsEditable(false)
      toast.success("Player Created Successfully")
    } catch (error) {
      toast.error(error);
    }
  }

//  It will called when user want to edit the details
  function editPlayer() {
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
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          placeholder="Enter player name"
          default={name}
          readOnly={!isEditable}
          {...register("name", {
            required: "Name is required",
          })}
        />

        {isAdmin && isEditable && <Button type="submit">{updatable ? 'Create' : 'Update'}</Button>}
        {isAdmin && (<Button type="submit" onClick={deletePlayer}>
          Delete
        </Button>)}
      </form>
      {isAdmin && isEditable || <Button type="button" onClick= {editPlayer}>Edit</Button>}
    </div>
  );
}

export default Player;

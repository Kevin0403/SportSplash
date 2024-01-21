import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Players from './players';
import Button from '../Button';

function Team({
    id,
    name,
    isAdmin
}) {
  const [show, setShow] = useState(false);

  const toogle = () => {
    setShow((show) => !show)
    };

  return (
    <>
    <div onClick={toogle}>
        <h1>{name}</h1> 

        {show && (<Players isAdmin={isAdmin} id = {id}/>)}

    </div>
    </>
  )
}

export default Team
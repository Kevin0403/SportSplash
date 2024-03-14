import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ShowProfileTabs } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { logout as userLogout } from "../store/authslice";
import { toast } from "sonner";

function Profile() {
  const user = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    // console.log(e);
    // e.target.disabled = true;
    localStorage.clear();
    dispatch(userLogout());
    toast.success("Logout Success");
    
    navigate("/");
    // e.target.disabled = false;
  }

  return (
    <div className="flex flex-col h-full justify-center min-h-[50vh] lg:flex-row">
      <div className="flex flex-row justify-center flex-wrap lg:flex-none items-center bg-card lg:min-h-[70vh] p-8 lg:flex-col  lg:justify-start">
        <div className="avatar mx-5">
          <div className=" w-36 mask mask-squircle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="text-center">
          <h2 className=" text-2xl font-mono font-bold">
            {user.fname} {user.lname}
          </h2>
          <p>{user.email}</p>
        </div>
        <div className="link text-blue-600 visited:text-purple-600 mx-4 text-center">
          <div>
            <Link to="/create/tournament">
              <a href="">Create Tournament</a>
            </Link>
          </div>
          <div>
            <Link to="/create/tournament">
              <a href="">Create Match</a>
            </Link>
          </div>
        </div>
        <div>
          <Button  onClick={logout}> Logout </Button>
        </div>
      </div>
      <div className="flex-1 h-full lg:min-h-[50vh]">
        <ShowProfileTabs/>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import SportSplashLogo from '/SportSplash.png'

function Logo() {
  return (
    <div>
      <span>
        <img className=" h-10 p-1" src={SportSplashLogo} alt="logo" />
      </span>
    </div>
  );
}

export default Logo;

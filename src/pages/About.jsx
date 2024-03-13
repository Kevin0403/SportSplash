import React, { useState } from "react";
import {Button, Input} from '../components';

const About = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const onStart = () => {
    setIsRunning(true);
  };

  const onStop = () => {
    setIsRunning(false);
  };

  const onReset = () => {
    setTimer(0);
  };

  return (<></>
//     <div className="mt-5">
//       <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">Login now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form className="card-body">
//         <div className="form-control">
//           {/* <label className="label">
//             <span className="label-text">Email</span>
//           </label> */}
//           <Input label="Email" type="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           {/* <label className="label">
//             <span className="label-text">Password</span>
//           </label> */}
//           <Input label="Password" type="password" placeholder="password" className="input input-bordered" required />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <Button className="btn btn-wide">Login</Button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//     </div>
  );
};

export default About;
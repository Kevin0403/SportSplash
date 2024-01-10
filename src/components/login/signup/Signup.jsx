import React, { useEffect } from 'react';
import { Button, Input, Select } from '../../index';
import { Link, useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify';
import authService from '../../../connection/auth';
import { useDispatch } from 'react-redux';
import {login} from "../../../store/authslice"
// import { ArrowRight } from 'lucide-react'

function Signup() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors} } = useForm();
  const dispatch = useDispatch();

  const errorMessage = () =>{
    for (const error of Object.entries(errors)) {
      toast.error(error[1].message);
    }
  }

  useEffect(()=>{
    errorMessage();
  }, [errors])

  const login = async (data) => {
    
    try {
      const userData = await authService.createUser(data);
      if(userData){
        const userData = await authService.login(data);
        if(userData){
            dispatch(login(userData));
            toast.success("Login Success");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }

  }



  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
          <img className=' h-10' src='/SportSplash.png' alt="logo" />
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
        Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-600">
        Already have an account?{' '}
          <Link 
              to = '/signin'
              className='font-medium text-black transition-all duration-200 hover:underline'
            >Sign In</Link>
        </p>
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className='flex flex-row flex-wrap w-full'>
            <Input 
              label = "First Name"
              placeholder = "Fist Name"
              type = "text"
              divClass = " basis-1/2"
              {...register("firstName", {
                required: "First Name is required"
              })}
            />
            <Input 
              label = "Last Name"
              placeholder = "Last Name"
              type = "text"
              divClass = "basis-1/2"
              {...register("lastName", {
                required: "Last Name is required"
              })}
            />
          </div>
          <Input 
          label="Phone Number"
          placeholder="Phone"
          type="email"
          {...register("phone", {
              required: "Phone number is required",
              validate: {
                  matchPatern: (value) => /^\d{10}$/.test(value) || "Phone number must be 10 digits",
              }
          })}
          />
          <Input 
          label="Email"
          placeholder="Email"
          type="email"
          {...register("email", {
              required: "Email is required",
              validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
          })}
          />
          <Select
            options={["DDU", "Nirma"]}
            label="College"
            {...register("college", {
              required: "College is required",
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
                required: "Password is required",
            })}
            />
          <Button className="mt-3" type="submit">
            Create Account 
            {/* <ArrowRight className="ml-2" size={16} /> */}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
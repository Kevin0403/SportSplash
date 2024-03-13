import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import Input from "../Input"
import Button from "../Button"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    console.log("Form Data - ", data)
    // try {
    //   setLoading(true)
    //   const res = await apiConnector(
    //     "POST",
    //     contactusEndpoint.CONTACT_US_API,
    //     data
    //   )
    //   // console.log("Email Res - ", res)
    //   setLoading(false)
    // } catch (error) {
    //   console.log("ERROR MESSAGE - ", error.message)
    //   setLoading(false)
    // }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          {/* <label htmlFor="firstname" className="lable-style">
            First Name
          </label> */}
          <Input
          label="First Name"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="form-style"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-red-500">
              Please enter your name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          {/* <label htmlFor="lastname" className="lable-style">
            Last Name
          </label> */}
          <Input
            label="Last Name"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="form-style"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* <label htmlFor="email" className="lable-style">
          Email Address
        </label> */}
        <Input
            label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-red-500">
            Please enter your Email address.
          </span>
        )}
      </div>
{/*  */}

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="form-style rounded-md border border-gray-300 bg-input px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:bg-input-focus focus:ring-gray-700 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-red-500">
            Please enter your Message.
          </span>
        )}
      </div>

      <Button
        disabled={loading}
        type="submit"
        className={`rounded-md  px-6 py-3 text-center text-[13px] font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </Button>
    </form>
  )
}

export default ContactUsForm
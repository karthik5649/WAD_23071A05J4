import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function Register() {

    const { register, handleSubmit, reset ,formState : {errors} } = useForm()
    const [users,setUsers] = useState([])

    function onSubmit(obj){
        setUsers([...users,obj])
        localStorage.setItem("users",JSON.stringify([...users]))
        reset()
    }

    console.log("users : ",JSON.parse(localStorage.getItem("users")))

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-50">

                {/* Name */}
                <div>
                    <label className="block mb-1 form-label">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full border px-3 py-2 rounded form-control"
                        placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 form-label">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required"
                        })}
                        className="w-full border px-3 py-2 rounded form-control"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div>
                    <label className="block mb-1 form-label">Password</label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className="w-full border px-3 py-2 rounded form-control"
                        placeholder="Enter your password"
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                {/* <div>
                    <label className="block mb-1">Confirm Password</label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                        })}
                        className="w-full border px-3 py-2 rounded"
                        placeholder="Re-enter your password"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                    )}
                </div> */}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register

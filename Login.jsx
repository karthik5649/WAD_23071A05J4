import React from 'react'
import { useForm } from 'react-hook-form'

function Login() {

    const {handleSubmit,formState:{errors},register} = useForm()

    function onSubmit(obj){
        console.log(obj)
        
    }

    console.log(JSON.parse(localStorage.getItem("users")))

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-50">

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

export default Login

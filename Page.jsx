import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Page() {

    const {handleSubmit,formState:{errors},register} = useForm()
    const [output,setOutput] = useState("")

    function onsubmit(obj){
        setOutput("")
        if(obj.cgpa >= 8.5){
            setOutput("You are eligible for placement drive")
        }else{
            setOutput("You are not eligible for placement drive")
        }
    }

  return (
    <div className='m-5'>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4 w-50" >
            <div>
                <label className='block mb-1 form-label'>
                    Enter your CGPA
                </label>
                <input
                        {...register("cgpa", {
                            required: "Email is required"
                        })}
                        className="w-full border px-3 py-2 rounded form-control"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.cgpa.message}</p>}
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
                        <h6>{output}</h6>
    </div>
  )
}

export default Page

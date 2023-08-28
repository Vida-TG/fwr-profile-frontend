import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { emailSchema } from "../../schemas";
import { useNavigate } from "react-router";

const Email = ()=>{
    const navigate = useNavigate()
    const { handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailSchema,
        onSubmit: (values)=>{            
            sessionStorage.setItem('email', JSON.stringify(values))
            navigate('/register/password')
        }
    })
    return (
        <div className="email">
            <div onClick={()=>navigate('/')} className="btn-back py-2 px-2 border rounded-circle cursor-pointer">
                <img src={require('../../assets/cancel_icon.png')} />
            </div>   
            <div className="d-flex justify-content-center mx-auto">
                <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4 animate__animated animate__fadeIn animate__slow">
                    <div className="d-flex justify-content-center mt-4 mt-md-0">
                        <img src={require("../../assets/9jaWivesLogo.png")} />
                    </div>
                    <p className="fs-4 pt-5 text-center fw-bold-0">Enter your email address</p>                
                    <FormControl error={errors.email && touched.email} variant="outlined" className="w-100 text-white my-2" color="warning">
                        <InputLabel className="text-white">Email Address</InputLabel>
                        <OutlinedInput name="email" onChange={handleChange} onBlur={handleBlur} className="text-white" label='Email Address' />
                    </FormControl> 
                    <div className="d-flex justify-content-center">
                        <Button type="submit" className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 mt-3 rounded-pill w-75">
                            Continue
                        </Button>
                    </div>
                    <p className="text-end pe-5 pt-2"><a href="/login" className="text-fwr">Have an account? </a></p>
                    <div className="pt-5 box-bottom">
                        <p className="text-center fs-6 fw-bold-0">By registering, you accept our <a className="text-fwr" href="#">terms and privacy policy</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Email
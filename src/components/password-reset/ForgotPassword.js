import { Alert, Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { emailSchema } from "../../schemas";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const ForgotPassword = ()=>{
    const api = useSelector(state=>state.uri)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailSchema,
        onSubmit: (values)=>{
            setError('')
            setIsLoading(true)
            axios.post(
                `${api}verify/forgot-password`,
                values
            ).then(res=>{
                setIsLoading(false)
                if (res.data.status) {
                    sessionStorage.setItem('email', JSON.stringify(res.data.email))
                    navigate('/reset/otp')
                } else {
                    setError(res.data.message)
                }
            }).catch(err=>{
                setIsLoading(false)
                setError('Internal Server Error')
            })
        }
    })
    return (
        <div className="forgot-password d-flex justify-content-center mx-auto pb-5">
            <div className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require('../../assets/9jaWivesLogo.png')} />
                </div>
                <p className="fs-4 pt-5 fw-bold-0">Forgot your password?</p>
                {
                    error !== ''
                    &&
                    <Alert severity="error" className="mb-2">
                        {error}
                    </Alert>
                }
                <p className="fs-7">
                    Enter the Email you used in registering and we will help you reset your password
                </p>
                <FormControl error={errors.email && touched.email} variant="outlined" className="w-100 my-2" color="warning">
                    <InputLabel className="text-white">Email Address</InputLabel>
                    <OutlinedInput name="email" onChange={handleChange} onBlur={handleBlur} label='Email Address' className="text-white" />
                </FormControl>
                <div className="d-flex justify-content-center pb-5 mt-2">
                    <Button onClick={handleSubmit} type="submit" className={isLoading ? 'border border-fwr mb-5 fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr mb-5 fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'}>
                        {isLoading ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>        
            </div>
        </div>
    )
}

export default ForgotPassword
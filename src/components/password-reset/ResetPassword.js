import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { passwordSchema } from "../../schemas";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const ResetPassword = ()=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.uri)
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const {handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: passwordSchema,
        onSubmit: (values)=>{            
            setIsLoading(true)
            setError('')
            console.log(values)
            axios.put(
                `${api}verify/reset-password`,
                values,
                {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('reset-token'))}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            ).then(res=>{
                // navigate('/success/password-reset')
                console.log(res.data)
            }).catch(err=>{
                setIsLoading(false)
                err.code == 'ERR_NETWORK' 
                ? 
                setError('Something went wrong. Try again!') 
                : 
                navigate('/reset/forgot-password')
            })
        }
    })

    return (
        <div className="reset d-flex justify-content-center mx-auto">
            <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require('../../assets/9jaWivesLogo.png')} />
                </div>
                <p className="fs-4 pt-5 text-center fw-bold-0">Reset Password</p>
                <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel htmlFor="outlined-adornment-password" className="text-white">Enter your new password</InputLabel>
                    <OutlinedInput
                        error={errors.password && touched.password}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        className="text-white"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}                  
                            edge="end"
                            className="text-white"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Enter your new password"
                    />
                    <FormHelperText className="text-white">
                        At least <span className="fw-bold-0">9 characters</span> containing <span className="fw-bold-0">a letter</span> and <span className="fw-bold-0">a number</span>
                    </FormHelperText>
                </FormControl>
                <div className="d-flex justify-content-center mt-5 mx-auto">
                    <Button type="submit" className={isLoading ? 'border border-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'}>
                        {isLoading ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>      
            </form>
        </div>
    )
}

export default ResetPassword
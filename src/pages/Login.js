import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Login = ()=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.uri)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)    
    const { handleSubmit, handleBlur, handleChange, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values)=>{
            setError('')
            setIsLoading(true)
            axios.post(
                `${api}auth/login`,
                values
            ).then(res=>{
                setIsLoading(false)
                console.log(res.data)
                if (res.data.status) {
                    sessionStorage.setItem('token', JSON.stringify(res.data.token))
                    navigate('/user/statement-of-account')
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
        <div className="login d-flex justify-content-center mx-auto">            
            <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4 animate__animated animate__fadeIn">
                <div className="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require("../assets/9jaWivesLogo.png")} />
                </div>
                <p className="fs-4 pt-5 fw-bold-0">Login to your account</p>
                {
                    error !== ''
                    &&
                    <Alert severity="error" className="mb-3">
                        {error}
                    </Alert>
                }                
                <FormControl error={touched.email && errors.email} variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel className="text-white">Email Address</InputLabel>
                    <OutlinedInput onChange={handleChange} onBlur={handleBlur} name="email" className="text-white" label='Email Address' />
                </FormControl>            
                <FormControl error={touched.password && errors.password} variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel htmlFor="outlined-adornment-password" className="text-white">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="text-white"
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
                        label="Password"
                    />
                </FormControl>
                <div className="d-flex justify-content-center my-2">
                    <Button type="submit" className={isLoading ? 'fw-bold-0 mx-auto text-white mx-2 rounded-pill w-75 border border-fwr px-5 py-2' : 'fw-bold mx-auto text-white mx-2 px-5 py-2 rounded-pill w-75 bg-fwr'} >
                        {isLoading ? 'Please wait...' : 'Login'}
                    </Button>
                </div>
                <p className="text-end pe-5 pt-2"><a href="/register/email" className="text-fwr">Don't have an account? </a></p>
                <div className="pt-5 box-bottom">
                    <p className="text-center fs-6 fw-bold-0"><a className="text-fwr" href="/reset/forgot-password">Forgot password</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login
import { Alert, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";

const Login = ()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const login = ()=>{}
    return (
        <div className="login d-flex justify-content-center mx-auto">            
            <form onSubmit={login} className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require("../assets/9jaWivesLogo.png")} />
                </div>
                <p className="fs-4 pt-5 fw-bold-0">Login to your account</p>
                {/* <Alert severity="error">
                    {error}
                </Alert> */}
                {/* <TextField variant="outlined" label='Email' className="w-100 text-white my-2" color="warning" /> */}
                <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel className="text-white">Email Address</InputLabel>
                    <OutlinedInput className="text-white" label='Email Address' />
                </FormControl>            
                <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel htmlFor="outlined-adornment-password" className="text-white">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        className="text-white"
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
                    <Button type="submit" className={isLoading ? 'fw-bold mx-auto text-white mx-2 rounded-pill w-75 border border-fwr' : 'fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75 bg-fwr'} >
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
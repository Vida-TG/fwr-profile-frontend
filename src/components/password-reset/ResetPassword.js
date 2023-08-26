import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

const ResetPassword = ()=>{
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="reset d-flex justify-content-center mx-auto">
            <div className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require('../../assets/9jaWivesLogo.png')} />
                </div>
                <p className="fs-4 pt-5 text-center fw-bold-0">Reset Password</p>
                <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel htmlFor="outlined-adornment-password" className="text-white">Enter your new password</InputLabel>
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
                        label="Enter your new password"
                    />
                    <FormHelperText className="text-white">
                        At least <span className="fw-bold-0">9 characters</span> containing <span className="fw-bold-0">a letter</span> and <span className="fw-bold-0">a number</span>
                    </FormHelperText>
                </FormControl>
                <div className="d-flex justify-content-center mt-5">
                    <Button className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75">
                        Continue
                    </Button>
                </div>        
            </div>
        </div>
    )
}

export default ResetPassword
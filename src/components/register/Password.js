import { Alert, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Password = ()=>{
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div class="password d-flex justify-content-center mx-auto">
            <form class="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                <div class="d-flex justify-content-center mt-4 mt-md-0">
                    <img src={require("../../assets/9jaWivesLogo.png")} />
                </div>
                <p class="fs-4 pt-5 text-center fw-bold-0">Create a Password</p>
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
                <div class="d-flex justify-content-center mt-5">
                   <Button type="submit" className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75">
                        Continue
                    </Button>
                </div>
                <p class="text-end pe-5 pt-2"><a href="/login" class="text-fwr">Have an account? </a></p>
                <div class="pt-5 box-bottom">
                    <p class="text-center fs-6 fw-bold-0">By registering, you accept our <a class="text-fwr" href="#">terms and privacy policy</a></p>
                </div>
            </form>
        </div>
    )
}

export default Password
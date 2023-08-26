import { Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

const PhoneNumber = ()=>{
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className="phone-num d-flex justify-content-center mx-auto">
            <form className="col-lg-3 col-md-6 mt-sm-4 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-md-0">
                    <img src={require("../../assets/9jaWivesLogo.png")} />
                </div>
                <p className="fs-4 pt-2 lh-sm fw-bold-0 text-center">Verify phone number with a code</p>                
                <p className="fs-7">We will send you a verification code. It helps us keep your account secure</p>
                <FormControl helperText='Ensure you add your country code' variant="outlined" className="w-100 text-white my-2" color="warning">
                    <InputLabel className="text-white">Phone Number</InputLabel>
                    <OutlinedInput helperText='Ensure you add your country code' className="text-white" label='Phone Number' />
                    <FormHelperText className="text-white">Ensure you add your country code</FormHelperText>
                </FormControl> 
                <div className="d-flex justify-content-center mt-5 mx-auto">
                    <Button type="submit" className={isLoading ? 'border border-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'}>
                        {isLoading ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>
                <p className="text-end pe-5 pt-2"><a href="/login" className="text-fwr">Have an account? </a></p>
                <div className="pt-5 box-bottom">
                    <p className="text-center fs-6 fw-bold-0">By registering, you accept our <a className="text-fwr" href="#">terms and privacy policy</a></p>
                </div>
            </form>
        </div>
    )
}

export default PhoneNumber
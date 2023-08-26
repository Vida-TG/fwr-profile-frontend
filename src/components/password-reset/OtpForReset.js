import { Alert } from "@mui/material";
import React, { useState } from "react";
import OtpInput from "react18-input-otp";

const OtpForReset = ()=>{
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div class="otp d-flex justify-content-center mx-auto">
            <div class="col-lg-3 col-md-6 mt-5 pt-md-0 px-md-0 px-4">
                <div class="d-flex justify-content-center mt-md-0">
                    <img src={require("../../assets/9jaWivesLogo.png")} />
                </div>
                <p class="fs-4 pt-2 lh-sm fw-bold-0 text-center">We just sent you an OTP</p>
                {
                    error !== ''
                    &&
                    <Alert severity="error">
                        {error}
                    </Alert>
                }
                <p class="fs-7 text-center">
                    Enter the security code we sent to <i>ololadedavid15@gmail.com</i>
                </p>        
                <div class="d-flex justify-content-center">
                    <OtpInput 
                        numInputs={6} 
                        separator={<span>-</span>} 
                        value={otp} 
                        onChange={(enteredOtp)=>setOtp(enteredOtp)} 
                        containerStyle={'w-100'}
                        inputStyle={'w-100 form-control fs-2 bg-otp'}
                        focusStyle={'bg-otp'}
                        shouldAutoFocus={true}
                    />
                </div>
                <p class="text-center text-fwr pt-3 cursor-pointer">Didn't receive code?</p>
                <div class="d-flex justify-content-center mt-5 mx-auto">
                    <button disabled="isLoading" className={isLoading ? 'border border-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'} >
                        {isLoading ? 'Please wait...' : 'Continue'}
                    </button>
                </div>        
            </div>
        </div>
    )
}

export default OtpForReset
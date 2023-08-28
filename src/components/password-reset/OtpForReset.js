import { Alert, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import OtpInput from "react18-input-otp";

const OtpForReset = ()=>{
    const api = useSelector(state=>state.uri)
    const [otp, setOtp] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const email = JSON.parse(sessionStorage.getItem('email'))
    const navigate = useNavigate()

    useEffect(()=>{
        email == null && navigate('/reset/forgot-password')
    }, [])

    const verifyOtp = ()=>{
        if (otp.length == 6) {
            setIsLoading(true)
            setError('')
            const payload = { email, otp }
            axios.post(
                `${api}verify/verify-reset-code`,
                payload        
            ).then(res=>{
                if (res.data.status) {
                    sessionStorage.removeItem('email')
                    sessionStorage.setItem('reset-token', JSON.stringify(res.data.token))
                    navigate('/success/account-verified')
                } else {
                    setIsLoading(false)
                    setError(res.data.message)
                }
            }).catch(err=>{
                setIsLoading(false)
                setError('Internal Server Error')
            })
        }
    }

    return (
        <div className="otp d-flex justify-content-center mx-auto">
            <div className="col-lg-3 col-md-6 mt-5 pt-md-0 px-md-0 px-4">
                <div className="d-flex justify-content-center mt-md-0">
                    <img src={require("../../assets/9jaWivesLogo.png")} />
                </div>
                <p className="fs-4 pt-2 lh-sm fw-bold-0 text-center">We just sent you an OTP</p>
                {
                    error !== ''
                    &&
                    <Alert severity="error" className="mb-3">
                        {error}
                    </Alert>
                }
                <p className="fs-7 text-center">
                    Enter the security code we sent to <i>{email}</i>
                </p>        
                <div className="d-flex justify-content-center">
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
                <p className="text-center text-fwr pt-3 cursor-pointer">Didn't receive code?</p>
                <div className="d-flex justify-content-center mt-5 mx-auto">
                    <Button onClick={verifyOtp} className={isLoading ? 'border border-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'} >
                        {isLoading ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>        
            </div>
        </div>
    )
}

export default OtpForReset
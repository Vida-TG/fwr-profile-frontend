import { Button } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router";

const Success = ()=>{
    const { type } = useParams()
    const navigate = useNavigate()

    const onClickContinue = ()=>{
        if (type == 'phone-num') {
            navigate('/register/choose-country')
        } else if(type == 'account-verified'){
            navigate('/reset/reset-password')
        } else if(type == 'password-reset'){
            navigate('/login')
        } else {
            navigate('/login')
        }
    }
    return (
        <main>
            {
                type == 'phone-num'
                ?
                <div className="phone-verification-success d-flex justify-content-center mx-auto px-md-0 px-2 success">
                    <div className="col-lg-3 col-md-6 mt-5 pt-5">
                        <div className="d-flex justify-content-center">
                            <img src={require('../assets/verify_success.png')} className="img-fluid" />
                        </div>
                        <p className="text-white fs-2 fw-bold-0 text-center pt-5 pb-2">
                            Verification Successful
                        </p>
                        <p className="fs-7 text-center fw-light">
                            Your phone number has been verified successfully and your account secured. Proceed to setup your account.
                        </p>
                        <div className="d-flex justify-content-center mt-5">                
                            <Button onClick={onClickContinue} className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75" >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
                :
                type == 'account-created'
                ?
                <div className="account-creation-success d-flex justify-content-center mx-auto px-md-0 px-2 success">
                    <div className="col-lg-3 col-md-6 mt-5 pt-2">
                        <div className="d-flex justify-content-center">
                            <img src={require('../assets/account_created.png')} className="img-fluid" />
                        </div>
                        <p className="text-white fs-2 lh-sm fw-bold-0 text-center pt-2">
                            Account Successfully Created
                        </p>
                        <p className="fs-7 text-center fw-lighter">
                            Your account has been successfully registered. You can now continue to enjoy our amazing services
                        </p>
                        <div className="d-flex justify-content-center mt-5">                
                            <Button onClick={onClickContinue} className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75" >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
                :
                type == 'account-verified'
                ?
                <div className="account-verification-success d-flex justify-content-center mx-auto px-md-0 px-2 success">
                    <div className="col-lg-3 col-md-6 mt-5 pt-2">
                        <div className="d-flex justify-content-center">
                            <img src={require('../assets/undraw_verified.png')} className="img-fluid" />
                        </div>
                        <p className="text-white fs-2 lh-sm fw-bold-0 text-center pt-5">
                            Account Successfully Verified
                        </p>
                        <p className="fs-7 text-center fw-lighter">
                            Your account has been successfully verified, You can now continue to reset your password
                        </p>
                        <div className="d-flex justify-content-center mt-5">                
                            <Button onClick={onClickContinue} className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75" >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
                :
                type == 'password-reset'
                ?
                <div className="password-reset-success d-flex justify-content-center mx-auto px-md-0 px-3 success">
                    <div className="col-lg-3 col-md-6 mt-md-5 mt-1 pt-2">
                        <div className="d-flex justify-content-center">
                            <img src={require('../assets/undraw_authentication.png')} className="img-fluid" />
                        </div>
                        <p className="text-white fs-2 lh-sm fw-bold-0 text-center pt-5">
                            Password successfully reset
                        </p>
                        <p className="fs-7 text-center fw-lighter">
                            Your password has been successfully reset, You can now continue to enjoy our amazing services
                        </p>
                        <div className="d-flex justify-content-center mt-3 mb-2">                
                            <Button onClick={onClickContinue} className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75" >
                                Continue
                            </Button>
                        </div>
                    </div>
                </div>
                :
                ''
            }            
        </main>
    )
}

export default Success
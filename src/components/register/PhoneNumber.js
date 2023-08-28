import { Alert, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from "@mui/material";
import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { phonenumberSchema } from "../../schemas";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const PhoneNumber = ()=>{
    const api = useSelector(state=>state.uri)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { handleBlur, handleChange, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            phonenum: ''
        },
        validationSchema: phonenumberSchema,
        onSubmit: (values)=>{
            setError('')
            setIsLoading(true)
            const user = JSON.parse(sessionStorage.getItem('user'))
            const payload = {...user, phonenum: values.phonenum}            
            axios.post(
                `${api}auth/register`,
                payload
            ).then(res=>{
                setIsLoading(false)
                if (res.data.status) {
                    sessionStorage.setItem('country-token', JSON.stringify(res.data.token))
                    navigate('/register/choose-country')
                } else {
                    setError(res.data.message)
                }
            }).catch(err=>{
                setIsLoading(false)
                setError('Something went wrong. Try again!')
            })
        }
    })
    return (
        <div className="phone-num">            
            <div onClick={()=>navigate('/register/password')} className="btn-back py-2 px-3 border rounded-circle cursor-pointer">
                <img src={require('../../assets/backbtn.png')} />
            </div>
            <div className="d-flex justify-content-center mx-auto">
                <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 mt-sm-4 pt-md-0 px-md-0 px-4">
                    <div className="d-flex justify-content-center mt-md-0 cursor-pointer" onClick={()=>navigate('/')}>
                        <img src={require("../../assets/9jaWivesLogo.png")} />
                    </div>
                    <p className="fs-4 pt-2 lh-sm fw-bold-0 text-center">Verify phone number with a code</p>  
                    {
                        error !== ''
                        &&
                        <Alert severity="error" className="mb-3">
                            {error}
                        </Alert> 
                    }             
                    <p className="fs-7">We will send you a verification code. It helps us keep your account secure</p>
                    <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                        <InputLabel className="text-white">
                            Phone Number
                        </InputLabel>
                        <OutlinedInput
                        error={errors.phonenum && touched.phonenum}
                        name="phonenum" onChange={handleChange}
                        onBlur={handleBlur}
                            className="text-white"
                            label='Phone Number'
                        />
                        <FormHelperText className="text-white">
                            Ensure you add your country code
                        </FormHelperText>
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
        </div>
    )
}

export default PhoneNumber
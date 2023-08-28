import { Alert, Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React, { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from "formik";
import { passwordSchema } from "../../schemas";
import { useNavigate } from "react-router";

const Password = ()=>{
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const {handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: passwordSchema,
        onSubmit: (values)=>{
            const email = JSON.parse(sessionStorage.getItem('email'))
            const user = {...email, password: values.password}
            sessionStorage.setItem('user', JSON.stringify(user)) 
            sessionStorage.removeItem('email')     
            navigate('/register/phone-num')
        }
    })
    return (
        <div className="password">   
            <div onClick={()=>navigate('/register/email')} className="btn-back py-2 px-3 border rounded-circle cursor-pointer">
                <img src={require('../../assets/backbtn.png')} />
            </div>         
            <div className="d-flex justify-content-center mx-auto">
                <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 mt-sm-5 pt-md-0 px-md-0 px-4">
                    <div className="d-flex justify-content-center mt-4 mt-md-0 cursor-pointer" onClick={()=>navigate('/')}>
                        <img src={require("../../assets/9jaWivesLogo.png")} />
                    </div>
                    <p className="fs-4 pt-5 text-center fw-bold-0">Create a Password</p>
                    <FormControl variant="outlined" className="w-100 text-white my-2" color="warning">
                        <InputLabel htmlFor="outlined-adornment-password" className="text-white">Password</InputLabel>
                        <OutlinedInput
                            error={errors.password && touched.password}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            className="text-white"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="password"
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
                        <FormHelperText className="text-white">
                            At least <span className="fw-bold-0">9 characters</span> containing <span className="fw-bold-0">a letter</span> and <span className="fw-bold-0">a number</span>
                        </FormHelperText>
                    </FormControl>
                    <div className="d-flex justify-content-center mt-5">
                    <Button type="submit" className="fw-bold mx-auto text-white bg-fwr mx-2 px-5 py-3 rounded-pill w-75">
                            Continue
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

export default Password
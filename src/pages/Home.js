import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const Home = ()=>{
    const navigate = useNavigate()
    const onClickRegister =()=>{
        navigate('/register/email')
      }
      const onClickLogin = ()=>{
        navigate('/login')
      }
    return(
        <div className="home">
            <img src={require("../assets/Foreign_Wive_Reigns.png")} width="90px" height="40px" className="mx-4 mt-4"  />
            <div className="d-flex justify-content-center mx-auto animate__animated animate__fadeInUp animate__slow">        
                <div className="col-lg-3 col-md-6">
                    <div className="d-flex justify-content-center pt-5 px-md-0 px-4">
                        <img src={require("../assets/undraw_in_love.png")} className="img-fluid" />
                    </div>
                    <div>
                        <p className="fs-2 lh-sm text-center pt-5 fw-bold-0">
                            One account for numerous benefits and adventures
                        </p>
                    </div>
                    <div className="d-flex justify-content-center flex-md-row flex-column pt-5">
                        <Button onClick={onClickLogin} className="bg-black text-fwr border border-fwr px-5 mx-2 py-2 rounded-pill my-md-0 my-2 fw-bold">Login</Button>
                        <Button onClick={onClickRegister} className="text-white bg-fwr mx-2 px-5 py-2 rounded-pill fw-bold" >Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
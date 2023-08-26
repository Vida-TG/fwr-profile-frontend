import { ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";

const ChooseCountry = ()=>{
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [countryTray, setCountryTray] = useState([])
    const [isChoosing, setIsChoosing] = useState(false)
    const [chapter_id, setChapter_id] = useState(0)

    const choose = (id)=>{
        setChapter_id(id)
    }

    return (
        <div className="choose-country d-flex justify-content-center mx-auto px-md-0 px-3">
            <div className="col-lg-3 col-md-6 mt-5">
                <p className="fs-4 fw-bold-0 lh-sm">
                    What account would you like to open
                </p>
                <p className="fs-6 fw-lighter">
                    Choose the country you are married to or you are from
                </p>
                <div>
                    {
                        isLoading
                        ?
                        (
                            <p className="d-block text-fwr fw-bold">Please wait...</p>                            
                        )
                        :
                        error !== ''
                        ?
                        <div className="my-5">
                            <p className="text-danger fw-light text-center fs-7"><i className="fa fa-exclamation-triangle fa-lg pe-1"></i> {error}</p>
                        </div>
                        :
                        countryTray.length !== 0
                        ?
                        (countryTray.map(each=>(
                            <div className={chapter_id == each.id ? 'bg-fwr p-1 rounded d-flex justify-content-between mb-2 cursor-pointer' : 'd-flex justify-content-between mb-2 cursor-pointer'} onClick={()=>choose(each.id)}>
                                <div className="d-flex justify-content-between">
                                    <img src={each.image} width="'50px" height="50px" />
                                    <div className="pt-2 ps-2">
                                        <p className="my-0 fw-bold-0 fs-6">{each.name}</p>
                                        <p className="fw-lighter">{each.description}</p>
                                    </div>
                                </div>
                                <ArrowRight />
                            </div>            
                        )))
                        :
                        ''
                    }
                </div>
                <div className="d-flex justify-content-center mb-2 mx-auto">
                    <Button className={isChoosing ? 'border border-fwr bg-black fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'} >
                        {isChoosing ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseCountry
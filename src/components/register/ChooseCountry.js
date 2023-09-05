import { ArrowRight } from "@mui/icons-material";
import { Alert, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const ChooseCountry = ()=>{
    const api = useSelector(state=>state.uri)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [countryTray, setCountryTray] = useState([])
    const [isChoosing, setIsChoosing] = useState(false)
    const [chapter_id, setChapter_id] = useState(0)
    const navigate = useNavigate()

    const pickChapter = (id)=>{
        setChapter_id(id)
    }

    useEffect(()=>{
        axios.get(
            `${api}chapter/chapters`
        ).then(res=>{
            setIsLoading(false)
            setCountryTray(res.data.chapters)
        }).catch(err=>{
            setIsLoading(false)
            setError('Check your Internet Connection')
        })
    }, [])

    const chooseChapter = ()=>{
        if (chapter_id !== 0) {
            setIsChoosing(true)
            const payload = { chapter_id }
            console.log(payload)
            axios.put(
                `${api}chapter/choose`,
                payload,
                {
                    headers: {
                        'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('country-token'))}`,
                        'content-type': 'application/json',
                        'accept': 'application/json'
                      }
                }
            ).then(res=>{
                setIsChoosing(false)
                navigate('/success/account-created')
            }).catch(err=>{
                setIsChoosing(false)
                err.code == 'ERR_NETWORK' ? setError('Something went wrong. Try again!') : navigate('/register/email')
            })            
        }
    }

    return (
        <div className="choose-country d-flex justify-content-center mx-auto px-md-0 px-3">
            <div className="col-lg-3 col-md-6 mt-5">
                <p className="fs-4 fw-bold-0 lh-sm">
                    What account would you like to open
                </p>
                <p className="fs-6 fw-lighter">
                    Choose the country that represents you as a Foreign Wife:
                </p>
                {
                    error !== '' && !error.includes('Check')
                    &&
                    <Alert severity="error" className="mb-3">
                        {error}
                    </Alert>
                }
                <div>
                    {
                        isLoading
                        ?
                        (
                            <div className="d-flex justify-content-center my-5">
                                <CircularProgress color="warning" />                                                        
                            </div>
                        )
                        :
                        error !== '' && error.includes('Check')
                        ?
                        <div className="my-5">
                            <p className="text-danger fw-light text-center fs-7"><i className="fa fa-exclamation-triangle fa-lg pe-1"></i> {error}</p>
                        </div>
                        :
                        countryTray.length !== 0
                        ?
                        (countryTray.map((each, i)=>(
                            <div 
                                className={
                                chapter_id == each.id 
                                ? 
                                'bg-fwr p-1 rounded d-flex justify-content-between mb-2 cursor-pointer' 
                                : 
                                'd-flex justify-content-between mb-2 cursor-pointer'
                                }
                                key={i} 
                                onClick={()=>pickChapter(each.id)}
                            >
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
                    <Button onClick={chooseChapter} className={isChoosing ? 'border border-fwr bg-black fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75' : 'bg-fwr fw-bold mx-auto text-white mx-2 px-5 py-3 rounded-pill w-75'} >
                        {isChoosing ? 'Please wait...' : 'Continue'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChooseCountry
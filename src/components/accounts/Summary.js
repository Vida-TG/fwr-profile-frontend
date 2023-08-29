import React, { Fragment } from 'react'
import { Button, IconButton, Toolbar } from '@mui/material'
import Logo from '../../assets/9jaWivesLogo.png'
import { Close } from '@mui/icons-material'
import { useNavigate } from 'react-router'

export const Summary = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
        <div className="radial-gradient-top-left" />
        <div className="radial-gradient-bottom-right" />

        <div className="border-bottom mt-md-0 mt-5 container">
            <Toolbar className="my-0 d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <img className="sideNavLogo" src={Logo} alt="fwr-logo" />
                </div>
                <div className='loading-box'>
                    <div className="horizontal-line-container">
                        <div className="horizontal-line" />
                        <div className="round-dot" />
                    </div>
                    <div className="text-container">
                        <p className="text">Transaction</p>
                        <p className="text">Statement</p>
                    </div>
                </div>
                <IconButton sx={{ color: "#000000", backgroundColor: "#F0F0F0"}} onClick={()=>navigate('/user/statement-of-account')}>
                    <Close />
                </IconButton>
            </Toolbar>
        </div>

        <p className="fs-5 p-4 fw-bold-0 text-dark" style={{textAlign:"center"}}>
            Review the statement of your transaction
        </p>
        
        <div className="d-flex justify-content-center mb-3">
            <div>
                <div style={{ width: '90vw', maxWidth: '450px' }} className="mb-4 p-4 text-dark rounded-2 border border-dark">
                    <p className="fw-bold-0">Profile Information</p>
                    <div className="d-flex justify-content-between"><span className="col-8">Full name</span><span className="fw-bold-0 col-4">Eze Ifeanyi</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Gender</span><span className="fw-bold-0 col-4">Male</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Country of origin</span><span className="fw-bold-0 col-4">UK</span></div>
                    <hr/>
                    <p className="fw-bold-0">Applicant Information</p>
                    <div className="d-flex justify-content-between"><span className="col-8">Application Date</span><span className="fw-bold-0 col-4">10-July-2023</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Gender</span><span className="fw-bold-0 col-4">17-July-2023</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Flight Number</span><span className="fw-bold-0 col-4">VIS 234</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Flight Carrier</span><span className="fw-bold-0 col-4">Virgin Atlantic</span></div>
                    <hr/>
                    <p className="fw-bold-0">Processing Information</p>
                    <div className="d-flex justify-content-between"><span className="col-8">Processing Country</span><span className="fw-bold-0 col-4">Nigeria</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Processing Center</span><span className="fw-bold-0 col-4">Muritala Airport</span></div>
                    <hr/>
                    <p className="fw-bold-0">Payment Information</p>
                    <div className="d-flex justify-content-between"><span className="col-8">Payment Gateway</span><span className="fw-bold-0 col-4">Visa</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Payment Status</span><span className="fw-bold-0 col-4">Paid</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Payment Date</span><span className="fw-bold-0 col-4">10-July-2023</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Airport Transport</span><span className="fw-bold-0 col-4">$40</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Handing Fee</span><span className="fw-bold-0 col-4">$50</span></div>
                    <div className="d-flex justify-content-between"><span className="col-8">Total</span><span className="fw-bold-0 col-4">$350</span></div>
                </div>

                <Button  sx={{ borderRadius: "20px", textTransform: "capitalize" }}className="bg-fwr-lite col-12 rounded-8">Download</Button>
            </div>
        </div>
    </Fragment>
  )
}

